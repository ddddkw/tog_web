import { DashboardIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';

import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    name: 'myVlogs',
    meta: {
      title: {
        zh_CN: '我的博客',
        en_US: 'myVlogs',
      },
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'base',
        name: 'myVlogs',
        component: () => import('@/pages/dashboard/base/index.vue'),
        meta: {
          title: {
            zh_CN: '我的博客',
            en_US: 'myVlogs',
          },
        },
      },
    ],
  },
];
