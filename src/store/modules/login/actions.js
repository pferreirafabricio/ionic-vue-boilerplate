import { Storage } from '@capacitor/storage';
import api from '../../../api';

async function setToken(token) {
  await Storage.set({
    key: 'token',
    value: token,
  });
}

async function setUserData(userData) {
  await Storage.set({
    key: 'user',
    value: JSON.stringify({
      userId: userData.id,
      userType: userData.typeUser,
      userName: userData.userName,
    }),
  });
}

export default {
  login({}, userCredentials) {
    return api.post('/login', userCredentials)
      .then(async (response) => {
        await setToken(response.token);
        await setUserData(response.data);

        return response.data;
      })
      .catch((error) => error.response);
  },
};
