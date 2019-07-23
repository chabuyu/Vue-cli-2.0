<template>
  <div class="cart-item">
    <input type="checkbox" class="change" :checked='choose' v-model="choose" @click="cho([id])">
    <div class="cart-img">
      <img :src="src" alt>
    </div>
    <div class="item">
      <div>
        <!-- 名称 -->
        <div class="cart-title">{{title}}</div>
        <!-- 删除 -->
        <mt-button class="cart-del" type="danger" @click="delIt(id)">删除</mt-button>
      </div>
      <div>
        <!-- 减少数量 -->
        <mt-button class="cart-red" :disabled="num <=1" @click="changeIt([id,false])">-</mt-button>
        数量:{{num}}
        <!-- 增加数量 -->
        <mt-button class="cart-add" @click="changeIt([id,true])">+</mt-button>
        <!-- 价格 -->
        <div class="cart-price">单价: {{price}}</div>
      </div>
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
export default {
  props: ["src", "title", "num", "price", "id","choose"],
  name: "cartItem",
  data() {
    return {
      // value: false
    };
  },
  methods: {
    ...mapMutations(["changeIt", "delIt"]),
    ...mapMutations(["cho"])
  },
  computed: {

    },
  beforeUpdate(){
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  padding: 0 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .change {
    width: 20px;
    height: 20px;
  }
  .cart-img {
    width: 120px;
    height: 120px;
    float: left;
    img {
      width: 120px;
      height: 120px;
    }
  }
  .item {
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: space-between;
    height: 100%;
    padding: 10px 0;
    padding-left: 10px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
