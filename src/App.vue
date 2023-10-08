<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <Menu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script setup>
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
import Menu from "./components/Menu.vue";
</script>
