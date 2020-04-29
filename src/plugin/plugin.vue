<template>
    <div>
        <h1>{{plugin}}</h1>
        <button @click="viewMyPlugin">viewMyPlugin</button>
    </div>
</template>

<script>
    export default{
        data () {
            return {
                plugin:"plugin"
            }
        },
        methods: {
            viewMyPlugin(){
                this.func()
                this.mydispatch('getFirstInfo','lin','yuan')
            }
        }
    }
</script>



