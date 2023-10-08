<template>
  <ion-row>
    <ion-col class="separator">
      <slot />
    </ion-col>
  </ion-row>
</template>

<script>
import { IonCol, IonRow } from "@ionic/vue";

export default {
  name: "Divider",
  components: {
    IonCol,
    IonRow,
  },
};
</script>

<style scoped>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid var(--ion-color-medium);
}

.separator::before {
  margin-right: 0.5em;
}

.separator::after {
  margin-left: 0.5em;
}
</style>
