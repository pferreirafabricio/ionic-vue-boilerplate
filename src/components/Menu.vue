<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-header>
      <ion-toolbar class="ion-text-center" :color="isLoggedIn ? 'primary' : ''">
        <ion-title v-if="isLoggedIn" class="remove-padding ">Welcome {{ userName }}</ion-title>
        <!-- <ion-img
          v-else
          class="w-50 mx-auto py-2"
          src="assets/icon/logo.png"
        /> -->
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list id="inbox-list">
        <ion-menu-toggle
          v-for="(menuItem, index) in menuItems"
          :key="`${menuItem.title}${index}`"
        >
          <ion-item
            lines="none"
            detail="false"
            class="hydrated"
            router-direction="root"
            v-if="menuItem.type !== 2 && menuItem.type !== 'category'"
            @click="redirect(index, menuItem)"
            :class="{ selected: selectedIndex === index }"
          >
            <ion-icon slot="start" :icon="menuItem.icon"></ion-icon>
            <ion-label>{{ menuItem.title }}</ion-label>
            <ion-icon
              v-if="menuItem.link"
              :icon="Icon.openOutline"
              class="fs-16"
            ></ion-icon>
          </ion-item>
          <span v-else-if="menuItem.type === 2 && (i !== appPages.length - 1)">
            <hr />
          </span>
          <span v-else-if="menuItem.type === 'category' && (i !== appPages.length - 1)">
            <ion-item>
              <h1 class="">
                <b>{{ menuItem.title }}</b>
              </h1>
            </ion-item>
          </span>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  openOutline,
  build,
  wallet,
  book,
  personAdd,
  megaphone,
  power,
  paperPlane,
  enter,
} from 'ionicons/icons';

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
} from '@ionic/vue';

import { ref } from 'vue';

import { mapGetters } from 'vuex';
import { useRouter } from 'vue-router';

import { Storage } from '@capacitor/storage';

export default {
  name: 'Menu',
  components: {
    IonContent,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
  },
  computed: {
    ...mapGetters('menu', [
      'getPublic',
      'getWithoutAuth',
      'getNeedAuth',
      'getMenuByUserType',
    ]),
    ...mapGetters('user', ['getUserType', 'getUserName']),
    menuItems() {
      return this.appPages;
    },
  },
  setup() {
    const selectedIndex = ref(0);
    const isLoggedIn = ref(false);
    const router = useRouter();
    const userName = ref('');

    const Icon = ref({
      build,
      paperPlane,
      wallet,
      megaphone,
      book,
      personAdd,
      power,
      enter,
      openOutline,
    });

    const appPages = ref([]);

    return {
      userName,
      router,
      Icon,
      isLoggedIn,
      selectedIndex,
      appPages,
    };
  },
  mounted() {
    this.emitter.on('logged', async () => {
      await this.mountMenu();
      this.fillUserName();
    });

    this.mountMenu();
    this.fillUserName();
  },
  beforeUnmount() {
    this.mountMenu();
  },
  methods: {
    async verifyIsLoggedIn() {
      const token = await Storage.get({ key: 'token' });
      console.log(token);
      this.isLoggedIn = !!token.value;
    },
    async mountMenu() {
      await this.verifyIsLoggedIn();

      let userType = await this.getUserType;
      userType = await this.getUserType;

      const userMenuItems = await this.getMenuByUserType(userType);

      this.appPages = [
        ...(this.isLoggedIn && userMenuItems ? userMenuItems : []),
        ...(this.isLoggedIn ? this.getNeedAuth : this.getWithoutAuth),
        ...this.getPublic,
      ];

      this.$forceUpdate();
    },
    redirect(index, menuItem) {
      this.selectedIndex = index;

      if (menuItem.link) {
        window.open(menuItem.link, '_blank');
        return;
      }

      // eslint-disable-next-line no-unused-expressions
      menuItem.url !== '/logout' ? this.router.push(menuItem.url) : (window.location = menuItem.url);
    },
    async fillUserName() {
      const name = await this.getUserName;
      this.userName = name.split(' ')[0] || '';
    },
  },
};
</script>

<style scoped>
hr {
  border-top: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-content {
  --padding-start: 16px;
  --padding-end: 8px;
  --padding-bottom: 20px;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu ion-list-header {
  flex-direction: column;
}

ion-menu ion-note {
  color: white;
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 00;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.remove-padding {
  padding-inline: 0;
}
</style>
