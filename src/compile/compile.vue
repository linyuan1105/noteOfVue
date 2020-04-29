<template>
 <div>
     <button @click="compile">compile</button>
 </div>
</template>

<script>
    import vue from 'vue'
export default{
    methods: {
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