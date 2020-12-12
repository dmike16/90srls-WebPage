import vuejs from "../tools/webpack/create-config/vuejs";
import pkg from "../lib/package";
import {Logger} from "../tools/logger";
import {webpackBundle, WebpackCompilationOutput} from "../tools/webpack/compiler";
import assets from "../tools/webpack/create-config/assets";
import broswer from "../tools/webpack/create-config/broswer";
import common from "../tools/webpack/create-config/common";
import styles from "../tools/webpack/create-config/styles";
import {merge} from "webpack-merge";


export default async function (args: any, log: Logger) {
  const mode = "production";
  pkg.buildCtx.extractCss = true;
  const configuratiion = [
    common(mode)
    , vuejs(mode)
    , assets(mode)
    , styles(mode)
    , broswer(mode)
  ];
  try {
    const bundle: WebpackCompilationOutput = await webpackBundle(merge(configuratiion));
    log.info(bundle.result);
  } catch (err) {
    log.error(err.error || err);
    return 1;
  }

  return 0;
}
