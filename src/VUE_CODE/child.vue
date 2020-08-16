<template>
    <div>
        子组件接收：{{parentValue}}
        <button @click='childEX'>点击查看子组件实例</button>
    </div>
</template>
<script>
    export default{
        props:{
            parentValue:{
                type:String,
                require:false
            }
        },
        methods: {
            childEX(){
                console.log(this)
            }
        }
    }

</script>


