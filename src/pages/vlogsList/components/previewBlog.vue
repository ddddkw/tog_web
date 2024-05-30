<template>
  <div class="vlog_layout">
    <t-button variant="text" theme="primary" style="margin-bottom: 10px" @click="reBack">
      <template #icon> <ArrowLeftIcon /></template>
      back
    </t-button>
    <div class="view_header">
      <div class="title">{{viewBlog.title}}</div>
      <div class="author">
        <t-tag class="tags_sty" shape="mark" theme="primary" variant="light" >{{viewBlog.author}}</t-tag>
        <t-tag class="tags_sty" v-for="item in tagsList" shape="mark" theme="success" variant="light" >{{item}}</t-tag>
      </div>
    </div>
    <div class="view_body">
<!--      <MdCatalog :editorId="id" :scrollElement="scrollElement" />-->
      <MdPreview :editorId="id" :modelValue="viewBlog.content" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowLeftIcon, SneerIcon } from 'tdesign-icons-vue-next';
import {onMounted, ref} from "vue";
import { MdPreview, MdCatalog } from 'md-editor-v3';

// preview.css相比style.css少了编辑器那部分样式
import 'md-editor-v3/lib/preview.css';
import {getTags} from "@/pages/user/index.ts";
const options = ref([])
let viewBlog = ref({})
const id = 'preview-only';
let tagsList = ref([])

const scrollElement = document.documentElement;
const emit = defineEmits([ "reBack" ]);
const reBack=()=>{
  emit('reBack');
}
const init = (val)=>{
  tagsList.value=[]
  viewBlog.value = val
  getTags().send(true).then(res=>{
    options.value =  viewBlog.value.tagTypes.split(',').map(Number)
    res.data.forEach(item=>{
      if(options.value.includes(+item.id)){
        tagsList.value.push(item.tag)
      }
    })
    console.log(tagsList.value)
  })
}
defineExpose({ init });
onMounted(()=>{
})
</script>
<style lang="less" scoped>
@import '../index.less';
</style>
