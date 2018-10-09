# vue开发webApp
## 安装环境
### 1.webpack 前端资源模块化管理和打包工具
    全局安装：npm install webpack@3 -g
    webpack -v 打印版本号
### 2.安装应用的命令行工具
    npm install vue-cli -g
## 生成vue应用
    vue init webpack vueApp
## 下载依赖模块
    npm install 
## 运行项目
    npm run dev
## 浏览器访问
    localhost:8080
## API: Node.js专业中文社区
	https://cnodejs.org/api/v1
# 项目目录
	-|build/ 						项目打包相关的配置文件
	-|config/						项目开发环境相关的配置文件
	-|node_modules/					项目依赖的模块目录
	-|src/ 							项目源码目录
	-|--|main.js 					项目的入口文件
	-|--|App.vue 					根组件
	-|--|router/					路由文件目录
	-|--|--|index.js				项目的路由文件
	-|--|components/				组件目录
	-|--|--|topics					首页中的栏目组件
	-|--|--|--|TopicList.vue		首页中的栏目公共组件
	-|--|--|Index.vue				首页组件
	-|--|--|Gzh.vue					公众号组件
	-|--|--|Me.vue					我们组件
	-|--|getdata					获取数据模板
	-|--|--|getTopIc.js				获取首页栏目列表数据模块
	-|--|assets/					静态资源库(这里的文件会被编译)
	-|--|--|sass					scss文件
	-|static/ 						静态资源库
	-|--|css						css样式文件夹
	-|--|js							js文件夹
	-|--|images						图片资源文件夹
	-|index.html    				应用的 html 文件
	-|package.json 					项目配置的 json 文件(主要,项目的介绍,描述,作者,启动指令,依赖的模块)    


## 自己写的 js 代码放在钩子函数中

	// 钩子函数
    mounted:function(){
      // 调用swiper滑动插件
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
# 技术要点
## 1.axios获取数据模块
	// 引入 axios 模块(封装 Ajax)
	import axios from 'axios';

	var $http = axios.create({
		baseURL: 'https://cnodejs.org/api/v1',
		timeout: 2000,
		headers: { 'X-Custom-Header': 'foobar' }
	});
	// 请求栏目列表数据
	function getItemList(options){
		// 默认查询的参数
		var newOptions = Object.assign({
			limit:20,
			page:1
		}, options)

		return $http({
			url: '/topics',
			method: 'get',       
			params: newOptions
		});

		// return 'ok';
	}
	// 暴露查询栏目数据的方法
	export { getItemList}

## 懒加载模块 vue-lazyload 
	 cnpm install vue-lazyload --save-dev

## 滑动组件模块 
	npm install vue-infinite-loading --save

## 打包
	npm run build 
	打包完成后在根目录下会生成dist文件夹，
	-|dist
	-|--|static       静态资源库
	-|--|index.html   首页

### 打包输出文件的配置:
	在/config/index.js 中，

	build: {
		// 打包的输出目录配置
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		// 静态资源的路径
		assetsPublicPath: './',   //修改的地方 '/'改为'./'
		.
		.
		.
	 }
   
   
   个人技术博客：http://www.luggang.com
