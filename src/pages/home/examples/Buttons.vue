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
  class="delete"
  text = "Delete" :icon = "Icons.save"
  color = "danger"
/>
<hr/>

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

.delete {
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
}

.delete, button span {
  transition: 200ms;
}

.delete .text {
  transform: translateX(35px);
  color: white;
  font-weight: bold;
}

.delete .icon {
  position: relative;
  border-left: 1px solid #c41b1b;
  transform: translateX(110px);
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete svg {
  width: 15px;
  margin-left: 60px;
  fill: #eee;
}

.delete:hover .text {
  color: transparent;
}

.delete:hover .icon {
  width: 150px;
  border-left: none;
  transform: translateX(0);
}

.delete:focus {
  outline: none;
}

.delete:active .icon svg {
  transform: scale(0.8);
}

</style>

