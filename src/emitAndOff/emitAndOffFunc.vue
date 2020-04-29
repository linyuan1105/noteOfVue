<template>
    <div>
        
        <button @click = "print">print</button>
        <button @click = "showBtn">ShowBtn</button>
        <emit v-if="show"></emit>
        <emit v-if="show"></emit>
        <emit v-if="show"></emit>
        <h1>emitoff</h1>
        <p>使用emit分发事件，容易造成事件重复触发，使用$off可解除之前的事件监听。从而防止事件重复触发</p><br/>
        <p>下面来看一下事件的重复触发过程</p>
        <p>在不使用$off的情况下，组件的创建和销毁会保留之前的事件，产生事件叠加</p>
        <p>使用$off之后会解除监听事件后再次分发事件，防止了事件的叠加</p>
        <img src="../../static/$off.png" alt="">

    </div>
</template>
<script>
    import emit from './emit.vue'
    export default {
        components: {
            emit
        },
        data () {
            return {
              show:true  
            }
        },
        methods: {
            showBtn(){
                this.show = !this.show
            },
            print(){
                this.myvue.$emit('eventone',"arg")
            }
        }
    }
</script>
<style></style>

