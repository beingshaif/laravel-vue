import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";

const routes = [
    {
        path: "/",
        name: "home",
        component: Bookables,
    },
    {
        path: "/bookable/:id",
        name: "bookable",
        component: Bookable,
    },
];

const router = new VueRouter({
    routes, //short for `routes: routes`
    mode: "history",
});

export default router;
