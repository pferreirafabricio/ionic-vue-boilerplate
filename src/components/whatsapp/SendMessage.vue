<template>
  <Button
    color="success"
    :text="buttonText"
    :href="`https://wa.me/${getWhatsappTelephone}?text=${message}`"
    :size="size"
    :icon="Icon.logoWhatsapp"
    :icon-only="iconOnly"
  />
</template>

<script setup>
import { logoWhatsapp } from "ionicons/icons";

import { defineProps, ref, computed } from "vue";

import Button from "../Button.vue";
import { useGeneralStore } from "../../store/general";

defineProps({
  message: {
    type: String,
    required: true,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: "Send message",
  },
  size: {
    type: String,
    default: "medium",
  },
});

const generalStore = useGeneralStore();

const getWhatsappTelephone = computed(() => generalStore.getWhatsappTelephone);

const Icon = ref({
  logoWhatsapp,
});
</script>

<style scoped>
ion-button {
  --box-shadow: 0 15px 10px -10px rgba(var(--ion-color-success-rgb), 0.5);
}
</style>
