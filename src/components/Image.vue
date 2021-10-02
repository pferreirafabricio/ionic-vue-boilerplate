<template>
  <ion-img
    :src="
      !imageFailsToLoad && !!src
        ? `${getImagesAddress}${src}`
        : defaultImage
    "
    @ionError="imageFailsToLoad = true"
  />
</template>

<script>
import { ref } from '@vue/reactivity';
import { mapGetters } from 'vuex';

export default {
  name: 'Image',
  props: {
    /** The image path or url */
    src: {
      type: String,
      required: true,
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
};
</script>
