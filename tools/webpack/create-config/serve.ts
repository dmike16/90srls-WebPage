import { readFileSync } from "fs";
import { ModeStyle } from "./utils";
import * as webpack from "webpack";

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

export default function(
    cert: string,
    key: string,
    mode: ModeStyle
): webpack.Configuration {
    return {
        devServer: {
            host: "localhost",
            publicPath: "/",
            https:
                key && cert
                    ? {
                          key: readFileSync(key),
                          cert: readFileSync(cert)
                      }
                    : false,
            port: 4200,
            hot: mode === "development"
        },
        plugins: [...(mode === "development" ? [new ReactRefreshWebpackPlugin({
            disableRefreshCheck: true
        })] : [])]
    } as any;
}
