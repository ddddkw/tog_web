<template>
  <div>
    <editVlogContent v-if="isEdit" ref="editVlogContent"/>
    <volgsList v-if="!isEdit" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashboardBase',
};
</script>

<script setup lang="ts">
import { ref } from "vue"
import editVlogContent from "./components/editVlogContent.vue";
import volgsList from './components/vlogsList.vue'

let isEdit = ref(false)
</script>

<style scoped>
.row-container:not(:last-child) {
  margin-bottom: 16px;
}
</style>
