import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import Example2 from "./components/Example2";

const routes = [
    {
        path: "/",
        name: "home",
        component: Bookables,
    },
    {
        path: "/second",
        name: "second",
        component: Example2,
    },
];

const router = new VueRouter({
    routes, //short for `routes: routes`
    mode: "history",
});

export default router;
