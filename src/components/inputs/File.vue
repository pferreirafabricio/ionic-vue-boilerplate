<template>
  <Button
    :size="size"
    :text="iconOnly ? '' : label"
    :icon="icon"
    :iconOnly="iconOnly"
    :isLoading="loading"
    @click="getFiles()"
  />
  <input
    hidden
    capture="camera"
    class="d-none"
    type="file"
    ref="fileInput"
    :multiple="multiple"
    :accept="`${accept};capture=camera`"
    @change="filesChange"
  />
</template>

<script>
import { ref } from 'vue';
import { document as documentIcon } from 'ionicons/icons';

import Button from '../Button.vue';

export default {
  name: 'FileInput',
  emits: ['files'],
  props: {
    label: {
      type: String,
      default: 'Select files',
    },
    accept: {
      type: String,
      default: 'image/*',
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
      default: 'medium',
    },
  },
  components: {
    Button,
  },
  setup() {
    const Icon = ref({ document: documentIcon });

    return { Icon };
  },
  methods: {
    getFiles() {
      const fileInput = this.$refs.fileInput;
      fileInput.click();
    },
    filesChange(event) {
      this.$emit('files', event.target.files || []);
    },
  },
};
</script>
