import axios from 'axios'
import {
  Indicator
} from 'mint-ui'
//创建一个Ajax实例
const ajax = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/data'
})

//添加一个请求拦截器
ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})
//添加一个响应拦截器
ajax.interceptors.response.use(res => {
  Indicator.close()
  // console.log(res.data.res_code)
  //过滤数据 简化代码
  return res.data.res_code == 1 ? res.data.res_body : Toast({
    message: '提示:数据请求异常',
    position: 'bottom',
    duration: 5000
  })
})
//请求首页轮播图
export const getHomeSwipe = () => {
  return ajax.get('/796168')
}

//请求分类列表
export const getClassify = () => {
  return ajax.get('/797436')
}
//请求商品列表
export const getCategoryList = (categoryId) => {
  // console.log(categoryId)
  return ajax.get('/797658?categoryId='+categoryId)

}
