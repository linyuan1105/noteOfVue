<template>
    <div>
        {{ex}}
        <button @click='changeEX'>查看实例</button>
        <childComponent :parentValue="vlaue"></childComponent>
        <childComponent :parentValue="vlaue"></childComponent>
    </div>
</template>
<script>
    import childComponent from './child.vue'
    export default{
        components:{childComponent},
        data() {
            return {
                ex:'VUE源码属性解读',
                vlaue:'父传值'
            }
        },
        mounted() {

        },
        methods: {
            changeEX(){
                this.ex='VUE文本变化'
                console.log(this)
            }
        }
    }
</script>

