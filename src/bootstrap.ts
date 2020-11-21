import * as Vue from 'vue';
import studio90srls from '@/app/app.vue';


export default function () {
  console.log("%c90 s r l s\n%cPratiche Auto\nTel 06 01905227",
    "font-size:1.5em;color:#1945D5;", "color:#14BD4C;font-size:1em;");
  if (!process.env.PROD) {
    console.log("%cDeveloping mode enabled\n",
      "color:#a91839;font-size:1em;");
  } else {
    // Install service worker
    intallSW('/studio90srls-sw.js');
  }
  // Install vue main app
  Vue
    .createApp(studio90srls)
    .mount("#main-container");
}


function intallSW(name: string) {
  const serviceWorker = navigator.serviceWorker;
  if (serviceWorker) {
    window.addEventListener('load', () => {
      serviceWorker.register(name, { scope: './' }).then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
}


