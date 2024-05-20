<template>
  <div>
    <div v-html="vlogDetail"></div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  vlogDetail: {
    type: String,
    required: true // 可选，表示此prop是必需的
  }
});
</script>
<style scoped>

</style>
