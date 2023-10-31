/*
 * 用于将 package/ui 下的包升级到最新的storybook
 * 会删除老的storybook配置
 * 删除老的storybook包
 * 删除所有的reskript包
 * 运行 storybook init
 * 从 template 中拷贝新的配置
 * 安装 storybook 配置中的依赖
*/

import fs from 'fs';
import path from 'path';
import { spawn, exec } from 'child_process';

let flag = false;

const isAlreadyDone = (basePath) =>  fs.existsSync(`${basePath}/.storybook/preview.tsx`);

const initNewStorybook = (basePath, callback) => {
    exec('pnpm i -D @osui/icloud-theme @osui/theme', {
        cwd: basePath,
    }, (error, stdout, stderr) => {
        if (error) {
          console.error(`执行的错误: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    exec('pnpm i -D @storybook/addon-docs @storybook/addon-viewport less-plugin-npm-import vite',
        {
            cwd: basePath,
        },
        (error, stdout, stderr) => {
        if (error) {
          console.error(`执行的错误: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    const pnpm = spawn(
        'pnpm',
        ['dlx', 'storybook@latest', 'init'],
        {
            cwd: basePath,
            detached: true,
        },
    );
    pnpm.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        // 选择 vite
        if (data.includes('We were not able to detect the right builder for your project. Please select one')) {
            pnpm.stdin.write(' \n');
        }
        // 安装 eslint plugin
        if (data.includes('We have detected that you\'re using ESLint.')) {
            pnpm.stdin.write('y\n');
        }
        // 初始化后会自动启动dev服务
        // 影响后续执行，而且启动过多会导致卡顿，和端口占用
        // 停止dev服务
        if (data.includes('Starting preview')) {
            console.log(`stdout: ${data}`);
            pnpm.stdin.write('sholid be killed');
                process.kill(-pnpm.pid); // 注意负号，它表示发送信号到进程组
        }
    });
    // pnpm.stderr.on('data', (data) => {
    //     console.error(`stderr: ${data}`);
    // });
    pnpm.on('close', (code) => {
        console.log(`子进程退出，退出码 ${code}`);
        callback && callback();
    });
}

// 删除老包
// 不确定包名，正则替换删除
const deleteOldPackage = (basePath, filename) => {
    const packageJsonExists = fs.existsSync(`${basePath}/package.json`,);
    if (!packageJsonExists) {
        console.log('package.json不存在', filename);
        return;
    }
    const packageJson = fs.readFileSync(`${basePath}/package.json`, { encoding: 'utf-8' });
    const isStoryBookPackageReg = new RegExp('@storybook', 'g');
    const isReskriptPackageReg = new RegExp('@reskript', 'g');
    const isStoryBookPackage = isStoryBookPackageReg.test(packageJson) || isReskriptPackageReg.test(packageJson);
    if (!isStoryBookPackage) {
        return;
    }
    const storyPackageReg = new RegExp(
        '"@storybook/[a-zA-Z0-9-]+": "(\^)?6\.[0-9]\.[0-9]",[\r\n]',
        'g'
    );
    // const reskritPackageReg = new RegExp(
    //     // '"@reskript/[a-zA-Z0-9-]+": "^6.0.0',
    //     'g'
    // );
    const reskritPackageReg = new RegExp(
        "\"@reskript\\/[a-zA-Z0-9-]+\": \"\\^(6\\.\\d+\\.\\d+|[7-9]\\.\\d+\\.\\d+|\\d{2,}\\.\\d+\\.\\d+)\",",
        "g"
    );

    if (!flag) {
        // console.log(123, filename)
        const newJson = packageJson.replace(storyPackageReg, '').replace(reskritPackageReg, '');
        console.log(reskritPackageReg.test(packageJson), filename, packageJson);
        // fs.rmSync(`${basePath}/package.json`, { recursive: true });
        fs.writeFileSync(`${basePath}/package.json`, newJson, {encoding: 'utf-8'});
    }
}

function copyFolderSync(from, to) {
    fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

function deleteFoldersRecursive(folderPath) {
    const exists = fs.existsSync(folderPath);
    exists && fs.rmSync(folderPath, { recursive: true });
}

const editStoryBook = (basePath) => {
    const storyBookPath = `${basePath}/.storybook`;
    const templatePath = './templates/component/.storybook';
    // const storyBookExists = fs.existsSync(storyBookPath);
    // console.log(storyBookPath, storyBookExists);
    // storyBookExists && fs.rmSync(storyBookPath, { recursive: true });
    deleteFoldersRecursive(storyBookPath);
    copyFolderSync(templatePath, storyBookPath);
    deleteFoldersRecursive(`${basePath}/src/stories`);
}

const update = (filename, fn) => {
    const basePath = `./packages/ui/${filename}`;
    try {
        const isDone = isAlreadyDone(basePath);
        if (isDone) {
            fn && fn();
            return;
        }
        // deleteStorybook(basePath, filename);
         // 删除目录
        deleteFoldersRecursive(`${basePath}/.storybook`);
        // deleteOldPackage(basePath, fn);
        deleteOldPackage(basePath, filename);

        // todo: 还要删除webpack
        initNewStorybook(basePath,  () => {
            editStoryBook(basePath);
            console.log('okkkkkkk!');
            fn && fn();
        });

        // Preview -> Canvas
        fs.readdirSync(`${basePath}/stories`).map(item => {
            if (item.endsWith('.mdx')) {
                // console.log('item', item);
                const newData = fs.readFileSync(`${basePath}/stories/${item}`, { encoding: 'utf-8' })
                    .replace(/Preview/g, 'Canvas');
                fs.writeFileSync(`${basePath}/stories/${item}`, newData, { encoding: 'utf-8' })
            }
        })
        // 重命名 osui 中 Meta title
        // 避免因为重复 id 导致 storybook 无法启动
        // Todo：实际上还有纯 ComponnetName 导致的重复，没有考虑
        const icloudPath = `${basePath}/stories/icloud.stories.mdx`;
        const osuiPath = `${basePath}/stories/osui.stories.mdx`;
        const isIcloudExists = fs.existsSync(icloudPath);
        const isOsuiExists = fs.existsSync(osuiPath);
        if (isIcloudExists && isOsuiExists) {
            const icloudData = fs.readFileSync(icloudPath, { encoding: 'utf-8' });
            const osuiData = fs.readFileSync(osuiPath, { encoding: 'utf-8' });
            const s1 = osuiData.match(/<Meta title="(.+)"[ ]+\/>/);
            const s2 = icloudData.match(/<Meta title="(.+)"[ ]+\/>/);

            if (s1[1] === s2[1]) {
                const newData = osuiData.replace(
                    /<Meta title="(.+)"[ ]+\/>/g,
                    '<Meta title="$12" />'
                )
                fs.writeFileSync(osuiPath, newData, { encoding: 'utf-8' })
            }
        }

        // if (item.includes('osui')) {
        //     newData.replace(
        //         /<Meta title="(设计文档\/Affix 固钉)"  \/>/g,
        //         '<Meta title="$12" />'
        //     )
        // }


        // !flag && (flag = true);
    } catch (e) {
        console.log(e);
    }
}


const updateBatch = async () => {
    try {
        const files = fs.readdirSync('./packages/ui');
        let idx = 0;
        // files.map(filename => {
        //     const basePath = `./packages/ui/${filename}`;
        //     try {
        //         deleteStorybook(basePath);

        //         deleteOldPackage(basePath);

        //     } catch (e) {
        //         console.log(e);
        //     }
        // })
        const fn = () => {
            if (idx === files.length) {
                return;
            }
            const filename = files[idx];
            idx++;
            update(filename, fn)
        }
        fn();
    } catch (e) {
        console.log(e);
    }
};

// updateBatch();

const isPackageExist = (basePath, packageName) => {
    const packageJsonExists = fs.existsSync(`${basePath}/package.json`,);
    if (!packageJsonExists) {
        console.log('package.json不存在', filename);
        return;
    }
    const packageJson = fs.readFileSync(`${basePath}/package.json`, { encoding: 'utf-8' });
    if (packageJson.includes(`"${packageName}": "`)) {
        return true;
    }
    return false;
};


const install = ({
    name, type = 'i',
}) => {
    try {
        const files = fs.readdirSync('./packages/ui');
        let idx = 0;
        const fn = () => {
            if (idx === files.length) {
                return;
            }
            const filename = files[idx];
            idx++;
            const basePath = `./packages/ui/${filename}`;
            const isExist = isPackageExist(basePath, name);
            if (isExist) {
                console.log('已安装: ', filename);
                fn();
                return;
            }
            try {
                const isDone = isAlreadyDone(basePath);
                if (isDone) {
                    console.log('start install: ', filename);
                    const pnpm = spawn(
                        'pnpm',
                        [type, '-D', name],
                        {
                            cwd: basePath,
                            detached: true,
                        }
                    );
                    pnpm.stdout.on('data', (data) => {
                        console.log('stdout: ', data.toString());
                    })
                    pnpm.on('close', err => {
                        if (err) {
                            console.log('err: ', err);
                        } else {
                            console.log('end install: ', filename)
                        }
                        fn();
                    })
                } else {
                    console.log('已升级: ', filename);
                    fn();
                }
            } catch (e) {
                console.log(`在${filename}包运行pnpm ${i} -D ${name}出错, \n${e}`);
            }
        }
        fn();
    } catch (e) {
        console.log(e);
    }
};

// packages/ui 目录下串行安装包
// install({
//     name: 'storybook-dark-mode',
//     type: 'i'
// });

// install({
//     name: '@osui/theme',
//     type: 'i',
// })
// install({
//     name: '@osui/icloud-theme',
//     type: 'i',
// })
