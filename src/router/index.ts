import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NewGame from "../views/NewGame.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/card-flipping",
    name: "card-flipping",
    component: NewGame,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
