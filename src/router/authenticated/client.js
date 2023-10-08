import UserTypes from "@/enums/UserTypes";

export default [
  {
    path: "/client/home",
    name: "client-home",
    component: () => import("@/pages/client/Home.vue"),
    meta: { userType: UserTypes.CLIENT },
  },
];
