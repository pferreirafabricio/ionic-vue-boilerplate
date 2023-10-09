<template>
  <SendMessage class="mb-2" message="Hi" />
  <NumberWithLink message="Hi" :telephone="getWhatsappTelephone" />
</template>

<script setup>
import NumberWithLink from "@/components/whatsapp/NumberWithLink.vue";
import SendMessage from "@/components/whatsapp/SendMessage.vue";
import { useGeneralStore } from "@/store/general";
import { computed } from "vue";

const generalStore = useGeneralStore();

const getWhatsappTelephone = computed(() => generalStore.getWhatsappTelephone);
</script>
