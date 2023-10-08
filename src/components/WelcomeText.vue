<template>
  <div>
    <ion-text v-if="firstName" class="fs-18">
      Welcome, <span class="font-weight-bold">{{ firstName }}</span>
    </ion-text>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";

export default {
  name: "WelcomeText",
  computed: {
    ...mapGetters("user", ["getUserName"]),
  },
  setup() {
    const firstName = ref("");

    async function getFirstName() {
      firstName.value = await this.getUserName;
    }

    return {
      firstName,
      getFirstName,
    };
  },
  mounted() {
    this.getFirstName();
  },
};
</script>
