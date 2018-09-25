<template>
  <div class="show">
    <h1>{{title}}</h1>
    <div class="author">
        作者:<span>{{author}}</span>
    </div>
    <div class="content">
        <div v-html="content"></div>
    </div>
  </div>
</template>

<script>

// 引入获取栏目数据的模块
import { getArticleData } from "@/getdata/getTopic.js";

export default {
  name: 'Show',
  data () {
    return {
      title:'',
      author:'',
      content:''
    }
  },
  // 钩子函数
  mounted:function(){
    //   console.log(this.$route.params.id)
    // 请求文章的详细信息
    getArticleData(this.$route.params.id).then((data)=>{
        console.log(data)
        // 把查询到数据 绑定到 vue 的数据里
        this.title = data.data.data.title;
        this.author = data.data.data.author.loginname;
        this.content = data.data.data.content;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入样式表重置
	@import '../../assets/sass/base.scss';
	.show{
		margin-top: rem(100px);
        h1{
            color:#333;
            font-family: '楷体';
            font-size: rem(40px);
            text-align: center;
        }
        .author{
            font-size: rem(30px);
            text-align: center;
            line-height: rem(80px);
            color:blue;
            span{color:blueviolet};
        }
        .content{
            width: 90%;
            margin: rem(10px) auto;
            img{
                width: rem(750px);
            }
        }

        .markdown-text p img{
            width: rem(750px);
        }
	}
</style>
