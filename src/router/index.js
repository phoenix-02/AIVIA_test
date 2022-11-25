import Vue from "vue";
import VueRouter from "vue-router";
import VeeLoginForm from "../views/VeeLoginView.vue";
// import VuelidateLoginForm from "../views/VuelidateLoginView.vue";
import Products from "../views/ProductsView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/vee-login"
    },
    {
      path: "/vee-login",
      name: "vee-login",
      component: VeeLoginForm,
    },
    // {
    //   path: "/vuelidate-login",
    //   name: "vuelidate-login",
    //   component: VuelidateLoginForm,
    // },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Products,
    },
  ],
});

export default router;
