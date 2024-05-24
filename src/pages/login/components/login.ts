import http from '@/utils/request/requestAlova';
export const userLogin = (param: Record<string, any>) => http.post("togs/user/login", param)
export const getUserInfoByToken = (param) => http.get(`togs/user/getUserInfoByToken?token=${param}`)
