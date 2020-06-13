<template>
    <div>
     <router-view></router-view>
     
     <foo></foo>
     <template>
        <div>
            <router-view name='bar'></router-view>
            <button @click='routerevent'></button>
        </div>
    </template>
    </div>
    
</template>
<script>
    export default{
        created() {
            console.log(this,'this')
            console.log(this.$route)
        },
        methods: {
            routerevent(){
                console.log(this.$route)
            }
        },
    }
</script>