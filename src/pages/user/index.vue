<template>
  <div>
    <t-row v-if="!isVisible" :gutter="[24, 24]">
      <t-col :flex="5">
        <div class="user-left-greeting">
          <div>
            Hi，土狗
            <span class="regular"> {{ $t('pages.user.markDay') }}</span>
          </div>
          <img src="@/assets/dogHead.png" class="logo" />
        </div>
      </t-col>

      <t-col :flex="1">
        <t-card class="addVlog" :bordered="false" @click="addVlog">
          <t-row :gutter="[24, 24]">
            <t-col :flex="3">
            <span class="newText">
             开启新的文章
            </span>
            </t-col>
          </t-row>
        </t-card>
      </t-col>
    </t-row>
    <editVlogContent @reBack="reBack" v-if="isVisible"/>
  </div>
</template>
<script lang="ts">
export default {
  name: 'UserIndex',
};
</script>
<script setup lang="ts">
import { IconFont  } from 'tdesign-icons-vue-next';
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {onMounted, onUnmounted, ref} from 'vue';

import { useSettingStore } from '@/store';
import editVlogContent from "./components/editVlogContent.vue";

echarts.use([GridComponent, TooltipComponent, LineChart, CanvasRenderer, LegendComponent]);

let lineContainer: HTMLElement;
let lineChart: echarts.ECharts;
let isVisible = ref(false);
const store = useSettingStore();


const updateContainer = () => {
  lineChart?.resize({
    width: lineContainer.clientWidth,
    height: lineContainer.clientHeight,
  });
};

onMounted(() => {
  window.addEventListener('resize', updateContainer, false);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateContainer);
});
const addVlog = ()=> {
  isVisible.value = true
}
const reBack = ()=>{
  isVisible.value = false
}
</script>

<style lang="less" scoped>
@import './index.less';

</style>
