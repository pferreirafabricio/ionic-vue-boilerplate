<template>
  <div>
    <ion-text v-if="firstName" class="fs-18">
      Welcome, <span class="font-weight-bold">{{ firstName }}</span>
    </ion-text>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useUserStore } from "../store/user";

const userStore = useUserStore();

const getUserName = computed(() => userStore.getUserName);
const firstName = ref("");

async function getFirstName() {
  firstName.value = await getUserName.value;
}

onMounted(() => {
  getFirstName();
});
</script>
