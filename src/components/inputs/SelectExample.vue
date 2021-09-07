<template>
  <ion-item class="d-flex align-items-center justify-content-between">
    <ion-label>{{ label }}</ion-label>
    <ion-select
      :ok-text="okText"
      :cancel-text="cancelText"
      :placeholder="placeholder"
      :multiple="multiple"
      :disabled="disabled"
      v-model="Fields.value"
      @ionChange="
        () => {
          $emit('update:value', Fields.value);
          Errors.value = null;
        }
      "
    >
      <ion-select-option
        v-for="(item, index) in list"
        :value="item.code"
        :key="index"
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
      :iconOnly="true"
      @click="cleanSelect()"
    />
  </ion-item>
  <error-message class="mt-1" :text="Errors.value" />
</template>

<script>
import { close } from 'ionicons/icons';

import {
  IonLabel, IonSelect, IonSelectOption, IonItem,
} from '@ionic/vue';

import { ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Button from '../Button.vue';

export default {
  name: 'SelectExample',
  emits: ['update:value'],
  components: {
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonItem,
    Button,
  },
  props: {
    okText: {
      type: String,
      default: 'Select',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    value: {
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
      default: 'Select example',
    },
    placeholder: {
      type: String,
      default: 'Select an item',
    },
    errorMessage: {
      type: String,
      default: 'Select a value',
    },
  },
  watch: {
    value(value) {
      this.Fields.value = value;
    },
  },
  computed: {
    // ...mapGetters('example', ['getList']),
  },
  setup() {
    const list = ref([
      { code: 1, name: 'Item A' },
      { code: 2, name: 'Item B' },
    ]);

    const Fields = ref({
      value: '',
    });

    const Errors = ref({
      value: null,
    });

    return {
      close,
      Fields,
      Errors,
      list,
    };
  },
  mounted() {
    this.getCities = [];
    this.Fields.value = this.value;

    // this.getListOfSomething();
  },
  methods: {
    // ...mapActions('general', ['getListOfSomething']),
    validate() {
      let isValid = true;

      if (!this.Fields.value) {
        this.Errors.value = this.errorMessage;
        isValid = false;
      }

      return isValid;
    },
    cleanSelect() {
      this.Fields.value = null;
      this.$emit('update:value', this.Fields.value);
      this.Errors.value = null;
    },
  },
};
</script>
