import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import StartGame from "../views/StartGame.vue";
import CardsOnly from "../views/CardsOnly.vue";
import CheatSheet from "../views/CheatSheet.vue";
import Cards from "../admin/views/Cards.vue";
import CreateCard from "../admin/views/CreateCard.vue";

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
  {
    path: "/cheat-sheet",
    name: "cheat-sheet",
    component: CheatSheet,
  },
  {
    path: "/admin",
    name: "admin",
    component: Cards,
  },
  {
    path: "/admin/new-card",
    name: "new-card",
    component: CreateCard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
