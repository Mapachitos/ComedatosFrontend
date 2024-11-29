import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = "auth";

export const authRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    name: ROUTE_NAME,
    component: () => import("../layout/AuthLayout.vue"),
    props: true,
}

export default authRoute;