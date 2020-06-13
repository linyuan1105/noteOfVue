<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <!-- 添加子路由导航 -->
        <p>导航 ：
            <router-link to="/parent">首页</router-link> | 
            <router-link to="/parent/childrenA">-子页面1</router-link> |
            <router-link :to="{name:'childrenB'}">-子页面2</router-link>
        </p>
        <button @click="routerchange">routerchange</button>
        <!-- 子页面展示部分 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Home Page!'
        }
    },
    methods: {
        routerchange(){
            
           console.log(this.$router.push('/'))
        }
    },
}
</script>

<style scoped>
</style>