<template>
  <div class="container">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary" rounded="xl"
        @click="click(item.codename)">
        <template v-slot:prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title v-text="item.device" />
        <v-list-item-subtitle v-if="item.codename" v-text="item.codename" />
      </v-list-item>
    </v-list>

    <v-card class="mx-4 mb-4" prepend-icon="mdi-github">
      <template v-slot:title>
        <div @click="openUrl('https://elaina.moe')">keiko233</div>
      </template>

      <v-card-text>
        <div @click="openUrl('https://github.com/keiko233/miku-ui-website')">Version: {{ packageJson.version }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { openUrl } from '../../utils/openUrl';
import packageJson from '../../../package.json';

const router = useRouter();

const items = ref([
  { device: 'All Devices', icon: 'mdi-home' },
  { device: 'Xiaomi Mix 4', codename: 'odin', icon: 'mdi-cellphone' },
  { device: 'Xiaomi Civi', codename: 'mona', icon: 'mdi-cellphone' },
  { device: 'Xiaomi 6X', codename: 'Wayne', icon: 'mdi-cellphone' },
  { device: 'Redmi Note 7 Pro', codename: 'Violet', icon: 'mdi-cellphone' },
]);

const click = (path?: string) => {
  if (!path) router.push('/');
  else router.push('/devices/' + path);
};
</script>

<style scoped lang="less">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>