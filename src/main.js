import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Icons
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faDiscord,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faTwitter, faLinkedin, faGithub, faDiscord, faDribbble);

// Styles Setup
import "./assets/styles/reset.styles.scss";
import "./assets/styles/variables.styles.scss";
import "./app.styles.scss";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
