import UserTypes from "./UserTypes";

/**
 * Default routes to redirect the user
 */
export default {
  [UserTypes.CLIENT]: "client-home",
  [UserTypes.ADMINISTRATOR]: "admin-dashboard",
};
