<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="grey-lighten-5">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color="primary" :elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer" icon="menu" />

      <v-app-bar-title v-text="$t('name')" />
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(true);
</script>
