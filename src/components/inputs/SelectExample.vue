<template>
  <ion-item class="d-flex align-items-center justify-content-between">
    <ion-label>{{ label }}</ion-label>
    <ion-select
      v-model="Fields.value"
      :ok-text="okText"
      :cancel-text="cancelText"
      :placeholder="placeholder"
      :multiple="multiple"
      :disabled="disabled"
      @ionChange="
        () => {
          $emit('update:modelValue', Fields.value);
          Errors.value = null;
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
  <error-message class="mt-1" :text="Errors.value" />
</template>

<script setup>
import { close } from "ionicons/icons";
import { IonLabel, IonSelect, IonSelectOption, IonItem } from "@ionic/vue";
import { onMounted, ref, defineProps, defineEmits, toRefs, watch } from "vue";

import Button from "../Button.vue";

defineEmits(["update:modelValue"]);

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

const Fields = ref({
  value: "",
});

const Errors = ref({
  value: null,
});

const { modelValue, errorMessage } = toRefs(props);

watch(modelValue, (value) => {
  Fields.value = value;
});

function cleanSelect() {
  Fields.value = null;
  this.$emit("update:modelValue", Fields.value);
  Errors.value = null;
}
onMounted(() => {
  Fields.value = modelValue.value;
});
</script>
