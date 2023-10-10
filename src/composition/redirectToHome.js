import { useRouter } from "vue-router";
import HomeRoutesByUser from "../enums/HomeRoutesByUser";

export default function () {
  const router = useRouter();

  /**
   * Redirect user by type
   * @param {number | string} userTypeId
   * @param {object} routeParams
   * @param {boolean} reload
   * @returns
   */
  function redirectTo(userTypeId, routeParams, reload = false) {
    if (!reload) {
      router.push({
        name: HomeRoutesByUser[userTypeId] || "logout",
        params: routeParams,
      });
      return;
    }

    const redirect = router.resolve({
      name: HomeRoutesByUser[userTypeId] || "logout",
      params: routeParams,
    });

    window.location = redirect.href;
  }

  return {
    redirectTo,
  };
}
