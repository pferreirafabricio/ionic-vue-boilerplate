<template>
  <ion-item class="container">
    <ion-select
      v-model="fields.value"
      :label="label"
      :ok-text="okText"
      :cancel-text="cancelText"
      :placeholder="placeholder"
      :multiple="multiple"
      :disabled="disabled"
      @ionChange="
        () => {
          emit('update:modelValue', fields.value);
          errors.value = null;
        }
      "
    >
      <ion-select-option
        v-for="(item, index) in list"
        :key="index"
        :value="item.code"
      >
        {{ item.name }}
      </ion-select-option>
    </ion-select>
    <Button
      class="p-0 m-0"
      color="dark"
      size="small"
      fill="clear"
      :icon="close"
      :icon-only="true"
      @click="cleanSelect()"
    />
  </ion-item>
  <error-message class="mt-1" :text="errors.value" />
</template>

<script setup>
import { close } from "ionicons/icons";
import { IonSelect, IonSelectOption, IonItem } from "@ionic/vue";
import { onMounted, ref, defineProps, defineEmits, toRefs, watch } from "vue";

import Button from "../Button.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  okText: {
    type: String,
    default: "Select",
  },
  cancelText: {
    type: String,
    default: "Cancel",
  },
  modelValue: {
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Select example",
  },
  placeholder: {
    type: String,
    default: "Select an item",
  },
  errorMessage: {
    type: String,
    default: "Select a value",
  },
});

const list = ref([
  { code: 1, name: "Item A" },
  { code: 2, name: "Item B" },
]);

const fields = ref({
  value: {},
});

const errors = ref({
  value: null,
});

const { modelValue } = toRefs(props);

watch(modelValue, (value) => {
  fields.value = value || {};
});

function cleanSelect() {
  fields.value.value = null;
  emit("update:modelValue", fields.value);
  errors.value.value = null;
}

onMounted(() => {
  fields.value = modelValue.value || {};
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
