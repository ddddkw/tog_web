// import type { MenuListResult } from '@/api/model/permissionModel';
// import { request } from '@/utils/request';
//
// const Api = {
//   MenuList: '/get-menu-list-i18n',
// };
// 获取动态路由菜单的方法
export function getMenuList() {
  return { list: [] };
  // return request.get<MenuListResult>({
  //   url: Api.MenuList,
  // });
}
