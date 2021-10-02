<template>
  <div class="d-flex flex-column">
    <ion-img :src="image"></ion-img>
    <ion-text class="ion-text-center mt-4" v-html="text">
    </ion-text>
  </div>
</template>

<script>
import { IonImg, IonText } from '@ionic/vue';

export default {
  components: {
    IonImg, IonText,
  },
  props: {
    text: {
      type: String,
      default: 'Not found &#x1F622',
    },
    image: {
      type: String,
      default: 'assets/vectors/join.svg',
    },
  },
};
</script>
