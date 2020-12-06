import {ModeStyle, hashFormatStyle} from "./utils";
import pkg from "../../../lib/package";
import * as webpack from "webpack";

const CopyWebpackPlugin = require('copy-webpack-plugin');

export default function (mode: ModeStyle): webpack.Configuration {
  const hashStyle = hashFormatStyle(mode === 'development' ? 'none' : 'all');

  const extraPLugins = [];
  const staticIgnore = ['.gitkeep', ' ** /.DS_Store', '**/Thumbs.db'];
  const assetsOptions = pkg.buildCtx.assets.map((entry) => ({
    context: entry.src, to: entry.dest, from: entry.glob,
    globOptions: {dot: true, ignore: staticIgnore.concat(entry.ignore || [])}
  }));

  if (assetsOptions.length > 0) {
    extraPLugins.push(
      new CopyWebpackPlugin({
        patterns: assetsOptions,
      })
    );
  }

  return {
    module: {
      rules: [
        {
          test: /\.(svg|jpg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {name: `[path][name]${hashStyle.file}.[ext]`}
            }
          ]

        },
        {
          test: /\.(png)$/,
          use: [
            {
              loader: 'url-loader',
              options:
              {
                limit: 10000,
                name: `[path][name]${hashStyle.file}.[ext]`
              }
            }
          ]
        }

      ]
    },
    plugins: [
      ...extraPLugins
    ]
  };
}
