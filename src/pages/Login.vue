<template>
  <base-layout
    page-default-back-link="/home"
    :show-menu-button="false"
  >
    <ion-row>
      <ion-col size="12">
        <Image style="height: 200px" src="assets/icon/logo.png" />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-item class="form-field">
          <ion-icon slot="start" :icon="Icon.mail"></ion-icon>
          <ion-input
            v-model="fields.email"
            clear-input
            required
            label="E-mail"
            type="email"
            label-placement="floating"
            tabindex="1"
            inputmode="email"
            placeholder="admin"
            @input="errorMessages.email = ''"
          ></ion-input>
        </ion-item>
        <error-message :text="errorMessages.email" />
      </ion-col>
      <ion-col size="12">
        <ion-item class="form-field">
          <ion-icon slot="start" :icon="Icon.key"></ion-icon>
          <ion-input
            v-model="fields.password"
            required
            name="password"
            label="Password"
            tabindex="2"
            label-placement="floating"
            placeholder="admin"
            clear-input
            :type="showPassword ? 'text' : 'password'"
            @input="errorMessages.password = ''"
          ></ion-input>
          <ion-icon
            slot="end"
            :icon="showPassword ? Icon.eyeOff : Icon.eye"
            class="pointer"
            @click="showPassword = !showPassword"
          ></ion-icon>
        </ion-item>
        <error-message :text="errorMessages.password" />
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <Button
          color="primary"
          text="Login"
          :icon="Icon.enterOutline"
          :is-loading="loading"
          @click="loginUser()"
        />
      </ion-col>
    </ion-row>
    <ion-row class="ion-text-center">
      <ion-col size="12">
        <ion-text color="tertiary" class="pointer" @click="redirectToRecoveryPassword()">
          Forgot password?
        </ion-text>
      </ion-col>
    </ion-row>
  </base-layout>
</template>

<script setup>
import { enterOutline, eye, eyeOff, key, logIn, mail } from "ionicons/icons";

import {
IonCol,
IonIcon,
IonInput,
IonItem,
IonRow,
IonText,
} from "@ionic/vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

import Button from "../components/Button.vue";
import Image from "../components/Image.vue";
import login from "../composition/login";
import emitter from "../plugins/emitter";

const { userLogin } = login();
const router = useRouter();

const showPassword = ref(false);

const Icon = ref({
  mail,
  key,
  eye,
  eyeOff,
  logIn,
  enterOutline,
});

const fields = ref({
  email: "admin",
  password: "admin",
});

const errorMessages = ref({
  email: "",
  password: "",
});

const loading = ref(false);

function loginUser() {
  if (!validateFields()) return;

  loading.value = true;

  userLogin(fields.value)
    .then(() => {
      emitter.emit("logged");
    })
    .finally(() => {
      loading.value = false;
    });
}
function validateFields() {
  let valid = true;

  if (!fields.value.email) {
    errorMessages.value.email = "Email invalid";
    valid = false;
  }

  if (!fields.value.password) {
    errorMessages.value.password = "Password invalid";
    valid = false;
  }

  return valid;
}

function redirectToRecoveryPassword() {
  router.push({ name: "recovery-password" });
}
</script>

<style scoped>
.form-field {
  display: flex;
  align-items: center;
}

.pointer {
  cursor: pointer;
}
</style>
./useEmitter