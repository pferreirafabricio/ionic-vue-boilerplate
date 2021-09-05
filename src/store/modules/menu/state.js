import {
  personAdd,
  power,
  enter,
  call,
  home,
} from 'ionicons/icons';

import UserTypes from '../../../enums/UserTypes';

export default {
  /**
   * These items will be shown all the time, whether the user is logged in
   * or not
  */
  publicItems: [
    {
      title: 'Contact',
      url: '/contact',
      icon: call,
    },
    {
      title: 'Division',
      type: 2,
    },
  ],
  /**
   * These items will only be shown when the user is not logged in
   */
  withoutAuth: [
    {
      title: 'Home',
      url: '/home',
      icon: home,
    },
    {
      title: 'Division',
      type: 2,
    },
    {
      title: 'Login',
      url: '/login',
      icon: enter,
    },
    {
      title: 'Register',
      url: '/register',
      icon: personAdd,
    },
    {
      title: 'Division',
      type: 2,
    },
  ],
  /**
   * These items will only be shown when the user is logged in
   */
  needAuth: [
    {
      title: 'Sair',
      url: '/logout',
      icon: power,
    },
  ],
  /**
   * These items will be shown according to the type of user
   */
  [UserTypes.CLIENT]: [
    {
      title: 'Home',
      url: '/client/home',
      icon: home,
    },
    {
      title: 'Division',
      type: 2,
    },
  ],
  [UserTypes.ADMINISTRATOR]: [
    {
      title: 'Dashboard',
      url: '/admin/dashboard',
      icon: home,
    },
    {
      title: 'Division',
      type: 2,
    },
  ],
};
