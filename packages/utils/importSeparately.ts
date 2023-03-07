export const importSeparately = (importString: string) => {
    return (/\{([A-Za-z].+)\}/.exec(importString))?.[1].split(',')
        .map(i => i.trim())
        .map(i => `import ${i} from '@osui/${i.toLocaleLowerCase()}';`);
};

