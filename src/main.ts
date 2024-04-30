/* eslint-disable simple-import-sort/imports */
import TDesign from 'tdesign-vue-next';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import i18n from './locales';
import { request } from '@/utils/request';
import 'tdesign-vue-next/es/style/index.css';
import '@/style/index.less';
import './permission';
import http from '@/utils/request/requestAlova';


const app = createApp(App);
app.config.globalProperties.$request = request;
app.use(TDesign);
app.use(store);
app.use(router);
app.use(i18n);
// 定义全局方法
app.config.globalProperties.$http = http;
app.mount('#app');
