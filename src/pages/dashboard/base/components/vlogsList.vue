<template>
  <div>
    <div v-if="!editVlog" >
      <t-card v-if="!showDetail" :bordered="false" hover-shadow class="cardBody">
        <t-list :split="true" class="listBody">
          <t-list-item v-for="item in blogList" @click="viewVlogContent(item)">
            <template #action>
              <t-link theme="primary" hover="color" style="margin-left: 16px" @click="editHandler"> 编辑 </t-link>
              <t-link theme="primary" hover="color" style="margin-left: 16px" @click="delHandler"> 删除 </t-link>
            </template>
            <t-list-item-meta :title="item.title" :description="item.summary" />
          </t-list-item>
        </t-list>
        <t-pagination
          v-model="current"
          v-model:pageSize="pageSize"
          :total="form.total"
          show-jumper
          @change="onChange"
          @page-size-change="onPageSizeChange"
          @current-change="onCurrentChange"
          class="pagination"
        />
      </t-card>
      <t-card v-show="showDetail" :bordered="false" hover-shadow class="cardBody">
        <viewVlog @reBack="reBack" ref="viewVlogRef"/>
      </t-card>
    </div>
<!--    <editVlogContent v-if="editVlog" :viewBlog="viewBlog" ref="editVlogContent"/>-->
  </div>
</template>
<script setup lang="ts">
import {queryVlogsList} from "./vlogPage"
import { ref,onMounted } from "vue"
import viewVlog from "./viewVlog.vue"

let current = ref(1)
let pageSize = ref(10)
let showDetail = ref(false)
let editVlog = ref(false)
let blogList = ref([])
let viewBlog = ref({})
const viewVlogRef = ref(null)
let form=ref({
  "createTime": "",
  "pageIndex": 1,
  "pageSize": 10,
  "summary": "",
  "tagType": "",
  "title": "",
  "total": 0,
  "userId": ""
})


onMounted(()=>{
  queryVlogsList(form.value).send(true).then(res=>{
    blogList.value = res.data.records
    form.value.total = res.data.total
  })
})

const onChange=(val)=>{

}
const onPageSizeChange=(val)=>{

}
const onCurrentChange=(val)=>{

}
const reBack=()=>{
  showDetail.value = false
}
const viewVlogContent = (item)=>{
  viewBlog.value = item
  showDetail.value=true
  viewVlogRef.value.init(item)
}
const editHandler=()=>{
  editVlog.value = true
}
const delHandler=()=>{

}
</script>
<style scoped>
 .pagination{
   margin-top: 20px;
 }
 .cardBody{
   height: calc(100vh - 150px);
   overflow-y: auto;
   cursor: pointer;
 }
 .listBody{
   height: calc(100vh - 250px);
   overflow-y: auto;
 }
</style>
