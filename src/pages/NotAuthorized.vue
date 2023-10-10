<template>
  <base-layout
    page-default-back-link="/home"
    :show-menu-button="false"
  >
    <ion-img src="assets/vectors/cancel.svg"></ion-img>
    <ion-item lines="none">
      <ion-text color="primary" class="mb-3">
        <h1 class="title">Oops!</h1>
      </ion-text>
    </ion-item>
    <ion-item class="text" lines="none">
      <ion-text>
        You don't have permission to access this page &#x1F62C;
      </ion-text>
    </ion-item>
  </base-layout>
</template>

<script setup>
import { IonImg, IonText, IonItem } from "@ionic/vue";
</script>

<style scoped>
ion-img {
  height: 50%;
}

.title {
  font-size: 50px;
  font-weight: bold;
}

.text {
  font-size: 25px;
}
</style>
