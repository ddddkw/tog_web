<template>
  <div>
    <div v-html="viewBlog.content"></div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";

let viewBlog = ref({})
const init = (val)=>{
  viewBlog.value = val
}
defineExpose({ init });
onMounted(()=>{
})
</script>
<style scoped>

</style>
