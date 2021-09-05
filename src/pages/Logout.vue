<template>
  <base-layout :show-menu-button="false" :ignore-history="true">
    <ion-img :src="image"> </ion-img>
    <ion-item class="atention" lines="none">
      <ion-label class="d-flex align-items-center justify-content-center">
        <ion-text class="ion-text-uppercase mr-2">Bye</ion-text>
        <ion-spinner name="dots"></ion-spinner>
      </ion-label>
    </ion-item>
  </base-layout>
</template>

<script>
import {
  IonImg, IonSpinner, IonLabel, IonItem, IonText,
} from '@ionic/vue';

import { useRouter } from 'vue-router';
import { mapActions } from 'vuex';
import { Storage } from '@capacitor/storage';

export default {
  name: 'Logout',
  components: {
    IonImg,
    IonSpinner,
    IonLabel,
    IonItem,
    IonText,
  },
  setup() {
    const router = useRouter();
    const timer = null;

    return {
      router,
      timer,
      image: 'assets/vectors/join.svg',
    };
  },
  mounted() {
    this.logout();
  },
  methods: {
    ...mapActions('user', ['cleanUserData']),
    logout() {
      setTimeout(async () => {
        await Storage.clear();
        await this.cleanUserData();
        await this.emitter.emit('logged');
        await this.router.push({ name: 'home' });
      }, 1500);
    },
  },
};
</script>

<style scoped>
ion-img {
  height: 80%;
}

.atention {
  color: var(--ion-color-primary);
  font-size: 20px;
  font-weight: 700;
}
</style>
