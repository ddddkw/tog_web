import http from '@/utils/request/requestAlova';
export const queryVlogsList = (param: Record<string, any>) => http.post("togs/getVlogs/QueryList", param)

