<template>
    <div class="app">
        {{data}}
        <button @click='getindex'>index</button>
        <img src="https://www.mi.com/buy?product_id=10721" alt="图片">
    </div>
</template>
<script>
    export default{
        props:{
            index:{
                type:Number,
                require:false,
                default:null
            }
        },
        data(){
            return{
                data:1
            }
        },
        methods: {
            getindex(){
                console.log(this.index)
            }
        },
        // 生命周期
        beforeCreate() {
            
            console.log('beforeCreate')
        },
        created() {
            console.log('created')
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted () {
            console.log(this,'this子组件')
            this.myvue.$on('eventone',val=>{
                console.log(this.data,val)
            })
            console.log('mounted')
        },
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log('updated')
        },
        beforeDestroy() {
            console.log('beforeDestroy')
        },
        destroyed () {
            this.myvue.$off('eventone')
            console.log("hellow destroyed")
            console.log('destroyed')
        }
    }
</script>
<style scoped>
    .app{
        float: left;
        margin: 0;
        padding: 0;
        width: 100px;
        height: 100px;
        background: blue;
        color: white;
        margin: 10px;
    }



</style>


