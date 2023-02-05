<template>
  <div class="mt-1">
    <ion-text color="danger" class="fs-14">{{ text }}</ion-text>
  </div>
</template>

<script>
import { IonText } from '@ionic/vue';

export default {
  name: 'ErrorMessage',
  components: {
    IonText,
  },
  props: {
    text: {
      type: String,
    },
  },
};
</script>
