<template>
    <div class="hello">
        <img :src="require('../../../static/images/loading2.gif')" alt="">
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped lang="scss">
    // 引入样式表重置
    @import "../../assets/sass/base.scss";
    .loading{
        .img{
            width: 100%;
            display: block;
            margin-top: rem(300px);
        }
    }

</style>