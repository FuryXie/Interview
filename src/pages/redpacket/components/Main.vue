<template>
  <div class="main">
    <div class="count">
      <div class="num-yuan">元</div>
      <div class="count-num">
        <p>目前总共筹得</p>
        <h1>{{this.$store.state.count}}</h1>
      </div>
    </div>
    <div class="list">
      <ul>
        <li class="list-li">
          <div class="head">
            <img src="../../../assets/images/head1.jpg" height="50px" />
          </div>
          <div class="name">Lost Star</div>
          <div class="time">AM 11：33</div>
          <div class="num">66元</div>
        </li>
        <li class="list-li">
          <div class="head">
            <img src="../../../assets/images/head1.jpg" height="50px" />
          </div>
          <div class="name">TEST 2</div>
          <div class="time">AM 11：33</div>
          <div class="num">33元</div>
        </li>
                <li class="list-li">
          <div class="head">
            <img src="../../../assets/images/head1.jpg" height="50px" />
          </div>
          <div class="name">TEST 2</div>
          <div class="time">AM 11：33</div>
          <div class="num">33元</div>
        </li>
                <li class="list-li">
          <div class="head">
            <img src="../../../assets/images/head1.jpg" height="50px" />
          </div>
          <div class="name">TEST 2</div>
          <div class="time">AM 11：33</div>
          <div class="num">33元</div>
        </li>
                <li class="list-li">
          <div class="head">
            <img src="../../../assets/images/head1.jpg" height="50px" />
          </div>
          <div class="name">TEST 2</div>
          <div class="time">AM 11：33</div>
          <div class="num">33元</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedpacketMain",
  data: function() {
    return {

    };
  },
  methods: {}
};
</script>

<style scoped>
.main {
  /* height: 100%; */
  /* background-color: #384155;  */
  background-color: rgba(47, 40, 54, 1);
  color: #fff;
}
.count {
  position: relative;
  height: 214px;
  background-color: rgba(47, 40, 54, 1);
}
.num-yuan {
  position: absolute;
  margin: 65px 0 0 257px;
  font-size: 50px;
  color: #fff;
  z-index: 99;
}
.count-num {
  position: absolute;
  margin: 8px 0 0px 10px;
  height: 196px;
  width: 353px;
  background-color: #3e3f4a;
  color: rgba(46, 67, 63, 0.9);
}
.count-num p {
  text-align: center;
  color: #fff;
  margin: 40px 0 0px 0;
}
.count-num h1 {
  text-align: center;
  color: rgba(255, 0, 108, 1);
  font-size: 57px;
}
.list ul li {
  height: 80px;
  background-color: rgba(47, 40, 54, 1);
  border-top: 1px solid rgba(46, 67, 63, 0.9);
  border-bottom: 1px solid rgba(46, 67, 63, 0.9);
}
.head img {
  border: 4px solid;
  border-radius: 50%;
  margin: 15px 0 0px 15px;
}
.list-li {
  position: relative;
}
.name {
  position: absolute;
  margin: -53px -0 0 83px;
  font-size: 18px;
}
.time {
  position: absolute;
  margin: -31px -0 0 83px;
  font-size: 12px;
  color: rgb(97, 109, 162);
}
.num {
  position: absolute;
  margin: -49px -0 0 308px;
  font-size: 22px;
  color: #fff;
}
</style>