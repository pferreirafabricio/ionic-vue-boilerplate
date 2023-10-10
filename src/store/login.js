import api from "@/api";
import { Preferences } from "@capacitor/preferences";
import { defineStore } from "pinia";
import UserTypes from "../enums/UserTypes";
import { makeString } from "../utils";

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
    async login(userCredentials) {
      /**
       * This is a fake login, you can remove this if
       */
      if (
        userCredentials.email === "admin" &&
        userCredentials.password === "admin"
      ) {
        return await this.fakeLogin();
      }

      return api
        .post("/login", userCredentials)
        .then(async (response) => {
          await this.setToken(response.token);
          await this.setUserData(response.data);

          return response.data;
        })
        .catch((error) => error.response);
    },
    /**
     * This is a fake login, you can remove this method
     */
    async fakeLogin() {
      await this.setToken(makeString(20));
      await this.setUserData({
        id: 1,
        typeUser: UserTypes.ADMINISTRATOR,
        userName: "Admin",
      });

      return {
        data: {
          userType: UserTypes.ADMINISTRATOR,
        },
      };
    },
  },
});
