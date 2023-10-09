<template>
  <ion-button
    class="btn ion-activatable ripple-parent"
    :color="color"
    :expand="expand"
    :size="size"
    :disabled="isLoading"
    :fill="fill"
    :download="download"
    :href="href"
    @click="!!to && redirectToRoute()"
  >
    <ion-label v-if="text && !iconOnly" :class="[hasIcon ? 'ml-2' : '']">{{
      text
    }}</ion-label>
    <ion-icon
      v-if="hasIcon"
      :slot="iconOnly ? 'icon-only' : 'start'"
      :ios="iosIcon || icon"
      :md="mdIcon || icon"
    ></ion-icon>
    <ion-spinner
      v-if="isLoading"
      slot="end"
      :class="iconOnly ? '' : 'ion-margin-start'"
      :name="spinnerName"
    ></ion-spinner>
    <ion-ripple-effect type="unbounded"></ion-ripple-effect>
  </ion-button>
</template>

<script setup>
import {
  IonButton,
  IonLabel,
  IonIcon,
  IonSpinner,
  IonRippleEffect,
} from "@ionic/vue";
import { defineProps, computed, toRefs } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  text: {
    type: String,
    required: false,
  },
  expand: {
    type: String,
    default: "block",
  },
  size: {
    type: String,
    default: "medium",
  },
  icon: {
    default: null,
    required: false,
  },
  iosIcon: {
    default: null,
    required: false,
  },
  mdIcon: {
    default: null,
    required: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  spinnerName: {
    type: String,
    default: "crescent",
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  fill: {
    type: String,
    default: "solid",
  },
  to: {
    type: [String, Object],
    required: false,
  },
  download: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    required: false,
  },
});

const { icon, iosIcon, mdIcon, to } = toRefs(props);

const hasIcon = computed(() => {
  return icon.value || iosIcon.value || mdIcon.value;
});

const router = useRouter();

function redirectToRoute() {
  if (!to.value) return;

  router.push(to.value);
}
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
