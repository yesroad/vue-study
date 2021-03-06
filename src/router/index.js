import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Register = () => import("@/views/register");
const Login = () => import("@/views/login");
const NotFound = { template: "<div>Not Found</div>" };

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/register", component: Register, name: "Register" },
    { path: "/login", component: Login, name: "Login" },
    { path: "*", component: NotFound, name: "NotFound" },
  ],
});

export default router;
