import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import { Storage } from '@capacitor/storage';
import mitt from 'mitt';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import App from './App.vue';
import router from './router';
import store from './store';
import Utils from './utils/index';

import redirectToHome from './composition/redirectToHome';

import BaseLayout from './components/base/BaseLayout.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import Loading from './components/Loading.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/index.css';

/* Bootstrap utilities */
import './assets/css/bootstrap-grid.min.css';

router.beforeEach(async (to, from, next) => {
  const user = await Storage.get({ key: 'user' });
  let lUserId = 0;
  let lUserType = 0;

  if (user.value) {
    const { userId, userType } = JSON.parse(user.value);
    lUserId = userId;
    lUserType = userType;
  }

  if (['login', 'home', 'register'].includes(to.name) && user.value) {
    next({ name: redirectToHome().routes[lUserType] });
    return;
  }

  if (!to.meta.userType) {
    next();
    return;
  }

  if (!user.value) {
    next({ name: 'logout' });
    return;
  }

  if (!lUserId || !lUserType) {
    next({ name: 'logout' });
    return;
  }

  to.matched.some((route) => {
    if (typeof route.meta.userType === 'object') {
      if (!route.meta.userType.some((type) => type === lUserType)) {
        next({ name: 'not-authorized' });
        return;
      }
    }

    if (!route.meta.userType === lUserType) {
      next({ name: 'not-authorized' });
      return;
    }

    next();
  });
});

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

app.config.globalProperties.emitter = mitt();
app.config.globalProperties.$validate = Utils.validations;

app.component('base-layout', BaseLayout);
app.component('error-message', ErrorMessage);
app.component('loading', Loading);

router.isReady()
  .then(() => {
    app.mount('#app');
  })
  .then(() => defineCustomElements(window));
