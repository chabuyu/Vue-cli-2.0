<template>
  <div class="home">
    <div class="home-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="img in swipeImgs" :key="img.id"><a :href="img.src"><img :src="img.img"></a></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      swipeImgs: []
    };
  },
  components: {
  },
  created() {
    //发送请求
    this.$http.getHomeSwipe().then(res => {
      // console.log(res);
      this.swipeImgs = res
      // console.log(this.swipeImgs)
    });
  }
};
</script>

<style scoped>
.home-swipe {
  width: 100%;
  height: 250px;
  background-color: #ccc;
}
img{
  width: 100%;
  height: 100%;
}
</style>
