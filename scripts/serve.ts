import { Logger } from "../tools/logger";
import common from "../tools/webpack/create-config/common";
import assets from "../tools/webpack/create-config/assets";
import styles from "../tools/webpack/create-config/styles";
import typescript from "../tools/webpack/create-config/typescript";
import broswer from "../tools/webpack/create-config/broswer"
import serve from "../tools/webpack/create-config/serve";
import { webpackServer } from "../tools/webpack/dev-serve";

const merge = require('webpack-merge');

export default async function (args: any, log: Logger) {
    const key = process.env.WEBPACK_SERVE_HTTPS_KEY || null;
    const cert = process.env.WEBPACK_SERVE_HTTPS_CERT || null;
    if (!key || !cert) {
        log.info("Serving in http. To enable https set the enviroment vaiables");
        log.info(" $ export WEBPACK_SERVE_HTTPS_KEY=pathTo/file.key");
        log.info(" $ export WEBPACK_SERVE_HTTPS_CERT=pathTo/file.crt");
    }
    const mode = "development";
    const configuratiion = [
        common(mode)
        , assets(mode)
        , styles(mode)
        , typescript(mode)
        , broswer(mode)
        , serve(cert, key)
    ];

    try {
        const result: string = await webpackServer(merge(configuratiion));
        log.info(result);
    } catch (err) {
        log.error(err);
        return 1;
    }

    return 0;
}
