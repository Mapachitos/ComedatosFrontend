import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = "contests";

export const contestsRouter: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    name: ROUTE_NAME,
    component: () => import("@/contests/layout/contestsLayout.vue"),
    redirect: `/${ROUTE_NAME}/contestInformation`, // Redirección a "areas"
    children:[
        {
            path: "contestInformation",
            name: "contestInformation",
            component: () => import("@/contests/pages/contestInformation.vue"),
        },
    ]
}

export default contestsRouter;