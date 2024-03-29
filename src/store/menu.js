import { defineStore } from 'pinia'
import {
  personAdd,
  power,
  enter,
  call,
  home,
  alertCircle,
  nuclear,
} from 'ionicons/icons';

import UserTypes from '../enums/UserTypes';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    /**
   * These items will be shown all the time, whether the user is logged in
   * or not
   */
  publicItems: [
    {
      title: "Contact",
      url: "/contact",
      icon: call,
    },
    {
      title: "Not found",
      url: "/any-router-that-dont-exists",
      icon: alertCircle,
    },
    {
      title: "Not authorized",
      url: "/not-authorized",
      icon: nuclear,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  /**
   * These items will only be shown when the user is not logged in
   */
  withoutAuth: [
    {
      title: "Home",
      url: "/home",
      icon: home,
    },
    {
      title: "Division",
      type: 2,
    },
    {
      title: "Login",
      url: "/login",
      icon: enter,
    },
    {
      title: "Register",
      url: "/register",
      icon: personAdd,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  /**
   * These items will only be shown when the user is logged in
   */
  needAuth: [
    {
      title: "Logout",
      url: "/logout",
      icon: power,
    },
  ],
  /**
   * These items will be shown according to the type of user
   */
  [UserTypes.CLIENT]: [
    {
      title: "Home",
      url: "/client/home",
      icon: home,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  [UserTypes.ADMINISTRATOR]: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: home,
    },
    {
      title: "Division",
      type: 2,
    },
  ],
  }),
  getters: {
    getPublic(state) {
      return state.publicItems;
    },
    getWithoutAuth(state) {
      return state.withoutAuth;
    },
    getNeedAuth(state) {
      return state.needAuth;
    },
    getMenuByUserType: (state) => (userType) => state[userType] || [],
  }
})