// @flow

import * as ReactDOM from "react-dom";
import * as React from "react";
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@material-ui/core/styles';
import { hot } from "react-hot-loader/root";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import './i18n';
/**
 * bootstrap function
 * @return {void}
 */
function bootstrap() {
  console.log(
    "%c90 s r l s\n%cPratiche Auto\nTel 06 01905227",
    "font-size:1.5em;color:#1945D5;",
    "color:#14BD4C;font-size:1em;"
  );
  if (!process.env.PROD) {
    console.log("%cDeveloping mode enabled\n", "color:#a91839;font-size:1em;");
  } else {
    // Install service worker
    intallSW("/studio90srls-sw.js");
  }
  library.add(fab);
  const rootContainer = (document.getElementById("main-container"): any);
  ReactDOM.render(<Studio90srls />, rootContainer);
}

function intallSW(name: string) {
  const serviceWorker = navigator.serviceWorker;
  if (serviceWorker) {
    window.addEventListener("load", () => {
      serviceWorker
        .register(name, { scope: "./" })
        .then(registration => {
          console.log("SW registered: ", registration);
        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}
/**
 * Studio90srls main function componet
 */
function Studio90srls(props) {
  const [t, i18n] = useTranslation();
  return (
    <ThemeProvider theme="">
      <p>{t('refactoring')}</p>
    </ThemeProvider>
  );
}

export { bootstrap };
export default hot(Studio90srls);
