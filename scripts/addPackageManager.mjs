import {globby} from 'globby';
import fs from 'fs';

(
    async () => {
        const files = await globby('../packages/ui/*/package.json');
        files.forEach(async path => {
            const content = JSON.parse(fs.readFileSync(path));
            const newContent = {
                ...content,
                packageManager: 'pnpm@7.14.2'
            }
            fs.writeFileSync(path, JSON.stringify(newContent, null, 4) + '\n')
        })
    }
)()

