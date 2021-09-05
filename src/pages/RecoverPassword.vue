<template>
  <base-layout
    page-default-back-link="/login"
    page-title="Recover password"
    :show-menu-button="false"
  >
    <div v-if="!wasSent">
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input
          required
          clear-input
          type="email"
          v-model="email"
          @input="Errors.email = ''"
        ></ion-input>
      </ion-item>
      <error-message :text="Errors.email" />
      <Button
        class="mt-3"
        text="Recover"
        :isLoading="loading"
        @click="sendRecoveryEmail()"
      />
    </div>
    <NoContent
      v-else
      class="mt-5"
      image="assets/vectors/email-sent.svg"
      :text="`A password recovery email has just been sent to the address <b>${email}</b> &#x1F609;`"
    />
  </base-layout>
</template>

<script>
import { IonInput, IonItem, IonLabel } from '@ionic/vue';

import { ref } from 'vue';
import { mapActions } from 'vuex';

import useToast from 'Composition/useToast';

import Button from '../components/Button.vue';
import NoContent from '../components/NoContent.vue';

export default {
  components: {
    Button,
    NoContent,
    IonInput,
    IonItem,
    IonLabel,
  },
  setup() {
    const { openToast } = useToast();

    const email = ref('');
    const wasSent = ref(false);
    const loading = ref(false);

    const Errors = ref({
      email: '',
    });

    return {
      openToast,
      email,
      wasSent,
      loading,
      Errors,
    };
  },
  methods: {
    ...mapActions('user', ['sendRecoveryPasswordEmail']),
    sendRecoveryEmail() {
      if (!this.email) {
        this.Errors.email = 'Digite um email válido';
        return;
      }

      this.loading = true;

      this.sendRecoveryPasswordEmail(this.email)
        .then(() => {
          this.openToast('Recover email sent', 'success');

          this.wasSent = true;
        })
        .catch(() => {
          this.openToast('Something was wrong to send the recover email', 'danger');
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
