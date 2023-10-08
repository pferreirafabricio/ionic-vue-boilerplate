<template>
  <div class="d-flex flex-column">
    <ion-img :src="image"></ion-img>
    <ion-text class="ion-text-center mt-4" v-html="text"> </ion-text>
  </div>
</template>

<script setup>
import { IonImg, IonText } from "@ionic/vue";
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "Not found &#x1F622",
  },
  image: {
    type: String,
    default: "assets/vectors/join.svg",
  },
});
</script>
