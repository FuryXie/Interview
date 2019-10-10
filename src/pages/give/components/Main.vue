<template>
  <div class="main">
    <p class="input-give">塞钱</p>
    <input type="text" placeholder="请输入金额" v-model="money" />
    <p class="input-yuan">元</p>
    <p class="text-input">*塞钱金额不少于1元</p>
    <p class="text-momey">{{money}}</p>
    <button class="give-money" @click="give">塞钱进红包</button>
  </div>
</template>

<script>
export default {
  name: "GiveMain",
  data: function() {
    return {
      money: ""
    };
  },
  methods: {
      give:function(){
        //   alert(this.money);
          this.$store.dispatch('changeMyMoney',parseInt(this.money)+parseInt(this.$store.state.mymoney));
          this.$store.dispatch('changeCount',parseInt(this.money)+parseInt(this.$store.state.count));
          this.$router.push("/");
      }
  }
};
</script>

<style scoped>
.main {
  position: relative;
  padding-top: 14px;
  height: 612px;
  background-color: rgba(47, 40, 54, 1);
}
.main input {
  border: transparent;
  background-color: rgb(80, 76, 84);
  padding: 0px 0px 0 255px;
      width: 120px;
  height: 50px;
}
.input-give {
  position: absolute;
  color: #fff;
  margin: 15px 0 0 15px;
}
.input-yuan {
  position: absolute;
  color: #fff;
  margin: -34px 0 0 346px;
}
.text-input {
  color: #504c54;
}
.text-momey {
  font-size: 50px;
  padding: 42px 0 0 0;
  /* margin: 74px 0 0 137px; */
  text-align: center;
  color: #fff;
}
.give-money {
  height: 30px;
  width: 87px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #cc1cc6),
    color-stop(100%, #b19494)
  );
  border: transparent;
  color: #fff;
  /* position: fixed; */
  margin: 56px 0 0 152px;
  border-radius: 15px 15px 15px 15px;
}
</style>