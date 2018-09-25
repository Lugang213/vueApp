<template>
    <div class="gzh">
      <h1>公众号</h1>
      <img src="../../static/images/mycode.png" alt="">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Gzh',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
  </script>
  <style scoped lang="scss">
    @import '../assets/sass/base.scss';
    .gzh{
      h1{
        text-align:center;
        line-height:rem(100px);
        font-size:rem(50px);
        color:red;
      }
      img{
        width:80%;
        display:block;
        margin:rem(10px) auto;
      }
    }
  </style>
  