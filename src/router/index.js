import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView/HomeView.component.vue";
import TechnologiesView from "../views/technologiesView/TechnologiesView.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/technologies",
      name: "technologies",
      component: TechnologiesView,
    },
  ],
});

export default router;
