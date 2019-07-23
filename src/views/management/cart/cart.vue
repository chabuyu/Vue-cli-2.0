<template>
  <div class="cart-wrap">
    <div class="myCart">我的购物车</div>
    <CartItem v-for="item in cart" :key="item.id" v-bind="item"></CartItem>
    <div class="info">
      全选：<input type="checkbox" class="change">
      商品总数：<span>{{totalNum.num}}</span>，
      商品总价：<span>{{totalNum.price}}</span>
    </div>
  </div>
</template>

<script>
import {
  mapState, //数据
  mapGetters, //计算
  mapActions, //异步
  mapMutations //同步
} from "vuex";
import CartItem from "@/components/cartItem/cartItem"; //购物车组件

export default {
  name: "cart",
  data() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalNum", "totalPrice"])
  },
  components: {
    CartItem
  }
};
</script>

<style lang="scss" scoped>
.cart-wrap {
  margin-top: 40px;
  margin-bottom: 55px;
  .myCart {
    padding-top: 20px;
    text-align: center;
  }
  .info {
    font-weight: bold;
    width: 100%;
    height: 50px;
    line-height: 50px;
    .change{
      width: 20px;
      height: 20px;
    }
    span {
      color: red;
      width: 50px;
      height: 100%;
    }
  }
}
</style>

