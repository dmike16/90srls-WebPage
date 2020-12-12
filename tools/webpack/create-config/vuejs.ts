import {Configuration} from "webpack";
import {VueLoaderPlugin} from "vue-loader"
import {ModeStyle} from "./utils";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import {join} from "path";
import ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
import pkg from "../../../lib/package";

export default function vuejs(mode: ModeStyle): Configuration {
  return {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
        '@': pkg.buildCtx.src
      },
      plugins: [new TsconfigPathsPlugin({configFile: join(pkg.buildCtx.src, pkg.buildCtx.config)})]
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.ts$/,
          use: [{
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/]
            }
          }]
        }

      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new ForkTsCheckerWebpackPlugin({
        async: mode === 'development',
        typescript: {
          configFile: join(pkg.buildCtx.src, pkg.buildCtx.config),
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc'
            }
          }
        }
      })
    ]
  }
}

