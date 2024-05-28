<template>
  <div>
    <t-button variant="text" theme="primary" style="margin-bottom: 10px" @click="reBack">
      <template #icon> <ArrowLeftIcon /></template>
      back
    </t-button>

    <MdPreview :editorId="id" :modelValue="viewBlog.content" />
    <MdCatalog :editorId="id" :scrollElement="scrollElement" />
  </div>
</template>
<script setup lang="ts">
import { ArrowLeftIcon } from 'tdesign-icons-vue-next';
import {onMounted, ref} from "vue";
import { MdPreview, MdCatalog } from 'md-editor-v3';

// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';

let viewBlog = ref({})
const id = 'preview-only';

const scrollElement = document.documentElement;
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
