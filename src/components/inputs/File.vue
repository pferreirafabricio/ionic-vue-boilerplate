<template>
  <div>
    <Button
      :size="size"
      :text="iconOnly ? '' : label"
      :icon="icon"
      :icon-only="iconOnly"
      :is-loading="loading"
      @click="openCamera ? getFilesByCamera() : getFiles()"
    />
    <ion-input
      ref="fileInput"
      hidden
      style="display: none;"
      type="file"
      :multiple="multiple"
      :accept="`${accept};capture=camera`"
      @change="filesChange"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { IonInput } from "@ionic/vue";
import { document as documentIcon } from "ionicons/icons";

import usePhotoGallery from "@/composition/usePhotoGallery";

import Button from "../Button.vue";

const emit = defineEmits(["files"]);

defineProps({
  openCamera: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Select files",
  },
  accept: {
    type: String,
    default: "image/*",
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    default: documentIcon,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "medium",
  },
});

const { takePhoto } = usePhotoGallery();
const fileInput = ref(null);

function getFiles() {
  const fileSelect = fileInput.value.$el.getElementsByTagName("input")[0];
  fileSelect.click();
}

async function getFilesByCamera() {
  const result = await takePhoto();
  const file = dataUriToBlob(result);

  emit("files", [file] || []);
}

function filesChange(event) {
  emit("files", event.target.files || []);
}

function dataUriToBlob(dataURI) {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
}
</script>
