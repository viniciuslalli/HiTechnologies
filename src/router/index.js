
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/criar",
      component: () => import("@/pages/CreateCompany.vue"),
    },
    {
      path: "/listar",
      component: () => import("@/pages/ListCompany.vue"),
    },
    
  ]
})

