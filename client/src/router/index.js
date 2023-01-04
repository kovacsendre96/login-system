import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "welcome",
        name: "Welcome",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/RegisterView.vue"),
      },
      {
        path: "login",
        name: "Login",
        component: () => import("../views/LoginView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
