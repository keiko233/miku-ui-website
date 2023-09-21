<template>
  <v-card class="mx-auto">
    <v-img class="align-end text-white" height="200" :src="props.data.image_url">
      <div class="image-title">
        <v-card-title class="text-shadow" v-text="props.data.name + ' / ' + props.data.device" />
        <v-chip class="mr-3 text-shadow">
          {{ props.data.id }}
        </v-chip>
      </div>
    </v-img>

    <v-card-text>
      <p><span>Miku UI {{ $t('device_card.version') }}:</span> {{ props.data.version }}</p>
      <p><span>Android {{ $t('device_card.version') }}:</span> {{ props.data.android }}</p>
      <p><span>{{ $t('device_card.status') }}:</span> {{ props.data.status }}</p>
      <p><span>Selinux:</span> {{ props.data.selinux }}</p>
      <p><span>Kernel SU:</span> {{ props.data.kernelsu }}</p>
      <p><span>{{ $t('device_card.data') }}:</span> {{ props.data.data }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">
        {{ $t('device_card.get_resources') }}
        <v-dialog v-model="showResources" activator="parent" width="400">
          <v-card>
            <v-toolbar>
              <v-btn icon="mdi-close" @click="showResources = false" />
              <v-toolbar-title :text="$t('device_card.get_resources')" />
            </v-toolbar>

            <v-card-text>
              <v-btn color="primary" block @click="openUrl(props.data.sourcforge_url)">{{ $t('device_card.source_forge') }}(Offical)</v-btn>
              <v-btn color="primary" block class="mt-2" @click="openUrl(props.info.mirrors[0].url)">{{ $t('device_card.quark_pan') }}(Mirror)</v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-btn>

      <v-btn color="primary">
        {{ $t('device_card.detailed') }}
        <v-dialog v-model="show" activator="parent" width="648">
          <v-card>
            <v-toolbar>
              <v-btn icon="mdi-close" @click="show = false" />
              <v-toolbar-title :text="$t('device_card.close')" />
            </v-toolbar>

            <v-card-text>
              <p><b>{{ $t('device_card.change_log') }}:</b></p>
              <v-alert class="mt-2">
                <p v-for="changelog in props.data.changelog" v-text="changelog" />
              </v-alert>

              <p class="mt-2"><b>{{ $t('device_card.notes') }}:</b></p>
              <v-alert class="mt-2">
                <p v-for="note in props.data.note" v-html="note" />
              </v-alert>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { openUrl } from '../../utils/openUrl';

const show = ref(false);

const showResources = ref(false);

interface Data {
  id: number,
  device: string,
  name: string,
  version: string,
  android: string,
  status: string,
  selinux: string,
  kernelsu: string,
  data: string,
  sourcforge_url: string,
  changelog: [],
  note: [],
  image_url: string
}

const props = defineProps({
  data: {
    type: Object as PropType<Data>,
    required: true
  },
  info: {
    type: Object,
    required: true
  }
});
</script>

<style scoped lang="less">
.image-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text-shadow {
    text-shadow: 0 0 3px #0d0d0de8;
  }
}
</style>

