<template>
  <div class="container">
    <v-list mandatory>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" rounded="xl"
        @click="click(item.codename)">
        <template v-slot:prepend>
          <v-icon :icon="item.icon" />
        </template>
        <v-list-item-title v-text="item.device" />
        <v-list-item-subtitle v-if="item.codename" v-text="item.codename" />
      </v-list-item>
    </v-list>

    <v-card class="mx-4 mb-4" color="primary">
      <v-card-text>
        <div class="d-flex align-center mb-2">
          <v-avatar color="grey-darken-3" image="https://majokeiko.com/logo.jpeg" />
          <div>
            <p class="ml-2"><b>keiko233</b></p>
            <p class="ml-2">Version: {{ packageJson.version }}</p>
          </div>
        </div>

        <v-btn prepend-icon="mdi-github" variant="outlined" size="small" block @click="openUrl('https://github.com/keiko233/miku-ui-website')">GitHub</v-btn>
        <v-btn prepend-icon="mdi-github" variant="outlined" class="mt-1" size="small" block @click="openUrl('https://elaina.moe')">My site</v-btn>
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
  { device: 'Xiaomi Civi 1S', codename: 'zijin', icon: 'mdi-cellphone' },
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
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>