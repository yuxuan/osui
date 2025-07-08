import fs from 'fs';
import packageJson from '../package.json' with {type: 'json'};

const esPath = 'es/index.js';
const libPath = 'lib/index.js';

fs.writeFileSync(esPath, `export default '${packageJson.version}';\n`);
fs.writeFileSync(libPath, `export default '${packageJson.version}';\n`);
