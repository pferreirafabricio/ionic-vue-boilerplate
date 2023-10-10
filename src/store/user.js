import { defineStore } from "pinia";
import { Preferences } from "@capacitor/preferences";
import api from "@/api/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    userId: 0,
    userType: 0,
  }),
  getters: {
    async getUserId() {
      const user = await Preferences.get({ key: "user" });

      if (!user.value) return 0;

      const { userId } = JSON.parse(user.value);

      return userId || 0;
    },
    async getUserType() {
      const user = await Preferences.get({ key: "user" });

      if (!user.value) return 0;

      const { userType } = JSON.parse(user.value);

      return userType || 0;
    },
    async getUserName() {
      const user = await Preferences.get({ key: "user" });

      if (!user.value) return "";

      const { userName } = JSON.parse(user.value);

      return userName || "";
    },
  },
  actions: {
    cleanUserData() {
      this.setUserId = 0;
      this.setUserType = 0;
    },
    sendRecoveryPasswordEmail(email) {
      return api.post("/recover-password", { email });
    },
  },
});
