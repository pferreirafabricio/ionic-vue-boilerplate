<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-header>
      <ion-toolbar class="welcome-container" color="primary">
        <span>Welcome {{ userName }}</span>
        <Image style="width: 50px" src="assets/icon/logo.png" />
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list id="inbox-list">
        <ion-menu-toggle
          v-for="(menuItem, index) in appPages"
          :key="`${menuItem.title}${index}`"
          :auto-hide="false"
        >
          <ion-item
            v-if="menuItem.type !== 2 && menuItem.type !== 'category'"
            lines="none"
            detail="false"
            class="hydrated"
            router-direction="root"
            :class="{ selected: selectedIndex === index }"
            @click="redirect(index, menuItem)"
          >
            <ion-icon slot="start" :icon="menuItem.icon"></ion-icon>
            <ion-label>{{ menuItem.title }}</ion-label>
            <ion-icon
              v-if="menuItem.link"
              :icon="Icon.openOutline"
              class="fs-16"
            ></ion-icon>
          </ion-item>
          <span
            v-else-if="menuItem.type === 2 && index !== appPages.length - 1"
          >
            <hr />
          </span>
          <span
            v-else-if="
              menuItem.type === 'category' && index !== appPages.length - 1
            "
          >
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

<script setup>
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
} from "ionicons/icons";

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
} from "@ionic/vue";

import { onBeforeUnmount, onMounted, ref, computed } from "vue";

import { useRouter } from "vue-router";

import { Preferences } from "@capacitor/preferences";
import { useMenuStore } from "../store/menu";
import { useUserStore } from "../store/user";
import emitter from "../plugins/emitter";
import Image from "../components/Image.vue";

const menuStore = useMenuStore();
const userStore = useUserStore();

const getPublic = computed(() => menuStore.getPublic);
const getWithoutAuth = computed(() => menuStore.getWithoutAuth);
const getNeedAuth = computed(() => menuStore.getNeedAuth);
const getMenuByUserType = computed(() => menuStore.getMenuByUserType);
const getUserType = computed(() => userStore.getUserType);
const getUserName = computed(() => userStore.getUserName);

const selectedIndex = ref(0);
const isLoggedIn = ref(false);
const router = useRouter();
const userName = ref("Guest");

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

async function handleLogin() {
  await mountMenu();
  await fillUserName();
}

onMounted(async () => {
  emitter.on("logged", handleLogin);

  await mountMenu();
  await fillUserName();
});

onBeforeUnmount(async () => {
  await mountMenu();
  emitter.off("logged", handleLogin);
});

async function verifyIsLoggedIn() {
  const token = await Preferences.get({ key: "token" });
  isLoggedIn.value = !!token.value;
}

async function mountMenu() {
  await verifyIsLoggedIn();

  let userType = await getUserType.value;
  userType = await getUserType.value;

  const userMenuItems = getMenuByUserType.value(userType.value);

  appPages.value = [
    ...(isLoggedIn.value && userMenuItems ? userMenuItems : []),
    ...(isLoggedIn.value ? getNeedAuth.value : getWithoutAuth.value),
    ...getPublic.value,
  ];
}

function redirect(index, menuItem) {
  selectedIndex.value = index;

  if (menuItem.link) {
    window.open(menuItem.link, "_blank");
    return;
  }

  router.push(menuItem.url);
}

async function fillUserName() {
  const name = await getUserName.value;

  if (!name) return;

  userName.value = name.split(" ")[0] || "Guest";
}
</script>

<style scoped>
.welcome-container {
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

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
../pages/useEmitter../plugins/emitter