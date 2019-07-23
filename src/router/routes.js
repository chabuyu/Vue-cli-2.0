//通用级页面
import Header from '@/components/header/header'  //头部
import Tabbar from '@/components/tabbar/tabbar'  //尾部
//路由懒加载：将页面级组件分片打包
const Home =() => import('@/views/management/home/home')  //首页
const Classify =() => import('@/views/management/classify/classify')  //分类
const CategoryList =() => import('@/views/management/categoryList/categoryList')  //分类列表
const Recommend =() => import('@/views/management/recommend/recommend')//推荐
const Cart =() => import('@/views/management/cart/cart')  //购物车
const Mine =() => import('@/views/management/mine/mine')//个人中心
const Detail =() => import('@/views/management/detail/detail')//商品详情
const Login =() => import('@/views/management/login/login')//登录
const Register =() => import('@/views/management/register/register')//注册


const routes = [{
    path: '/home',
    name: 'home',
    components: {
      header:Header,
      main: Home,
      tabbar: Tabbar
    },
    meta: {
      navtitle: '首页',
      isnav: true
    }
  },
  {
    path: '/',
    redirect: '/home',
    meta: {
      isnav: false
    }
  },
  {
    path: '/classify',
    name: 'classify',
    components: {
      header:Header,
      main: Classify,
      tabbar: Tabbar
    },
    meta: {
      navtitle: '分类',
      isnav: true

    },
    children:[
      {
        path:':categoryId',
        name:'categorylist',
        components:{
          default:CategoryList
        }
      }
    ]
  },
  {
    path: '/recommend',
    name: 'recommend',
    components: {
      header:Header,
      main: Recommend,
      tabbar: Tabbar
    },
    meta: {
      navtitle: '推荐',
      isnav: true

    }
  },
  {
    path: '/cart',
    name: 'cart',
    icon: true,
    components: {
      header:Header,
      main: Cart,
      tabbar: Tabbar
    },
    meta: {
      navtitle: '购物车',
      isnav: true

    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      header:Header,
      main: Mine,
      tabbar: Tabbar
    },
    meta: {
      navtitle: '个人中心',
      isnav: true

    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    components: {
      header:Header,
      main: Detail
    },
    meta: {
      isnav: false
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      header:Header,
      main: Login
    },
    meta: {
      isnav: false
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      header:Header,
      main: Register
    },
    meta: {
      isnav: false
    }
  }
]

export default routes
