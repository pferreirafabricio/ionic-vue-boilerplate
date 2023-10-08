import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  actions: {
    async setToken(token) {
      await Storage.set({
        key: "token",
        value: token,
      });
    },
    async setUserData(userData) {
      await Storage.set({
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
          await setToken(response.token);
          await setUserData(response.data);
  
          return response.data;
        })
        .catch((error) => error.response);
    },
  }
})