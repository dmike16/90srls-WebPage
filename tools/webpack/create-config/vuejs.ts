import {Configuration} from "webpack";
import {VueLoaderPlugin} from "vue-loader"
import {ModeStyle} from "./utils";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import {join} from "path";
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
              appendTsSuffixTo: [/\.vue$/]
            }
          }]
        }

      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ]
  }
}

