import { readFileSync } from "fs";
import * as webpack from "webpack";


export default function (cert: string, key: string, hot = true): webpack.Configuration {
    return {
        devServer: {
            host: 'localhost',
            publicPath: '/',
            https: key && cert ? {
                key: readFileSync(key),
                cert: readFileSync(cert)
            } : false,
            port: 4200,
            hot
        }
    } as any;
}
