import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Styles Setup
import "./assets/styles/reset.styles.scss";
import "./assets/styles/variables.styles.scss";
import "./app.styles.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
