<template>
  <base-layout :show-menu-button="false" :ignore-history="true">
    <ion-img src="/assets/vectors/join.svg"></ion-img>
    <ion-item class="attention" lines="none">
      <ion-label class="bye-container">
        <ion-text class="ion-text-uppercase">Bye</ion-text>
        <ion-spinner name="dots"></ion-spinner>
      </ion-label>
    </ion-item>
  </base-layout>
</template>

<script setup>
import { IonImg, IonSpinner, IonLabel, IonItem, IonText } from "@ionic/vue";

import { useRouter } from "vue-router";
import { Preferences } from "@capacitor/preferences";
import { onMounted } from "vue";
import { useUserStore } from "../store/user";
import useEmitter from "../composition/useEmitter";

const { emitter } = useEmitter();
const userStore = useUserStore();
const router = useRouter();

onMounted(() => {
  logout();
});

function logout() {
  setTimeout(async () => {
    await Preferences.clear();
    userStore.cleanUserData();
    emitter.emit("logged");
    await router.push({ name: "home" });
  }, 1500);
}
</script>

<style scoped>
ion-img {
  height: 80%;
}

.attention {
  color: var(--ion-color-primary);
  font-size: 20px;
  font-weight: 700;
}

.bye-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
