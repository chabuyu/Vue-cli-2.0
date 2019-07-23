import Vue from 'vue'
import Vuex from 'vuex'
import local from '../requests/localstorage.js'
Vue.use(Vuex)

export default new Vuex.Store({
  //严格模式
  strict: true,
  //数据
  state: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  //根据state派生的新的状态，相当于computed
  //修改state的方法
  getters: {
    //总数量 写法一
    totalNum(state) {
      const x = state.cart.filter(curr => {
        return curr.choose
      })
      return {num:x.reduce((result, curr) => result + curr.num, 0),price:x.reduce((result, curr) => result + curr.num*curr.price, 0)}
    },
    // 总价 写法二
    // totalPrice(state) {
    //   // const has = state.cart.every(curr => !curr.choose)
    //   // if (has) {
    //   //   return 0
    //   // } else {
    //   return state.cart.reduce((result, curr) => {
    //     if (curr.choose) {
    //       return result + curr.num * curr.price
    //     }
    //   }, 0)
    //   // }
    // }
    
  },
  mutations: { //同步
    //通过 this.$store.commit()来调用mutations里的方法  里面可以传两个数据，第一个为state 第二个为参与计算的数据

    //1.加入购物车
    addIt(state, item) {
      const it = state.cart.findIndex(curr => {
        return curr.id == item.id
      })
      if (it == -1) {
        item.num = 1
        item.choose = false
        state.cart.push(item)
      } else {
        state.cart[it].num += 1
      }
      local.methods.setStorage('cart', state.cart)
    },
    // 2更改购物车数量
    changeIt(state, it) {
      state.cart = state.cart.map(curr => {
        if (curr.id == it[0]) {
          if (it[1]) {
            curr.num += 1
          } else {
            curr.num -= 1
          }
        }
        return curr
      })
      local.methods.setStorage('cart', state.cart)
    },
    // 3.删除购物车
    delIt(state, id) {
      const it = state.cart.findIndex(curr => {
        return curr.id == id
      })
      state.cart.splice(it, 1)
      local.methods.setStorage('cart', state.cart)
    },
    //4.选择
    cho(state, it) {
      state.cart.findIndex(curr => {
        if (curr.id == it) {
          console.log(state.cart)
          return (curr.choose = !curr.choose);
        }
      });
      local.methods.setStorage('cart', state.cart)
    },
    // 5.全选
  },
  actions: { //异步
    //不是直接更改state的状态而是提交mutations
  }

})
