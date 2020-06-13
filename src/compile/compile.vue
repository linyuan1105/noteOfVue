<template>
 <div>
     <button @click="compile">compile</button>
     <button @click="testhashReq">testhashReq</button>
 </div>
</template>

<script>
    import vue from 'vue'
export default{
    methods: {
        testhashReq(){
                console.log(location.hash)
                location.hash='#/testRouterMode'
            },
        compile(){
            let res = vue.compile('<div><span>{{ msg }}</span></div>')
            console.log(res,"res")
            let ans = new vue({
                data:{
                    msg:"hello"
                },
                render:res.render,
                staticRenderFns: res.staticRenderFns
            })
            console.log(ans)
        }
    }
}
</script>