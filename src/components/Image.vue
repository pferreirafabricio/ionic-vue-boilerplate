<template>
  <ion-img
    v-bind="useAttrs()"
    :src="
      !imageFailsToLoad && !!src ? `${getImagesAddress}/${src}` : defaultImage
    "
    @ionError="imageFailsToLoad = true"
  />
</template>

<script setup>
import { IonImg } from "@ionic/vue";
import { defineProps, ref, computed, useAttrs } from "vue";
import { useGeneralStore } from "../store/general";

defineProps({
  src: {
    type: String,
    required: false,
  },
});

const generalStore = useGeneralStore();

const getImagesAddress = computed(() => generalStore.getImagesAddress);
const imageFailsToLoad = ref(false);
const defaultImage = "assets/vectors/blank.svg";
</script>
