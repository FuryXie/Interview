<template>
  <div class="top-bar">
      <img class="left-arrow" src="../../../assets/images/left.png" height="22px" @click="goback">
      <p>众筹红包</p>
  </div>
</template>

<script>
export default {
  name: "GiveTopbar",
  data: function() {
    return {

    };
  },
  methods: {
    goback:function(){
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
    .top-bar{
      position: relative;
        height: 40px;
        text-align: center;
        vertical-align: middle;
        /* background-color: #384155;  */
        background-color: rgba(47, 40, 54, 1);
        color:#fff;
        border-bottom:1px solid #5a5a5a; 
    }
    .top-bar p{
        padding: 8px 0 0  0;
    }
    .left-arrow{
      position:absolute;
          margin: 8px 0 0 -185px;
    }
</style>