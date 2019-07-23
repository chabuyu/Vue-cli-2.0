<template>
  <div class="login">
      <ul class="login-wrap">
          <li><input type="text" placeholder="请输入用户名" v-focus></li>
          <li><input type="password" placeholder="请输入密码"></li>
          <li><input type="text" placeholder="请输入手机号"></li>
          <li><input type="text" placeholder="请输入验证码"></li>
          <li></li>
      </ul>
  </div>
</template>

<script>
// Vue.
export default {
  name: "login",
  methods: {
    text() {
      this.show = "";
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 95%;
  height: 250px;
  margin-top: 40px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .login-wrap{
      width: 100%;
      height: 100%;
      li{
          width: 100%;
          height: 50px;
          input{
              width: 100%;
          }
      }
  }
}
</style>
