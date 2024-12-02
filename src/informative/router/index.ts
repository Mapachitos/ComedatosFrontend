import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = "informative";

export const informativeRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    name: ROUTE_NAME,
    component: () => import("@/informative/layout/informativeLayout.vue"),
    redirect: `/${ROUTE_NAME}/areas`, // Redirección a "areas"
    children:[
        {
            path: "areas",
            name: "areas",
            component: () => import("@/informative/pages/areas.vue"),
        },
        {
            path: "puestos",
            name: "puestos",
            component: () => import("@/informative/pages/puestos.vue"),
        },
        {
            path: "empleados",
            name: "empleados",
            component: () => import("@/informative/pages/empleados.vue"),
        },
    ]
}

export default informativeRoute;