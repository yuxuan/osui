import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';
import {version} from 'antd';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packagePath = join(__dirname, '../package.json');
const data = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

export const osuiVersion = data.version;

export default version;
