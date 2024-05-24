<template>
  <div>
    <t-button variant="text" theme="primary" style="margin-bottom: 10px" @click="reBack">
      <template #icon> <ArrowLeftIcon /></template>
      back
    </t-button>

    <div class="viewBlog" v-html="viewBlog.content"></div>
  </div>
</template>
<script setup lang="ts">
import { ArrowLeftIcon } from 'tdesign-icons-vue-next';
import {onMounted, ref} from "vue";

let viewBlog = ref({})
const emit = defineEmits([ "reBack" ]);
const reBack=()=>{
  emit('reBack');
}
const init = (val)=>{
  viewBlog.value = val
}
defineExpose({ init });
onMounted(()=>{
})
</script>
<style lang="less" scoped>
@import './vlogs.less';
</style>
