<template>
  <Button text="Simple button" />
  <Button text="With icon" :icon="Icons.save" color="danger" />
  <hr />
  <Button is-loading text="Loading" :icon="Icons.save" color="success" />
  <Button
    is-loading
    text="Loading"
    :icon="Icons.save"
    spinner-name="dots"
    color="success"
  />
  <hr />
  <Button
    text="Router redirect"
    :icon="Icons.arrowRedo"
    color="medium"
    :to="{ name: 'contact' }"
  />
  <Button icon-only :icon="Icons.save" color="secondary" />
  <hr />
  <Button text="Small" :icon="Icons.save" color="dark" size="small" />
  <Button text="Large" :icon="Icons.save" color="warning" size="large" />
</template>

<script setup>
import { ref } from "vue";
import { save, arrowRedo, cloudDownload } from "ionicons/icons";

import Button from "@/components/Button.vue";

const Icons = ref({
  save,
  arrowRedo,
  cloudDownload,
});
</script>
