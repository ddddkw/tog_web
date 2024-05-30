import 'nprogress/nprogress.css'; // progress bar style

import NProgress from 'nprogress'; // progress bar

import router from '@/router';
import { getPermissionStore, useUserStore } from '@/store';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const permissionStore = getPermissionStore();
  const { whiteListRouters } = permissionStore;

  const userStore = useUserStore();
  if (to.query.type==="visitor"){
    const data={
      type:'visitor'
    }
    localStorage.setItem("userInfo", data)
    next()
    NProgress.done();
  } else {
    if (userStore.token&&userStore.token!=="main_token"&&localStorage.getItem("userInfo")) {
        next();
    } else {
      if (to.path === '/vlogsList'||to.path === '/login') {
        next();
      } else {
        next({
          path: '/vlogsList',
        });
      }
      NProgress.done();
    }
  }
});

router.afterEach((to) => {
  if (to.path === '/login') {
    const permissionStore = getPermissionStore();

    permissionStore.restoreRoutes();
  }
  NProgress.done();
});
