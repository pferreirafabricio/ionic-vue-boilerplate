<template>
  <SendMessage class="mb-2" />
  <NumberWithLink
    message="Hi"
    :telephone="getWhatsappTelephone"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import NumberWithLink from '../../../components/whatsapp/NumberWithLink.vue';
import SendMessage from '../../../components/whatsapp/SendMessage.vue';

export default {
  name: 'WhatsappExamples',
  computed: {
    ...mapGetters('general', ['getWhatsappTelephone']),
  },
  components: {
    SendMessage,
    NumberWithLink,
  },
};
</script>
