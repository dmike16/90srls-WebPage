import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import * as webpack from "webpack";
import pkg from "../../../lib/package";
import {hashFormatStyle, mainFiledsResolve, ModeStyle, sourceMapStyle} from "./utils";

export default function (mode: ModeStyle): webpack.Configuration {
  const hashStyle = hashFormatStyle(mode === 'development' ? 'none' : 'all');
  return {
    mode, // development or production,
    context: pkg.buildCtx.src, // taken from Env Object,
    output: {
      filename: `[name]${hashStyle.chunk}.js`,
      chunkFilename: `[id]${hashStyle.chunk}.js`,
      path: pkg.buildCtx.output.app, // taken from Env Object,
      publicPath: '/'
    },
    devtool: sourceMapStyle(mode),
    // development :'cheap-module-eval-source-map' -- production:'cheap-module-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.vue', '.vuex', '.js', '.jsx'],
      mainFields: mainFiledsResolve(pkg.buildCtx.target),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: {
            loader: 'source-map-loader'
          }
        }
      ]
    },
    optimization: {
      moduleIds: mode === 'development' ? 'named' : 'deterministic'
    },
    plugins: [
      new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
      new webpack.ProgressPlugin({})
    ]

  };
}
