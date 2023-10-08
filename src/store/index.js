import { createStore } from "vuex";

import general from "./modules/general/index";
import login from "./modules/login/index";
import user from "./modules/user/index";
import menu from "./modules/menu/index";

const store = createStore({
  modules: {
    general,
    login,
    user,
    menu,
  },
});

export default store;
