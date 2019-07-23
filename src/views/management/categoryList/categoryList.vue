<template>
  <div class="category">
    <div
      class="categorylist"
      v-for="item in categorylist"
      :key="item.id"
      :to="item.href"
      @click="toDetail(item.id)"
    >
      <img :src="item.src" alt>
      <div class="right">
        <div>{{ item.title }}</div>
        <div>价格：{{ item.price }}</div>
        <mt-button @click.stop="addIt(item)" type="danger" size="small">加入购物车</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
//页面级数据缓存 ，用于缓存获取到的数据
const cache = {};
import {
  mapMutations,
  mapActions,
  mapStates,
  mapgetters
} from 'vuex'
export default {
  name: "categoryList",
  data() {
    return {
      categorylist: []
    };
  },
  methods: {
    //查询数据
    getCategoryListData(categoryId) {
      //判断缓存中是否存在对应请求的categoryId ，有就用缓存中的数据，没有才进行Ajax请求
      this.$http.getCategoryList(categoryId).then(res => {
        if (Object.keys(cache).includes(categoryId)) {
          this.categorylist = cache[categoryId];
        } else {
          this.categorylist = res.list;
          cache[categoryId] = res.list;
        }
        // console.log(cache)

      });
    },
    //加入购物车
    ...mapMutations(['addIt']),

    //查看商品详情
    toDetail(id) {
      console.log(id)
      this.$router.push('/detail/' + id)
    }
  },
  //   1.切换分类进行Ajax请求  生命周期钩子函数
  //   created() {
  //     this.getCategoryListData()
  //   },
  //   watch: {
  //     //监视路由的改变
  //     $route(newvalue, oldvalue) {
  //       console.log(newvalue, oldvalue)
  //       this.getCategoryListData()
  //     }
  //   },
  // 2.导航守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getCategoryListData(vm.$route.params.categoryId);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.getCategoryListData(to.params.categoryId);
    next();
  }
};
</script>

<style lang="scss" scoped>
.category {
  width: 100%;

  .categorylist {
    width: 100%;
    height: 100px;
    display: inline-block;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      height: 100%;
      flex: 1;
      line-height: 30px;
    }
  }
}
</style>
