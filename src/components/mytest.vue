<template>
    <div>
        <div>mytest</div>
        <button @click="onemit">onemit</button>
        <button @click="Eventoff">Eventoff</button>
        <button @click="once">once</button>
        <button @click="off">off</button>
    </div>
</template>

<script>
    export default{
        mounted () {
                   
        },
        data () {
            return {
                nums:1      
            }
        },
        methods: {
            off(){
                console.log('off分发')
                this.myvue.$emit('off','触发off方法')
            },
            once(){
                this.myvue.$emit('once','只能触发一次')
            },
            onemit(){
                this.myvue.$emit('emit','发出参数')
            },
            Eventoff(){
                this.$off(this.onemit, ()=>{
                    console.log('移除emit事件')
                })
            }
        },
        destroyed () {
            console.log('destroyed')
        }
    }
</script>




