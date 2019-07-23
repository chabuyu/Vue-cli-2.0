<template>
  <div class="login">
    <input type="text" placeholder="请输入用户名" v-focus>
    <input type="password" placeholder="请输入密码">
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
  height: 150px;
  margin-top: 40px;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin: 10px;
  }
}
</style>
