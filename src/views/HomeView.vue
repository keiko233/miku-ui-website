<template>
  <v-row>
    <v-col cols="12" v-if="devices[0].id == 0">
      <div class="loading-box">
        <v-progress-circular indeterminate color="primary" :size="54" :width="6" />
        <p class="mt-2">Loading</p>
      </div>
    </v-col>

    <v-col cols="12" sm="6" md="4" v-else v-for="data in devices">
      <DeviceCard :data="data" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const devices = ref([{
  "id": 0,
  "device": null,
  "name": null,
  "version": null,
  "android": null,
  "status": null,
  "selinux": null,
  "kernelsu": null,
  "data": null,
  "sourcforge_url": "",
  "changelog": [""],
  "note": [""],
  "image_url": ""
}]);

const getDevices = () => {
  fetch('/api/devices')
    .then(response => response.json())
    .then(response => {
      let tmp = response;

      tmp.forEach(function (item: any) {
        item.changelog = JSON.parse(item.changelog);
        item.note = JSON.parse(item.note);
        if (item.device == "odin") item.image_url = "https://camo.githubusercontent.com/931ce1852cefd150d24d34b6a042ace19d78b38068fb4a7b6c77a3fca6877be2/68747470733a2f2f66646e322e67736d6172656e612e636f6d2f76762f706963732f7869616f6d692f6d69782d342d312e6a7067";
        else if (item.device == "mona") item.image_url = "https://camo.githubusercontent.com/055d686b692803056206521e7a540d925f131b6f746c06a766852919f877311a/68747470733a2f2f63646e2d66696c65732e6b696d6f76696c2e636f6d2f64656661756c742f303030362f35342f7468756d625f3535333132375f64656661756c745f6269672e6a706567";
        else if (item.device == "Violet") item.image_url = "https://camo.githubusercontent.com/54c88e7d15bae0952face31e67c8aa737f02128090dccb017a964245352a880c/68747470733a2f2f6930312e6170706d6966696c652e636f6d2f76312f4d495f31383435354233453444413730363232364346373533354135384538373546303236372f706d735f313535313038373532302e33343535383033302e6a7067";
        else if (item.device == "Wayne") item.image_url = "https://camo.githubusercontent.com/9bea6ab00b26dfdda7b1ca862bcc8236834185b9b6f70ba6d41f271724967de0/68747470733a2f2f63646e2e636e626a302e6664732e6170692e6d692d696d672e636f6d2f6232632d6d696d616c6c2d6d656469612f61343834326639616663363135313634616638336332303838613431326663302e6a7067";
      })

      devices.value = tmp;
    })
    .catch(err => console.error(err));
};

onMounted(() => {
  getDevices();
});
</script>

<style scoped lang="less">
.loading-box {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
