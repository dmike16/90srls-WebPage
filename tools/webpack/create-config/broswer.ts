import {ModeStyle} from "./utils";
import * as webpack from "webpack";
import pkg from "../../../lib/package";

const workbox = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

export default function (mode: ModeStyle): webpack.Configuration {
  const terserOptions = {
    ecma: pkg.buildCtx.target === 'es2015' ? 6 : 5,
    sourceMap: true,
    safari10: true,
    output: {
      ascii_only: true
    }
  };

  let extracPlugin = [];
  if (mode === 'production') {
    extracPlugin.push(new workbox.InjectManifest({
      swSrc: './studio90srls-sw.js',
      swDest: 'studio90srls-sw.js'
    }));
  }

  return {
    entry: {
      ...pkg.buildCtx.entryPoints
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          include: pkg.buildCtx.src,
          use: {
            loader: 'html-loader'
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        parallel: mode === 'production',
        terserOptions
      })],
      runtimeChunk: 'single', // extract webpack boilerplate
      splitChunks: {
        maxAsyncRequests: Infinity,
        cacheGroups: {
          defaultVendors: {
            name: 'vendor',
            enforce: true,
            reuseExistingChunk: true,
            chunks: (chunks) => chunks.name === 'main',
            test: /[\\/]node_modules[\\/]/
          },
          default: {
            chunks: 'async',
            minChunks: 2,
            priority: 5
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 2,
            chunks: 'async'
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        xhtml: true
      }),
      ...extracPlugin
    ]
  };
}
