<template>
  <v-btn id="menu-activator" variant="tonal">
    {{ $t('switch_language') }}
  </v-btn>

  <v-menu activator="#menu-activator">
    <v-list>
      <v-list-item v-for="option in options" @click="handleSelect(option.key)">
        <v-list-item-title v-text="option.label" />
      </v-list-item>
    </v-list>
  </v-menu>

  <v-snackbar v-model="snackbar.show">
    {{ snackbar.text }}
  </v-snackbar>
</template>

<script setup lang="ts">
import i18n from '../../i18n';

const snackbar = ref({
  show: false,
  text: ""
});

const options = ref([
  {
    label: 'English',
    key: "en-US"
  },
  {
    label: '简体中文',
    key: "zh-CN"
  }
]);

const handleSelect = (key: string) => {
  // @ts-ignore
  i18n.global.locale.value = key;
  localStorage.setItem('uaerLanguage', key);
  snackbar.value.show = true;
  snackbar.value.text = `${i18n.global.t('switch_language_to')} ${i18n.global.t('language')}`;
};

onMounted(() => {
  // @ts-ignore
  i18n.global.locale.value = localStorage.getItem('uaerLanguage');
});
</script>