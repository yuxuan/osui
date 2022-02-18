const formatToCSS = (vars, scoped) => {
    const content = Object.entries(vars).map(([name, value]) => `    ${name}: ${value};`).join('\n');
    return scoped ? `${scoped} {\n${content}\n}\n` : `:root {\n${content}\n}\n`;
};

export default formatToCSS;
