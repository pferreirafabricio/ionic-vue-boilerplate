<template>
  <ion-img
    :src="
      !imageFailsToLoad && !!src ? `${getImagesAddress}/${src}` : defaultImage
    "
    @ionError="imageFailsToLoad = true"
  />
</template>

<script>
import { IonImg } from '@ionic/vue';

import { ref } from '@vue/reactivity';
import { mapGetters } from 'vuex';

export default {
  name: 'Image',
  props: {
    /** The image path or url */
    src: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters('general', ['getImagesAddress']),
  },
  setup() {
    const imageFailsToLoad = ref(false);

    return {
      imageFailsToLoad,
      defaultImage: 'assets/vectors/blank.svg',
    };
  },
  components: {
    IonImg,
  },
};
</script>
