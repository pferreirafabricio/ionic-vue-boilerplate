import { createApp } from "vue";
import { createPinia } from 'pinia'
import { IonicVue } from "@ionic/vue";
import { Preferences } from "@capacitor/preferences";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import App from "./App.vue";
import router from "./router";

import BaseLayout from "./components/base/BaseLayout.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import Loading from "./components/Loading.vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/index.css";
import HomeRoutesByUser from "./enums/HomeRoutesByUser";

router.beforeEach(async (to, from, next) => {
  const user = await Preferences.get({ key: "user" });
  let _userId = 0;
  let _userType = 0;

  if (user.value) {
    const { userId, userType } = JSON.parse(user.value);
    _userId = userId;
    _userType = userType;
  }

  if (["login", "home", "register"].includes(to.name) && user.value) {
    next({ name: HomeRoutesByUser[_userType] });
    return;
  }

  if (!to.meta.userType) {
    next();
    return;
  }

  if (!user.value) {
    next({ name: "logout" });
    return;
  }

  if (!_userId || !_userType) {
    next({ name: "logout" });
    return;
  }

  to.matched.forEach((route) => {
    if (typeof route.meta.userType === "object") {
      if (!route.meta.userType.some((type) => type === _userType)) {
        next({ name: "not-authorized" });
        return;
      }
    }

    if (!route.meta.userType === _userType) {
      next({ name: "not-authorized" });
      return;
    }

    next();
  });
});

const pinia = createPinia();
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia);

app.component("BaseLayout", BaseLayout);
app.component("ErrorMessage", ErrorMessage);
app.component("Loading", Loading);

router
  .isReady()
  .then(() => {
    app.mount("#app");
  })
  .then(() => defineCustomElements(window));
