<template>
    <div>
        <button @click="asyncEvent">asyncEvent</button>
        <h1>awit异步请求</h1>
        <p>async表示异步的方法，必须有一个返回值
            。类似promise.resolve()
        </p>

    </div>
</template>
<script>
    export default{
        data() {
            return {
                
            }
        },
        methods: {
            asyncEvent(){
              this.f2().then(val=>{
                  console.log(val)
              })
            },
            f1(){
               return 11111
            },
            async f2(){
                setTimeout(() => {
                    return 2222
                }, 2000);
            }
        },
    }
</script>