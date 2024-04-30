// // api.ts
// import alova from 'alova';


import {createAlova} from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import { MessagePlugin } from 'tdesign-vue-next';
import store from '@/store';
import router from '@/router';

const headers = {'Content-Type': 'application/json;charset=UTF-8'};
// 请求超时时间
// const timeout = 5000

const AlovaInstance = createAlova({
  baseURL: 'http://120.27.229.165:9999',
  // baseURL: 'http://192.168.31.123:8888',
  // baseURL: 'http://192.168.31.185:8888',
  // baseURL: 'http://192.168.31.239:8888',




  requestAdapter: GlobalFetch(),
  shareRequest: true,

  // 请求拦截器
  beforeRequest(method) {
    // 假设我们需要添加token到请求头

  },

  // 响应拦截器
  responded: {
    onSuccess: async (response,) => {
      if (response.status >= 400) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      if (json.code !== 200) {
        await MessagePlugin.error({
          content: json.msg || '请求错误',
          duration: 2000
        })
        // 登录过期重新跳转到登录页
        if (json.code === 401) {
          await router.replace('/login')
        }
        // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
        throw new Error(json.message);
      }

      // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
      return json.data;
    },
    onError(error) {
      throw new Error(error)
    }
  }
})
function makeUrl(url) {
  if (
    url.startsWith('/') ||
    url.startsWith('http://') ||
    url.startsWith('https://')
  ) {
    return url
  }
  return `${baseURL}${url}`
}

const Alova = {
  // 这是get请求
  get(url: string, params: Record<string, any>) {
    return AlovaInstance.Get(url, {
      headers,
      params,

      localCache: {
        mode: 'placeholder', // 设置缓存模式为持久化占位模式
        expire: 60 * 10 * 1000 // 缓存时间
      },
    })
  },
  post(url: string, params: Record<string, any>) {
    const defaultParams = {
      uuid: new Date().getTime(),
      ...params, // 合并传入的参数
    }
    return AlovaInstance.Post(url, defaultParams,)
  },
  makeUrl
}

export default Alova
