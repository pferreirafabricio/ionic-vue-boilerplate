<template>
  <base-layout page-default-back-link="/home" :show-menu-button="false">
    <ion-img src="assets/vectors/404.svg"> </ion-img>
    <ion-item lines="none">
      <ion-text color="primary" class="mb-3">
        <h1 class="title">Oops!</h1>
      </ion-text>
    </ion-item>
    <ion-item class="text" lines="none">
      <ion-text>
        It appears that the screen you are looking for does not exist or is not
        currently available. &#x1F614;
      </ion-text>
    </ion-item>
  </base-layout>
</template>

<script setup>
import { IonImg, IonText, IonItem } from "@ionic/vue";

import BaseLayout from "../components/base/BaseLayout.vue"
</script>

<style scoped>
ion-img {
  height: 40%;
}

.title {
  font-size: 50px;
  font-weight: bold;
}

.text {
  font-size: 25px;
}
</style>
