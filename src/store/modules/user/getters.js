import { Storage } from '@capacitor/storage';

export default {
  async getUserId() {
    const user = await Storage.get({ key: 'user' });

    if (!user.value) return 0;

    const { userId } = JSON.parse(user.value);

    return userId || 0;
  },
  async getUserType() {
    const user = await Storage.get({ key: 'user' });

    console.log(user);

    if (!user.value) return 0;

    const { userType } = JSON.parse(user.value);

    return userType || 0;
  },
  async getUserName() {
    const user = await Storage.get({ key: 'user' });

    if (!user.value) return '';

    const { userName } = JSON.parse(user.value);

    return userName || '';
  },
};
