<template>
  <base-layout
    page-default-back-link="/login"
    page-title="Recovery password"
    :show-menu-button="false"
  >
    <div v-if="!wasSent">
      <ion-item>
        <ion-input
          v-model="email"
          required
          clear-input
          label="E-mail"
          label-placement="floating"
          type="email"
          @input="Errors.email = ''"
        ></ion-input>
      </ion-item>
      <error-message :text="Errors.email" />
      <Button
        class="ion-margin-top"
        text="Recover"
        :is-loading="loading"
        @click="sendRecoveryEmail()"
      />
    </div>
    <NoContent
      v-else
      image="assets/vectors/email-sent.svg"
      :text="`A password recovery email has just been sent to the address <b>${email}</b> &#x1F609;`"
    />
  </base-layout>
</template>

<script setup>
import { IonInput, IonItem } from "@ionic/vue";
import { ref } from "vue";

import useToast from "@/composition/useToast";

import Button from "../components/Button.vue";
import NoContent from "../components/NoContent.vue";
import { useUserStore } from "../store/user";

const userStore = useUserStore();

const { openToast } = useToast();

const email = ref("");
const wasSent = ref(false);
const loading = ref(false);

const Errors = ref({
  email: "",
});

function sendRecoveryEmail() {
  if (!email.value) {
    Errors.value.email = "Invalid e-mail";
    return;
  }

  loading.value = true;

  userStore
    .sendRecoveryPasswordEmail(email.value)
    .then(() => {
      openToast("Recover email sent", "success");

      wasSent.value = true;
    })
    .catch(() => {
      openToast(
        "Something was wrong to send the recover email",
        "danger",
      );
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
