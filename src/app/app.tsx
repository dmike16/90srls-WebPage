//@flow

import * as React from "react";
import * as ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import "./i18n";
import { reducer, initialPreferences } from "./preferences";
import useAppTheme from "./app-theme";
import Sd90srlsHeader from "./header/header";
import {loggerConfig} from "./miscellaneous";
import Sd90srlsFooter from "./footer/footer";
/**
 * bootstrap function
 * @return void
 */
function bootstrap() {
  console.log(
    "%c90 s r l s\n%cPratiche Auto\nTel 06 01905227",
    "font-size:1.5em;color:#1945D5;",
    "color:#14BD4C;font-size:1em;"
  );
  if (!process.env.PROD) {
    configureLogger(loggerConfig.LOGGER_PACKAGE.root, loggerConfig.DEV_LOG_LEVEL);
    console.log("%cDeveloping mode enabled\n", "color:#a91839;font-size:1em;");
  } else {
    configureLogger(loggerConfig.LOGGER_PACKAGE.root, loggerConfig.PROD_LOG_LEVEL);
    // Install service worker
    intallSW("/studio90srls-sw.js");
  }
  library.add(fab);
  const rootContainer = (document.getElementById("main-container") as any);
  rootContainer.style.display='flex';
  rootContainer.style.flexDirection='column';
  rootContainer.style.minHeight='100vh';
  ReactDOM.render(<Studio90srls />, rootContainer);
}

function intallSW(name: string) {
  const serviceWorker = navigator.serviceWorker;
  if (serviceWorker) {
    window.addEventListener("load", () => {
      serviceWorker
        .register(name, { scope: "./" })
        .then(registration => {
          console.info("SW registered: ", registration);
        })
        .catch(registrationError => {
          console.error("SW registration failed: ", registrationError);
        });
    });
  }
}
/**
 * Studio90srls main function componet
 */
function Studio90srls(props: any) {
  const [t, i18n] = useTranslation();
  const [state, dispatch] = React.useReducer(reducer, {}, initialPreferences);
  const theme = useAppTheme(state.theme, i18n.language);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sd90srlsHeader/>
      <Typography variant="body2">{t("refactoring")}</Typography>
      <Sd90srlsFooter/>
    </ThemeProvider>
  );
}

/**
 * Configure app logging
 */
function configureLogger(name: string, level: 'INFO' | 'ERROR' | 'WARN'): void {
    localStorage.setItem(name, level);
}

export { bootstrap };
export default Studio90srls;
