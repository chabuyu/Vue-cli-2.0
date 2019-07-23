<template>
  <div class="header">
      <mt-header fixed title='京东商城'>
          <div slot="left" @click="back">
            <mt-button icon='back'></mt-button>
          </div>
          <mt-button slot="right" icon='more'></mt-button>
      </mt-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    back(){
      this.$router.back()
    }
  }
}
</script> 