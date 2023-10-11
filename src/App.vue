<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <Menu />
      <!-- https://stackoverflow.com/a/64682862/12542704 -->
      <ion-router-outlet
        id="main-content"
        :key="$route.fullPath"
      ></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import Menu from "./components/Menu.vue";
</script>
