<template>
  <base-layout>
    <h2>Home</h2>
    <ion-grid>
      <ion-row>
        <ion-col size="12">
          <Buttons />
        </ion-col>
        <ion-col size="12">
          <Divider>Divider component</Divider>
        </ion-col>
        <ion-col size="12">
          <ErrorMessage text="Error message component" />
        </ion-col>
        <ion-col size="12" class="my-3">
          <Image />
          <ion-text class="fs-14 text-center" color="medium">
            <kbd>ion-img</kbd> component with default image in case of errors on loading
          </ion-text>
        </ion-col>
        <ion-col size="12" class="d-flex align-items-center">
          <ion-text class="mr-2">Loading component</ion-text>
          <Loading loading />
        </ion-col>
        <ion-col size="12" class="my-3">
          <NoContent text="Content not found &#x1F622" />
        </ion-col>
        <ion-col size="12">
          <Divider>Whatsapp components</Divider>
          <Whatsapp />
        </ion-col>
        <ion-col size="12">
          <Divider>Inputs</Divider>
          <File class="mb-2" />
          <File open-camera label="Open camera and gallery"  class="mb-2" />
          <SelectExample multiple />
        </ion-col>
        <ion-col size="12">
          <Divider>Composables</Divider>
          <Button
            text="Open toast"
            color="tertiary"
            @click="openToast(
              'Toast with composition API',
              'tertiary'
            )"
          />
        </ion-col>
        <ion-col size="12"></ion-col>
        <ion-col size="12"></ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import Buttons from './examples/Buttons.vue';
import Whatsapp from './examples/Whatsapp.vue';

import Divider from '../../components/Divider.vue';
import ErrorMessage from '../../components/ErrorMessage.vue';
import Image from '../../components/Image.vue';
import Loading from '../../components/Loading.vue';
import NoContent from '../../components/NoContent.vue';
import File from '../../components/inputs/File.vue';
import SelectExample from '../../components/inputs/SelectExample.vue';
import Button from '../../components/Button.vue';
import useToast from '../../composition/useToast';

export default {
  name: 'Home',
  components: {
    Buttons,
    Divider,
    ErrorMessage,
    Image,
    Loading,
    NoContent,
    Whatsapp,
    File,
    SelectExample,
    Button,
  },
  setup() {
    const { openToast } = useToast();

    return {
      openToast,
    };
  },
};
</script>
