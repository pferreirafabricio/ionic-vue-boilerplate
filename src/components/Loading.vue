<template>
  <div>
    <ion-spinner
      v-if="loading"
      class="d-block mx-auto"
      :name="name"
      color="primary"
    ></ion-spinner>
  </div>
</template>

<script>
import { IonSpinner } from "@ionic/vue";

export default {
  name: "Loading",
  components: {
    IonSpinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "crescent",
    },
  },
};
</script>
