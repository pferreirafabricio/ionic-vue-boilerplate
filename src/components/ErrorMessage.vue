<template>
  <div class="mt-1">
    <ion-text color="danger" class="fs-14">{{ text }}</ion-text>
  </div>
</template>

<script setup>
import { IonText } from "@ionic/vue";
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "Something went wrong",
  },
});
</script>
