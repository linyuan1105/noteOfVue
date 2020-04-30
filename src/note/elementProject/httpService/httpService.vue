<template>
    <div>
        <el-row>
            <h1>{{msg}}</h1>
            <p>服务器返回信息:{{getInfo}}</p>
        </el-row>
        <el-row>
            <button @click="sendRequest">sendRequest</button><br/>
            <button @click="postMethod">postMethod</button><br/>
        </el-row>
        <el-row></el-row>
        
    </div>
</template>
<script>
    export default {
        data () {
        return {
            msg:'httpserVice',
            getInfo:''
            }
        },
        methods: {
            sendRequest(){
                this.axios.get('http://127.0.0.1:1234/?method=get').then(res=>{
                    this.getInfo = res.data
                    console.log(res)
                })
            },
            postMethod(){
                this.axios.post('http://127.0.0.1:3000/')
                .then(res=>{
                    this.getInfo = res.data
                })
            }
        }
    }
</script>


