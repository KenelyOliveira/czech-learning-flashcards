import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import CardFlippingView from "../views/CardFlippingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card-flipping",
    name: "CardFlipping",
    component: CardFlippingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
