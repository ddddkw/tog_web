<template>
  <div>
    <div v-if="!editVlog" >
      <t-card v-if="!showDetail" :bordered="false" hover-shadow class="cardBody">
        <t-list :split="true" class="listBody">
          <t-list-item @click="viewVlogContent()">
            <template #action>
              <t-link theme="primary" hover="color" style="margin-left: 16px" @click="editHandler"> 编辑 </t-link>
              <t-link theme="primary" hover="color" style="margin-left: 16px" @click="delHandler"> 删除 </t-link>
            </template>
            <t-list-item-meta title="列表主内容" description="列表内容列表内容" />
          </t-list-item>
        </t-list>
        <t-pagination
          v-model="current"
          v-model:pageSize="pageSize"
          :total="100"
          show-jumper
          @change="onChange"
          @page-size-change="onPageSizeChange"
          @current-change="onCurrentChange"
          class="pagination"
        />
      </t-card>
      <t-card v-if="showDetail" :bordered="false" hover-shadow class="cardBody">
        <viewVlog :vlogDetail="vlogDetail" ref="viewVlog"/>
      </t-card>
    </div>
    <editVlogContent v-if="editVlog" ref="editVlogContent"/>
  </div>
</template>
<script setup lang="ts">
import {queryVlogsList} from "./vlogPage"
import { ref,onMounted } from "vue"
import viewVlog from "./viewVlog.vue"
import editVlogContent from "@/pages/user/components/editVlogContent.vue";

let current = ref(1)
let pageSize = ref(10)
let vlogDetail = ref("")
let showDetail = ref(false)
let editVlog = ref(false)

onMounted(()=>{
  queryVlogsList()
})

const onChange=(val)=>{

}
const onPageSizeChange=(val)=>{

}
const onCurrentChange=(val)=>{

}
const viewVlogContent = ()=>{
  showDetail.value=true
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
   cursor: pointer;
 }
 .listBody{
   height: calc(100vh - 250px);
   overflow-y: auto;
 }
</style>
