<template>
  <div class="tabbar">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item v-for="item in nav" :key="item.path" :id="item.name" >
        <img slot="icon" src="../../assets/100.png">
        <span :class="item.icon ? 'icon' : ''">
<!-- {{totalNum.num}} -->
        </span>
        {{item.meta.navtitle}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import routes from "@/router/routes.js"
import {
  mapMutations,
  mapActions,
  mapStates,
  mapgetters
} from 'vuex'

export default {
  name: "tabbar",
  data() {
    return {
      selected: "首页",
      nav: routes.filter(curr => curr.meta.isnav)
    };
  },
  watch: {
    //监视路由的改变
    selected(newvalue, oldvalue) {
      // console.log(newvalue, oldvalue);
      this.$router.push({ name: newvalue });
    }
  },
  computed:{
    // ...mapGetters(["totalNum"])
  }
};

</script>

<style lang="scss" scoped>
  .icon{
    width: 20px;
    height: 20px;
    background-color: rgba(200, 159, 159,0.6);
    position: absolute;
    top: 0;
    margin-left: 20px;
    border-radius: 50%;
  }
</style>
