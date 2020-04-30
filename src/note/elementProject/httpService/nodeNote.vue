<template>
    <div>
        <h1>node菜鸟</h1>
        <p>结果：{{msg}}</p>
        <button @click="request">request</button>

    </div>
    
</template>
<script>
    export default{
        data () {
            return {
                msg:''
            }
        },
        methods: {
            request(){
                this.axios.get('http://127.0.0.1:1234/').then(res=>{
                    this.msg = res.data
                })
            }
        }
    }
</script>