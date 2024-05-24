import http from '@/utils/request/requestAlova';
export const addBlog = (param: Record<string, any>) => http.post("togs/getVlogs/addVlogs", param)
export const getTags = () => http.get("togs/getVlogs/queryTags")
