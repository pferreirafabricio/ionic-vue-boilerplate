import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  getters: {
    getImagesAddress() {
      return process.env.VUE_APP_IMAGES_ADDRESS;
    },
    getApiUrl() {
      return process.env.VUE_APP_API_URL;
    },
    getWhatsappTelephone() {
      return process.env.VUE_APP_WHATS_TELEPHONE;
    },
    getContactEmail() {
      return process.env.VUE_APP_CONTACT_EMAIL;
    },
  },
})