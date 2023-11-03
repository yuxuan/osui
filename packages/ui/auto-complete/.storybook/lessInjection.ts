// copy from @reskript/config-webpack@6.0.3
import fs from 'node:fs/promises';
import {globby} from 'globby';
import less from 'less';

type Less = typeof less;

export const pMap = <T, U>(array: T[], callback: (item: T, index: number) => Promise<U>) => {
    return Promise.all(array.map(callback));
};

export class LessInjection {
    private readonly injection: string = '';

    constructor(injection: string) {
        this.injection = injection;
    }

    install(less: Less, pluginManager: Less.PluginManager) {
        pluginManager.addPreProcessor({process: code => code + '\n\n\n' + this.injection}, 998);
    }
}

export const resolveInjection = async (cwd: string, src: string, resources: string[]) => {
    const resolvedResources = await globby([...resources, `${src}/styles/*.var.less`], {cwd, absolute: true});
    const injections = await pMap(resolvedResources, v => fs.readFile(v, 'utf-8'));
    return injections.join('\n\n');
};

export interface LessConfigOptions {
    cwd: string;
    srcDirectory: string;
    variables: Record<string, string>;
    resources: string[];
}
