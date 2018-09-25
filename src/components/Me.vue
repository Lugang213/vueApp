<template>
  <div class="me">
    <h1>我的</h1>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../static/images/b1.jpeg" alt=""></div>
        <div class="swiper-slide"><img src="../../static/images/b2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../../static/images/b3.jpeg" alt=""></div>
        <div class="swiper-slide"><img src="../../static/images/b4.jpg" alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <p>你站在桥上看风景,</p>
    <p>看风景的人在楼上看你。</p> 
    <p>明月装饰了你的窗子，</p> 
    <p>你装饰了别人的梦。</p>
  </div>
</template>
  
  <script>
  export default {
    name: 'Me',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 钩子函数
    mounted:function(){
      // 调用swiper滑动插件
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
  </script>
  <style scoped lang="scss">
    // 引入重置样式表
    @import '../assets/sass/base.scss';
    .me{
      h1{
        text-align:center;
        color:green;
        line-height:rem(100px);
      }
      img{
        width:100%;
      }
      p{
        text-align:center;
        font-size:rem(40px);
        line-height:50px;
        margin-top:rem(30px);
        color:rgb(18, 108, 18);
      }
    }
  </style>
  