import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import StartGame from "../views/StartGame.vue";
import CardsOnly from "../views/CardsOnly.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/start",
    name: "start",
    component: StartGame,
  },
  {
    path: "/cards",
    name: "cards",
    component: CardsOnly,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
