import { resolve, join } from "path";

const { version } = require('../package.json');
const root = resolve(__dirname, '..');

export type PkgEnv = {
    name: string;
    version: string;
    root: string;
    buildCtx: {
        src: string;
        config: string;
        output: { [key: string]: any };
        entryPoints: { [key: string]: any };
        styles: { name: string; path: string; }[];
        assets: { src: string; dest: string; glob: string; ignore?: string }[];
        target: 'es5' | 'es2015';
        enviromentModules: { prod: string; dev: string }[];
        extractCss: boolean;
        optimizeCss: boolean;
        inlineSource: boolean;
    };
};

export default {
    name: 'studio90srls',
    root,
    version,
    buildCtx: {
        src: join(root, 'src'),
        output: { parent: join(root, 'build'), app: join(root, 'build', 'ux') },
        config: 'tsconfig.app.json',
        target: 'es2015',
        entryPoints: {
            main: './main.ts',
            polyfill: './polyfill.ts'
        },
        styles: [],
        assets: [{
            src: './assets/images/icon/tab', glob: '*.ico',
            dest: 'assets/images/icon/tab'
        }],
        enviromentModules: [],
        extractCss: false,
        optimizeCss: false,
        inlineSource: false
    }
} as PkgEnv;
