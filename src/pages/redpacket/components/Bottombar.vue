<template>
  <div class="bottom-bar">
    <div class="my-num">
      <p>
        我塞的钱
        <strong>{{this.$store.state.mymoney}}元</strong>
      </p>
    </div>
    <button class="btn-give" @click="gogive">再次塞钱</button>
  </div>
</template>

<script>
export default {
  name: "RedpacketBottom-bar",
  data: function() {
    return {};
  },
  methods: {
    gogive: function() {
      this.$router.push("/give");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  margin: -79px 0 0 0;
  width: 375px;
  height: 82px;
  background-color: rgb(68, 68, 68);
}
.my-num {
  margin: 29px 0px 0 21px;
}
.my-num p {
  color: rgb(179, 179, 179);
  font-size: 18px;
}
.my-num strong {
  margin: 0px 0 0 8px;
  color: #fff;
  font-size: 22px;
}
.btn-give {
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
  position: absolute;
  margin: -28px 0 0 274px;
  border-radius: 15px 15px 15px 15px;
}
</style>