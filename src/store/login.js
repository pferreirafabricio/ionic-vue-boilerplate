import { defineStore } from "pinia";
import api from "@/api";

export const useLoginStore = defineStore("login", {
  actions: {
    async setToken(token) {
      await Preferences.set({
        key: "token",
        value: token,
      });
    },
    async setUserData(userData) {
      await Preferences.set({
        key: "user",
        value: JSON.stringify({
          userId: userData.id,
          userType: userData.typeUser,
          userName: userData.userName,
        }),
      });
    },
    login({}, userCredentials) {
      return api
        .post("/login", userCredentials)
        .then(async (response) => {
          await this.setToken(response.token);
          await this.setUserData(response.data);

          return response.data;
        })
        .catch((error) => error.response);
    },
  },
});
