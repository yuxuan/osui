const formatToVariables = (variables, prefix) => {
    const content = Object.entries(variables).map(
        ([name, value]) => `${prefix}${name.slice(2)}: ${value};`).join('\n'
    );
    return content + '\n';
};

export default formatToVariables;
