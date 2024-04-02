// import type { MenuListResult } from '@/api/model/permissionModel';
// import { request } from '@/utils/request';
//
// const Api = {
//   MenuList: '/get-menu-list-i18n',
// };

export function getMenuList() {
  return { list: [] };
  // return request.get<MenuListResult>({
  //   url: Api.MenuList,
  // });
}
