<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="grey-lighten-5">
      <NavBar />
    </v-navigation-drawer>

    <v-app-bar color="#3A88BB" class="text-white">
      <v-app-bar-nav-icon @click="drawer = !drawer" icon="mdi-menu" />

      <v-app-bar-title>
        <v-img width="96" src="/mikuui_banner.png" />
      </v-app-bar-title>

      <LanguageSwitch />
    </v-app-bar>

    <v-main class="custom-background">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(true);
</script>

<style scoped lang="less">
.custom-background {
  background: linear-gradient(45deg, #ee77521a, #e73c7e12, #83deff57);
}
</style>
