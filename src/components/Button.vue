<template>
  <ion-button
    class="d-flex align-items-center justify-content-center ion-activatable ripple-parent"
    :color="color"
    :expand="expand"
    :size="size"
    :disabled="isLoading"
    :fill="fill"
    :download="download"
    :href="href"
    @click="!!to && redirectToRoute()"
  >
    <ion-label v-if="text && !iconOnly" :class="[hasIcon ? 'ml-2' : '']">{{ text }}</ion-label>
    <ion-icon
      v-if="hasIcon"
      :slot="iconOnly ? 'icon-only' : 'start'"
      :ios="iosIcon || icon"
      :md="mdIcon || icon"
    ></ion-icon>
    <ion-spinner
      slot="end"
      :class="iconOnly ? '' : 'ion-margin-start'"
      :name="spinnerName"
      v-if="isLoading"
    ></ion-spinner>
    <ion-ripple-effect type="unbounded"></ion-ripple-effect>
  </ion-button>
</template>

<script>
import {
  IonButton,
  IonLabel,
  IonIcon,
  IonSpinner,
  IonRippleEffect,
} from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Button',
  components: {
    IonButton,
    IonLabel,
    IonIcon,
    IonSpinner,
    IonRippleEffect,
  },
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    text: {
      type: String,
      required: false,
    },
    expand: {
      type: String,
      default: 'block',
    },
    size: {
      type: String,
      default: 'medium',
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
      default: 'crescent',
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: String,
      default: 'solid',
    },
    to: {
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
  },
  computed: {
    hasIcon() {
      return (this.icon || this.iosIcon || this.mdIcon);
    },
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {
    redirectToRoute() {
      if (!this.to) {
        return;
      }

      this.router.push(this.to);
    },
  },
};
</script>
