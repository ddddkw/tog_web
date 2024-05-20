<template>
  <div>
    <t-card class="card_style">
      <t-space class="btn_header">
        <t-button theme="primary" style="margin-bottom: 10px" @click="reBack">
          <template #icon><icon-font variant="dashed" name="arrow-left"/></template>
          back
        </t-button>
        <t-button theme="primary" @click="saveVlog">保存</t-button>
      </t-space>
      <t-form ref="form" class="form_style">
        <t-form-item label="标题：" labelWidth="50px" label-align="left" name="name">
          <t-input v-model="formData.name" placeholder="请输入标题" @enter="onEnter"></t-input>
        </t-form-item>
      </t-form>
      <div style="border: 1px solid #ccc;margin-top: 20px">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />
        <Editor
          style="height: calc(100vh - 350px); overflow-y: hidden;"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </div>
    </t-card>
  </div>
</template>

<script lang="ts">
import { IconFont  } from 'tdesign-icons-vue-next';
export default {
  name: 'DashboardBase',
};
</script>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import {onBeforeUnmount, ref, shallowRef, onMounted, defineComponent} from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const emit = defineEmits([ "reBack" ]);
const mode= "default"
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
let formData=ref({})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const onEnter=()=>{

}
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
const reBack=()=>{
  emit('reBack');
}
const saveVlog=()=>{
  const editor = editorRef.value
  let html = editor.getHtml()
}
</script>

<style scoped>
.row-container:not(:last-child) {
  margin-bottom: 16px;
}
.form_style{
  margin-top: 15px;
}
.card_style{
  height: calc(100vh - 150px)
}
.btn_header{
  display: flex;
  justify-content: space-between;
}
</style>
