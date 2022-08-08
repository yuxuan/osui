/* eslint-disable complexity, no-console */
import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import fetch from 'node-fetch';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import svgson from 'svgson';
import stringifyObject from 'stringify-object';
import _ from 'lodash';
import Svgo from 'svgo';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const svgo = new Svgo({
    multipass: true,
    removeViewBox: false,
    floatPrecision: 3,
});

const ENDPOINT = process.env.DLS_ICONS_API;
const TARGET = process.argv[2] === 'osui' ? 'osui-icons' : 'osui-icons-icloud';

const RAW_DIR = path.resolve(__dirname, `../../${TARGET}`, 'raw');
// const RAW_COLORFUL_DIR = path.resolve(__dirname, `../../${TARGET}`, 'colorfulRaw');
const SVG_DIR = path.resolve(__dirname, `../../${TARGET}`, 'svg');
const ICON_PATTERN = /^(.+)\.svg$/;
const MODULE_TPL = fs.readFileSync(
    path.resolve(__dirname, 'component.tpl'),
    'utf8'
);

const EXPORT_TPL = fs.readFileSync(
    path.resolve(__dirname, 'export.tpl'),
    'utf8'
);

const DECLARE_TPL = fs.readFileSync(
    path.resolve(__dirname, 'declare.tpl'),
    'utf8'
);

const ICON_PACKS = ['osui-icons', 'osui-icons-icloud'];

function getPackDir(name) {
    return path.resolve(__dirname, `../../${name}`);
}

function walkElement(el, { enter, leave }) {
    if (typeof enter === 'function') {
        enter(el);
    }
    if (el.children && el.children.length) {
        el.children.forEach(child => {
            child.parentNode = el;
            walkElement(child, { enter, leave });
            delete child.parentNode;
        });
    }
    if (typeof leave === 'function') {
        leave(el);
    }
}

async function getSVGFiles(DIR, { keepSvgFill = false }) {
    if (ENDPOINT) {
        const { data } = JSON.parse(await fetch(ENDPOINT).then(res => res.text()));

        data.forEach(({ label, svg }) => {
            fs.writeFileSync(path.join(DIR, label.replace(/_/g, '-') + '.svg'), svg, 'utf8');
        });

        return data.map(({ label, svg }) => ({
            slug: label.replace(/_/g, '-'),
            content: svg,
            keepSvgFill,
        }));
    } else {
        return fs
            .readdirSync(DIR)
            .filter(file => ICON_PATTERN.test(file))
            .map(file => {
                const slug = file.replace(ICON_PATTERN, (_, $1) => $1);
                const content = fs.readFileSync(path.resolve(DIR, file), 'utf8');
                return {
                    slug,
                    content,
                    keepSvgFill,
                };
            });
    }
}

function getContextAttr(el, attr) {
    let node = el.parentNode;
    while (node) {
        if (node.attributes && node.attributes[attr]) {
            return node.attributes[attr];
        }

        node = node.parentNode;
    }
    return null;
}

async function normalizeSVG(content, file, keepSvgFill) {
    const { error, data } = await svgo.optimize(content);
    if (error) {
        console.error(file, error);
        return;
    }

    const el = await svgson.default(data);
    console.log(`Normalizing ${file}...`);
    const { attributes } = el;
    let { width, height } = attributes;
    const { viewBox } = attributes;

    if (!viewBox && !(width && height)) {
        console.error(file, 'doesn\'t contain a valid size declaration.');
        console.error(width, height, viewBox);
    } else if (viewBox) {
        // has viewBox, override width/height
        [, width, height] = (viewBox.match(/0 0 (\d+) (\d+)/) || []).map(size =>
            parseInt(size, 10)
        );
    } else {
        // no viewBox, use width/height
        attributes.viewBox = `0 0 ${width} ${height}`;
    }

    if (!keepSvgFill) {
        walkElement(el, {
            enter(node) {
                const { attributes } = node;

                delete attributes.class;

                const ctxFill = (getContextAttr(node, 'fill') || '').toLowerCase();
                const ctxStroke = (getContextAttr(node, 'stroke') || '').toLowerCase();
                const attrFill = (attributes.fill || '').toLowerCase();
                const attrStroke = (attributes.stroke || '').toLowerCase();

                if (attrFill) {
                    if (!ctxFill) {
                        if (attrFill !== 'none') {
                            attributes.fill = 'currentColor';
                            console.log(`  fill: ${attrFill} → currentColor`);
                        }
                    } else if (attrFill === ctxFill) {
                        delete attributes.fill;
                        console.log(`  fill: ${attrFill} → / (same as context)`);
                    } else if (attrFill !== 'none') {
                        attributes.fill = 'currentColor';
                        console.log(
                            `  fill: ${attrFill} → currentColor (different from context)`
                        );
                    }
                }

                if (attrStroke) {
                    if (!ctxStroke) {
                        const strokeIsNoteNone = attrStroke !== 'none';
                        if (strokeIsNoteNone) {
                            attributes.stroke = 'currentColor';
                            console.log(`  stroke: ${attrStroke} → currentColor`);
                        } else {
                            delete attributes.stroke;
                            console.log(`  stroke: ${attrStroke} → / (same as default)`);
                        }
                    } else if (attrStroke && attrStroke === ctxStroke) {
                        delete attributes.stroke;
                        console.log(`  stroke: ${attrStroke} → / (same as context)`);
                    } else if (attrStroke !== 'none') {
                        attributes.stroke = 'currentColor';
                        console.log(
                            `  stroke: ${attrStroke} → currentColor (different from context)`
                        );
                    }
                }
            },
        });
    }

    return {
        el,
        content: svgson.stringify(el),
        width,
        height,
    };
}

async function generate() {
    rimraf.sync(SVG_DIR);
    mkdirp.sync(SVG_DIR);

    ICON_PACKS.forEach(pack => {
        const iconsDir = path.join(getPackDir(pack), 'src/icons');
        rimraf.sync(iconsDir);
        mkdirp.sync(iconsDir);
    });

    Promise.all([
        await getSVGFiles(RAW_DIR, { keepSvgFill: false }),
        // await getSVGFiles(RAW_COLORFUL_DIR, { keepSvgFill: true }),
    ])
        .then(svgs => _.flatten(svgs).map(
            async ({ slug, content, keepSvgFill }) => {
                const file = `${slug}.svg`;
                const { el, content: svg, width, height } = await normalizeSVG(content, file, keepSvgFill);

                fs.writeFileSync(path.join(SVG_DIR, file), svg, 'utf8');

                const name = _.upperFirst(_.camelCase(slug));

                const iconCode = stringifyObject(
                    {
                        name: `icon-${slug}`,
                        content: el.children.map(child => svgson.stringify(child)).join(''),
                        width: Number(width),
                        height: Number(height),
                    },
                    {
                        indent: '  ',
                    }
                );

                const moduleCode = MODULE_TPL.replace(/\{slug\}/g, slug)
                    .replace(/\{name\}/g, name)
                    .replace(/\{icon\}/g, iconCode);

                ICON_PACKS.forEach(pack => {
                    const iconsDir = path.join(getPackDir(pack), 'src/icons');
                    fs.writeFileSync(path.join(iconsDir, `${name}.js`), moduleCode, 'utf8');
                });

                return { slug, name, file };
            }))
        .then(normalizedIconsPromises => {
            Promise.all(
                normalizedIconsPromises
            )
                .then(icons => {
                    const exportFile = icons
                        .map(({ slug, name }) =>
                            EXPORT_TPL.replace(/\{slug\}/g, slug).replace(/\{name\}/g, name)
                        )
                        .join('') + 'export createIcon from \'./createIcon\';\n';
                    let decalreFile = icons
                        .map(({ slug, name }) =>
                            DECLARE_TPL.replace(/\{slug\}/g, slug).replace(/\{name\}/g, name)
                        );
                    decalreFile.unshift(`
interface IconProps extends React.SVGProps<SVGSVGElement> {
    scale?: number;
}
`
                    );
                    decalreFile = decalreFile.join('');
                    ICON_PACKS.forEach(pack => {
                        const packDir = getPackDir(pack);
                        fs.writeFileSync(path.join(packDir, 'src/index.js'), exportFile, 'utf8');
                        fs.writeFileSync(path.join(packDir, 'src/index.d.ts'), decalreFile, 'utf8');

                        const readmeFile = path.join(packDir, 'README.md');
                        const readmeTpl = fs.readFileSync(
                            path.join(packDir, 'build/readme.tpl'),
                            'utf8'
                        );
                        const cols = 3;
                        const iconTable =
                            '<table><tbody>'
                            + Array.from({ length: Math.ceil(icons.length / cols) })
                                .map((_, i) => {
                                    return Array.from({ length: cols })
                                        .map((_, j) => icons[i * cols + j])
                                        .map(
                                            icon =>
                                                `<td align="center">${
                                                    icon
                                                        ? `
                                                        <img width="16" height="16" src="./svg/${icon.file}"/>
                                                        <br/><sub>Icon${icon.name}</sub>
                                                        `
                                                        : ''
                                                }</td>`
                                        )
                                        .join('');
                                })
                                .map(row => `<tr>${row}</tr>`)
                                .join('')
                            + '</tbody></table>';
                        const readme = readmeTpl.replace(/{iconTable}/g, iconTable);
                        fs.writeFileSync(readmeFile, readme, 'utf8');
                    });

                    console.log(`Normalized ${icons.length} icons.`);
                });
        });

}


generate();
