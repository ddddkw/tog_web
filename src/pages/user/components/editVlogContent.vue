<template xmlns="http://www.w3.org/1999/html">
  <div>
    <t-card class="card_style">
      <t-space class="btn_header">
        <t-button theme="primary" style="margin-bottom: 10px" @click="reBack">
          <template #icon><icon-font variant="dashed" name="arrow-left"/></template>
          back
        </t-button>
        <t-button theme="primary" @click="saveVlog">保存</t-button>
      </t-space>
      <t-form ref="form" class="form_style" layout="inline">
        <t-form-item label="标题：" labelWidth="50px" label-align="left" name="name">
          <t-input v-model="formData.title" placeholder="请输入标题" @enter="onEnter"></t-input>
        </t-form-item>
        <t-form-item label="标签：" labelWidth="50px" label-align="left" name="name">
          <t-select
            v-model="tags"
            creatable
            filterable
            multiple
            placeholder="多选支持自定义创建"
            style="width: 200px"
          >
            <t-option v-for="item in options" :key="item.id" :value="item.id" :label="item.tag"></t-option>
          </t-select>
        </t-form-item>
        <br>
      </t-form>
      <t-form class="form_style" >
        <t-form-item label="摘要：" labelWidth="50px" label-align="left" name="name">
          <t-textarea v-model="formData.summary"  :autosize="{ minRows: 3, maxRows: 4 }" placeholder="请输入摘要" />
        </t-form-item>
      </t-form>
      <div style="border: 1px solid #ccc;margin-top: 20px">
        <MdEditor style="height: calc(100vh - 430px); overflow-y: hidden;" v-model="content" />
      </div>
    </t-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashboardBase',
};
</script>

<script setup lang="ts">
// import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {onBeforeUnmount, ref, shallowRef, onMounted, defineComponent} from 'vue'
// import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {addBlog, getTags} from "@/pages/user/index.ts";
import {MessagePlugin} from "tdesign-vue-next";
const emit = defineEmits([ "reBack" ]);
const mode= "default"


const toolbarConfig = {}
const userInfo = JSON.parse(localStorage.getItem("userInfo"))
let tags = ref([])
const options = ref([])
const content = ref('');

let formData=ref({
  "author": "",
  "content": "",
  "createTime": "",
  "id": 0,
  "summary": "",
  "tagTypes": "",
  "title": "",
  "userId": ""
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
})
onMounted(()=>{
  getTags().then(res=>{
    options.value = res.data
  })
})
const onEnter=()=>{

}
const reBack=()=>{
  emit('reBack');
}
const saveVlog=()=>{
  if(!formData.value.content||!formData.value.title||!formData.value.summary||!formData.value.tagTypes){
    MessagePlugin.warning("缺少必输内容")
  }
  formData.value.author = userInfo.account
  formData.value.content = content.value
  formData.value.userId = userInfo.id
  formData.value.tagTypes = tags.value.join(',')
  addBlog(formData.value).send(true).then(res=>{
    if(res.status){
      MessagePlugin.success("保存成功")
      emit('reBack');
    }
  })
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
