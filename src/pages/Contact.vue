<template>
  <base-layout
    page-title="Contact"
    page-default-back-link="/home"
    :show-menu-button="false"
  >
    <ion-row>
      <ion-col size="12">
        <a
          class="contact-info no-text-decoration"
          :href="`tel:+55${getWhatsappTelephone}`"
          target="_blank"
        >
          <ion-icon :icon="Icon.call" class="fs-24"></ion-icon>
          <ion-text color="dark" class="fs-20">
            {{ getWhatsappTelephone }}
          </ion-text>
          <br />
        </a>
        <a
          class="contact-info no-text-decoration"
          :href="`mailto:${getContactEmail}`"
          target="_blank"
        >
          <ion-icon :icon="Icon.mail" class="fs-24"></ion-icon>
          <ion-text color="dark" class="fs-20">
            {{ getContactEmail }}
          </ion-text>
        </a>
      </ion-col>
      <ion-col size="12">
        <WhatsappButton
          class="my-4"
          message="Hi, I need help with the Boilerplate App"
        />
      </ion-col>
      <ion-col size="12">
        <iframe
          class="mb-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.21722940248!2d-122.15130702796334!3d37.41331444145766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbr!4v1630859756274!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </ion-col>
      <ion-col size="12" class="mt-4 ion-text-center">
        <ion-text class="fs-20"> Social medias </ion-text>
        <br />
      </ion-col>
      <ion-col size="12" class="social-medias">
        <a href="https://www.facebook.com" target="_blank">
          <ion-icon :icon="Icon.logoFacebook" class="fs-32"></ion-icon>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <ion-icon :icon="Icon.logoInstagram" class="fs-32"></ion-icon>
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <ion-icon :icon="Icon.logoYoutube" class="fs-32"></ion-icon>
        </a>
      </ion-col>
    </ion-row>
  </base-layout>
</template>

<script setup>
import { IonIcon, IonText, IonCol, IonRow } from "@ionic/vue";
import { computed } from "@vue/reactivity";
import {
  call,
  mail,
  logoFacebook,
  logoInstagram,
  logoYoutube,
} from "ionicons/icons";
import { ref } from "vue";

import WhatsappButton from "../components/whatsapp/SendMessage.vue";
import { useGeneralStore } from "../store/general";

const generalStore = useGeneralStore();

const getWhatsappTelephone = computed(() => generalStore.getWhatsappTelephone);
const getContactEmail = computed(() => generalStore.getContactEmail);

const Icon = ref({
  logoInstagram,
  logoFacebook,
  logoYoutube,
  call,
  mail,
});
</script>

<style scoped>
.social-medias {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
</style>
