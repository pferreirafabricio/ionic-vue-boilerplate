<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <div v-if="pageDefaultBackLink">
            <ion-back-button
              text="Back"
              v-if="!ignoreHistory"
              :default-href="pageDefaultBackLink"
            ></ion-back-button>
            <ion-back-button
              v-else
              text="Back"
              @click.prevent="back()"
              default-href=""
            ></ion-back-button>
          </div>
          <ion-menu-button
            color="primary"
            v-show="showMenuButton"
          ></ion-menu-button>
        <ion-text class="ml-4 font-weight-bold">{{ pageTitle }}</ion-text>
        </ion-buttons>
        <ion-buttons class="ml-auto" slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :class="`ion-padding ${className}`" :scroll-events="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonMenuButton,
} from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
  name: 'BaseLayout',
  props: {
    pageTitle: {
      type: String,
      required: false,
    },
    pageDefaultBackLink: {
      type: String,
      required: false,
    },
    showMenuButton: {
      type: Boolean,
      default: true,
    },
    ignoreHistory: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonBackButton,
    IonButtons,
    IonMenuButton,
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  methods: {
    back() {
      this.router.push(this.pageDefaultBackLink);
    },
  },
};
</script>
