import UserTypes from "@/enums/UserTypes";

export default [
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: () => import("@/pages/admin/Dashboard.vue"),
    meta: { userType: UserTypes.ADMINISTRATOR },
  },
];
