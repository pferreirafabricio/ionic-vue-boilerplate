<template>
  <a :href="`https://wa.me/${telephone}?text=${message}`">
    <span class="ion-ion-color-dark">{{ telephone }}</span>
    <ion-icon :icon="openOutline" class="ml-1"></ion-icon>
  </a>
</template>

<script setup>
import { openOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/vue";
import { defineProps } from "vue";

defineProps({
  telephone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(
    --ion-card-color,
    var(--ion-item-color, var(--ion-color-step-550, #737373))
  );
}
</style>
