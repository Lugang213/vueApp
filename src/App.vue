<template>
  <div id="app">
    <router-view/>
    <nav class="appNav">
      <ul>
          <router-link to='/index' tag='li' :class="resPath=='index'?'mo':''">首页</router-link>
          <router-link to='/gzh' tag='li' :class="resPath=='gzh'?'mo':''">公众号</router-link>
          <router-link to='/me' tag='li' :class="resPath=='me'?'mo':''">我们</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 计算属性
  computed:{
    resPath: function(){
      // 用 '/' 把路径分割成数组
      var array = this.$route.path.split('/');
      // 把能够表示当前 组件的 字符串 返回出去
      return array[1];
    }
  }
}
</script>

<style lang="scss">
  // 引入重置样式表
  @import './assets/sass/base.scss';

  // 底部导航
  nav.appNav{
    position:fixed;
    bottom:0;
    width:100%;
    height:rem(100px);
    background:#0f975a;
    ul{
      display: flex;
      li{
        width:33.3%;
        line-height:rem(100px);
        text-align:center;
        font-size:rem(40px);
        font-weight: bold;
        color:#fff;
      }
      li.mo{
        background:#156f47;
      }
    }

  }

  
</style>
