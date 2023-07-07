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
      <p><span>Miku UI Version:</span> {{ props.data.version }}</p>
      <p><span>Android Version:</span> {{ props.data.android }}</p>
      <p><span>Status:</span> {{ props.data.status }}</p>
      <p><span>Selinux:</span> {{ props.data.selinux }}</p>
      <p><span>Kernel SU:</span> {{ props.data.kernelsu }}</p>
      <p><span>Data:</span> {{ props.data.data }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" @click="openUrl(props.data.sourcforge_url)">SourceForge</v-btn>

      <v-btn color="primary">
        Detailed
        <v-dialog v-model="show" activator="parent" width="648">
          <v-card>
            <v-card-text>
              <span>Change Log:</span>
              <v-alert class="mt-2" v-for="changelog in props.data.changelog" :text="changelog" />
            </v-card-text>

            <v-card-text>
              <span>Notes:</span>
              <v-alert class="mt-2" v-for="note in props.data.note" :text="note" />
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" block variant="tonal" @click="show = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const show = ref(false);

const openUrl = (url: string) => {
  window.open(url, '_blank');
};

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
