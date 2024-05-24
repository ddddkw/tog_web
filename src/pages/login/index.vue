<template>
  <div class="login-wrapper">

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">{{ $t('pages.login.loginTitle') }}</h1>
        <h1 class="title">Tog Web</h1>
      </div>

      <login v-if="type === 'login'" />
      <tdesign-setting />
    </div>

    <footer class="copyright">豫ICP备2024059362号-1</footer>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LoginIndex',
};
</script>
<script setup lang="ts">
import { ref } from 'vue';

import TdesignSetting from '@/layouts/setting.vue';

import Login from './components/Login.vue';

const type = ref('login');
</script>

<style lang="less" scoped>
@import './index.less';
</style>
