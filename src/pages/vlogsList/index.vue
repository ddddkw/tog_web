<template>
  <div>
    <t-layout>
      <t-header style="background-color: #02a6f2">
        <div class="vlog_head">
          <div class="left_title">
            Tog's Blog
          </div>
          <div class="right_search">
            <t-input v-model="searchInput" placeholder="搜索"/>
          </div>
        </div>
      </t-header>
      <t-layout class="vlog_layout">
        <t-aside class="vlog_aside">Aside</t-aside>
        <t-content class="vlog_body">
            Content
        </t-content>
      </t-layout>
      <t-footer class="copyright">豫ICP备2024059362号-1</t-footer>
    </t-layout>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue"
let searchInput = ref("")
</script>
<style lang="less" scoped>
@import './index.less';
</style>
