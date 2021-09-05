<template>
  <Button
    color="success"
    :text="buttonText"
    :href="`https://wa.me/${getWhatsappTelephone}?text=${message}`"
    :size="size"
    :icon="Icon.logoWhatsapp"
    :iconOnly="iconOnly"
  />
</template>

<script>
import {
  logoWhatsapp,
} from 'ionicons/icons';

import { ref } from 'vue';
import { mapGetters } from 'vuex';

import Button from '../Button.vue';

export default {
  components: {
    Button,
  },
  props: {
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
      default: 'Send message',
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    ...mapGetters('general', [
      'getWhatsappTelephone',
    ]),
  },
  setup() {
    const Icon = ref({
      logoWhatsapp,
    });

    return {
      Icon,
    };
  },
};
</script>

<style scoped>
ion-button {
  --box-shadow: 0 15px 10px -10px rgba(var(--ion-color-success-rgb), 0.5);
}
</style>
