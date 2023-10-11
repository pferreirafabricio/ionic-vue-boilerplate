<template>
  <base-layout>
    <h2>Home</h2>
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <ion-accordion-group multiple>
            <ion-accordion
              v-for="component in componentsToShow"
              :key="component.value"
              :value="component.value"
            >
              <ion-item slot="header" color="light">
                <ion-label style="margin: 10px">{{
                  component.label
                }}</ion-label>
              </ion-item>
              <div slot="content" class="ion-padding">
                <component
                  :is="component.component"
                  v-bind="component.props || {}"
                  v-on="component.events || {}"
                >
                  x
                </component>
                <ion-text
                  v-if="component.value === 'image'"
                  class="fs-14 text-center"
                  color="medium"
                >
                  <kbd>ion-img</kbd> component with default image in case of
                  errors on loading
                </ion-text>
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script setup>
import {
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonAccordion,
  IonAccordionGroup,
  IonLabel,
  IonItem,
} from "@ionic/vue";

import Buttons from "./examples/Buttons.vue";
import Whatsapp from "./examples/Whatsapp.vue";

import Divider from "@/components/Divider.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Image from "@/components/Image.vue";
import Loading from "@/components/Loading.vue";
import NoContent from "@/components/NoContent.vue";
import File from "@/components/inputs/File.vue";
import SelectExample from "@/components/inputs/SelectExample.vue";
import Button from "@/components/Button.vue";
import useToast from "@/composition/useToast";

const { openToast } = useToast();

const componentsToShow = [
  {
    value: "buttons",
    label: "Buttons",
    component: Buttons,
  },
  {
    value: "whatsapp",
    label: "Whatsapp",
    component: Whatsapp,
  },
  {
    value: "divider",
    label: "Divider",
    component: Divider,
  },
  {
    value: "errorMessage",
    label: "Error message",
    component: ErrorMessage,
  },
  {
    value: "image",
    label: "Image",
    component: Image,
  },
  {
    value: "loading",
    label: "Loading",
    component: Loading,
    props: {
      loading: true,
    },
  },
  {
    value: "noContent",
    label: "No content",
    component: NoContent,
  },
  {
    value: "file",
    label: "File",
    component: File,
  },
  {
    value: "fileOpenCamera",
    label: "File open camera",
    component: File,
    props: {
      openCamera: true,
      label: "Open camera and gallery",
    },
  },
  {
    value: "selectExample",
    label: "Select example",
    component: SelectExample,
  },
  {
    value: "composables",
    label: "Composables",
    component: Button,
    props: {
      text: "Open toast",
      color: "tertiary",
    },
    events: {
      click: () => {
        openToast("Toast with composition API", "tertiary");
      },
    },
  },
];
</script>

<style scoped>
ion-grid {
  --ion-grid-padding: 0;
}

ion-col {
  padding: 0;
}
</style>
