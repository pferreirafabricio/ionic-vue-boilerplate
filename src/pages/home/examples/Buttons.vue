<template>
<Button
  class="simple"
  text="Simple button"
/>

<Button
  class = "icon"
  text="With icon" :icon="Icons.save"
  color="danger"
/>

<Button
  is-loading
  text="Loading" :icon="Icons.save"
  color="success"
/>

<Button
  is-loading
  text="Loading" :icon="Icons.save"
  spinner-name="dots"
  color="success"
/>
<hr/>

<Button
  text="Router redirect"
  :icon="Icons.arrowRedo"
  color="medium"
  :to="{ name: 'contact' }"
/>

<Button
  icon-only :icon="Icons.save"
  color="secondary"
/>

<hr/>
<Button
  text="Small" :icon="Icons.save"
  color="dark"
  size="small"
/>

<Button
  text="Large" :icon="Icons.save"
  color="warning"
  size="large"
/>
</template>

<script setup>
import { arrowRedo, cloudDownload, save } from "ionicons/icons";
import { ref } from "vue";

import Button from "@/components/Button.vue";

const Icons = ref({
  save,
  arrowRedo,
  cloudDownload,
});
</script>

<style scoped>
.simple:hover {
  transition: transform 0.3s ease, border-radius 0.3s ease;
  transform: scale(1.02);
}

.icon:hover {
  transition: transform 0.3s ease, border-radius 0.3s ease;
  transform: scale(1.02);
}

</style>

