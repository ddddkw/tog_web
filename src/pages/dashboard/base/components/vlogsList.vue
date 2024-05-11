<template>
  <div>
    <t-card :bordered="false" hover-shadow class="cardBody">
      <t-list :split="true" class="listBody">
        <t-list-item>
          <template #action>
            <t-link theme="primary" hover="color" style="margin-left: 16px"> 编辑 </t-link>
            <t-link theme="primary" hover="color" style="margin-left: 16px"> 删除 </t-link>
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
  </div>
</template>
<script setup lang="ts">
import {queryVlogsList} from "./vlogPage"
import { ref,onMounted } from "vue"
let current = ref(1)
let pageSize = ref(10)

onMounted(()=>{
  queryVlogsList()
})

const onChange=(val)=>{

}
const onPageSizeChange=(val)=>{

}
const onCurrentChange=(val)=>{

}
</script>
<style scoped>
 .pagination{
   margin-top: 20px;
 }
 .cardBody{
   height: calc(100vh - 150px);
 }
 .listBody{
   height: calc(100vh - 250px);
 }
</style>
