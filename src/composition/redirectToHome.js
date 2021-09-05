import { useRouter } from 'vue-router';
import UserTypes from '../enums/UserTypes';

export default function () {
  const router = useRouter();

  /**
   * Default routes to redirect the user
   */
  const routes = {
    [UserTypes.CLIENT]: 'client-home',
    [UserTypes.ADMINISTRATOR]: 'admin-home',
  };

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
        name: routes[userTypeId] || 'logout',
        params: routeParams,
      });
      return;
    }

    const redirect = router.resolve({
      name: routes[userTypeId] || 'logout',
      params: routeParams,
    });

    window.location = redirect.href;
  }

  return {
    routes,
    redirectTo,
  };
}
