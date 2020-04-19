import { ModeStyle } from "./utils";
import * as webpack from "webpack";
import pkg from "../../../lib/package";
import  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


export default function(mode: ModeStyle): webpack.Configuration {
    const enviromentAlias = pkg.buildCtx.enviromentModules.reduce<{
        [key: string]: string;
    }>((acc, m) => {
        acc[m.dev] = m.prod;
        return acc;
    }, {});

    return {
        resolve: {
            alias: enviromentAlias
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        esmodules: true
                                    },
                                    modules: false,
                                    useBuiltIns: "entry",
                                    corejs: "3.2.1"
                                }
                            ],
                            "@babel/preset-flow",
                            "@babel/preset-react",
                            ["@babel/preset-typescript", {onlyRemoveTypeImports: true}]
                        ],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-export-default-from",
                            "@babel/plugin-proposal-export-namespace-from",
                            ...(mode === "development"
                                ? ["react-refresh/babel"]
                                : [])
                        ]
                    }
                }
            ]
        },
        plugins: [new ForkTsCheckerWebpackPlugin({
            tsconfig: pkg.buildCtx.config
        })]
    };
}
