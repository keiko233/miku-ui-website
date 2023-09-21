<template>
  <v-row>
    <v-col cols="12" v-if="loading">
      <div class="loading-box">
        <v-progress-circular indeterminate color="primary" :size="54" :width="6" />
        <p class="mt-2">{{ $t('Loading') }}</p>
      </div>
    </v-col>

    <v-col cols="12" sm="6" md="4" v-else v-for="data in devices">
      <DeviceCard :data="data" :info="info" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { insertDevicesImages } from '../utils/insertDevicesImages';

const route = useRoute();

const loading = ref(false);

const getParamsCodename = () => {
  if (!route.params.codename) return '';
  else return route.params.codename;
}

const devices = ref([{}]);

const getDevices = () => {
  loading.value = true;
  fetch('/api/devices/' + getParamsCodename())
    .then(response => response.json())
    .then(response => {
      devices.value = insertDevicesImages(response);
      loading.value = false;
    })
    .catch(err => console.error(err));
};

const info = ref();

const getInfo = () => {
  fetch('/api/info')
    .then(response => response.json())
    .then(response => info.value = response)
    .catch(err => console.error(err));
};

watchEffect(getDevices);

onMounted(() => {
  getDevices();
  getInfo();
});
</script>

<style scoped lang="less">
.loading-box {
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
