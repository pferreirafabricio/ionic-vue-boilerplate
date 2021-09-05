export default {
  getPublic(state) {
    return state.publicItems;
  },
  getWithoutAuth(state) {
    return state.withoutAuth;
  },
  getNeedAuth(state) {
    return state.needAuth;
  },
  getMenuByUserType: (state) => (userType) => state[userType] || [],
};
