<template>
  <div>
    <t-card :bordered="false" hover-shadow class="cardBody">
      <t-list :split="true">
        <t-list-item>
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
import { ref,onMounted } from "vue"
let current = ref(1)
let pageSize = ref(10)

onMounted(()=>{
  queryVlogsList()
})

const queryVlogsList=()=>{
  this.$http.post().then(res=>{

  })
}

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

 }
</style>
