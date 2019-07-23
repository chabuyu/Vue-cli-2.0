<template>
  <div class="classify">
    <div class="sidebar">
      <router-link
        :to="`/classify/${title.id}`"
        tag="div"
        v-for="title in classify"
        :key="title.id"
      >{{ title.classify }}</router-link>
    </div>
    <div class="otherbar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "classify",
  components: {
    // CategoryList
  },
  created () {
    //发起ajax请求 并得到数据
    this.$http.getClassify().then(res => {
      //   console.log(res);
      this.classify = res.list
      this.$nextTick(() => {
        //默认选中第一个
        // console.log(this.classify[0].id)
        const { classifyId = this.classify[0].id } = this.$route.params
        this.$router.push(`/classify/${classifyId}`)
      });
    });
  },
  data () {
    return {
      classify: []
    };
  }
};
</script>
<style <style lang="scss" scoped>
.classify {
  margin-top: 40px;
  margin-bottom: 55px;

  line-height: 40px;
  display: flex;
  .sidebar {
    width: 80px;
    height: 90vh;
    background: #ccc;
    position: fixed;
    div {
      width: 100%;
      height: 40px;
      &.router-link-exact-active.router-link-active {
        background-color: #ffffff;
        color: rgb(206, 87, 50);
        border-left: 2px solid #000;
        font-weight: bold;
      }
    }
  }
  .otherbar {
    margin-left: 80px;
    flex: 1;
  }
}
</style>
