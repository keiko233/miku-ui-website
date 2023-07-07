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
      <v-btn color="primary" @click="openUrl(props.data.sourcforge_url)">{{ $t('device_card.source_forge') }}</v-btn>

      <v-btn color="primary">
        {{ $t('device_card.detailed') }}
        <v-dialog v-model="show" activator="parent" width="648">
          <v-card>
            <v-card-text>
              <span>{{ $t('device_card.change_log') }}:</span>
              <v-alert class="mt-2" v-for="changelog in props.data.changelog" :text="changelog" />
            </v-card-text>

            <v-card-text>
              <span>{{ $t('device_card.notes') }}:</span>
              <v-alert class="mt-2" v-for="note in props.data.note" v-html="note" />
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" block variant="tonal" @click="show = false">{{ $t('device_card.close') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { openUrl } from '../../utils/openUrl';

const show = ref(false);

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
  }
});
</script>

<style scoped lang="less">
span {
  font-weight: 700;
}

.image-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text-shadow {
    text-shadow: 0 0 3px #0d0d0de8;
  }
}
</style>

