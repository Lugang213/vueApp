<template>
    <div class="index">
      <!-- 顶部导航 -->
      <nav class="top">
        <ul>
          <router-link to="/index/" tag="li" :class="(resPath=='' || resPath== undefined)?'mo':''">全部</router-link>
          <router-link to="/index/good" tag="li" :class="resPath=='good'?'mo':''">精华</router-link>
          <router-link to="/index/share" tag="li" :class="resPath=='share'?'mo':''">分享</router-link>
          <router-link to="/index/ask" tag="li" :class="resPath=='ask'?'mo':''">问答</router-link>
          <router-link to="/index/job" tag="li" :class="resPath=='job'?'mo':''">招聘</router-link>
          <router-link to="/index/dev" tag="li" :class="resPath=='dev'?'mo':''">测试</router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 计算属性
  computed:{
    resPath: function(){
      // 用 '/' 把路径分割成数组
      var array = this.$route.path.split('/');
			// 把能够表示当前 组件的 字符串 返回出去
      return array[2];
    }
  }
  }
  </script>
  <style scoped lang="scss">
    // 引入重置样式表
    @import '../assets/sass/base.scss';
    // 顶部导航
    nav.top{
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      height: rem(80px);
      background: #f6f6f6;
      ul{
        display: flex;
        height: rem(80px);
        align-items: center;
        justify-content: space-around;
        li{
          font-size: rem(32px);
          width: rem(90px);
          height: rem(50px);
          line-height: rem(50px);
          color:#509030;
          text-align: center;				
        }
        li.mo{
          border-radius: rem(5px);
          color:#fff;
          background: #509030;
        }
      }
    }
  </style>
  