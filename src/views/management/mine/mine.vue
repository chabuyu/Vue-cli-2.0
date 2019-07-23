<template>
  <div class="mine">
    <div class="looding">
      <div class="login" @click="toLogin">登录</div>
      <div class="register" @click="toRegister">注册</div>
    </div>
    <div class="your-tou-wrap">
      <div class="your-tou"></div>
    </div>
    <div>
      <div class="cart" @click="toCart">购物车</div>
    </div>
  </div>
</template>

<script>
// import cart from "./cart/cart";
export default {
  name: "mine",
  computed: {},
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/register");
    },
    toCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style <style lang="scss" scoped>
.mine {
  margin-top: 40px;
  margin-bottom: 55px;
  .looding {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    .register,
    .login {
      // width: 30px;
      // height: 100%;
      padding-right: 20px;
      line-height: 30px;
    }
  }
  .your-tou-wrap {
    width: 100%;
    height: 100px;
    margin-top: 10px;

    .your-tou {
      width: 100px;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      background: url("../../../img/mine.jpeg") no-repeat center center;
      background-size: 150%;
    }
  }
}
</style>
