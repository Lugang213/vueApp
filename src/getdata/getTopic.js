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
// 请求文章内容信息
function getArticleData(id) {
    return $http.get('/topic/' + id);
}

// 暴露查询栏目数据的方法
export { getItemList,getArticleData}