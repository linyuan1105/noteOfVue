<template>
    <div>
     <router-view></router-view>
     
     <template>
        <div>
            <router-view name='bar'></router-view>
            <button @click='routerevent'>routerevent</button>
        </div>
    </template>
    </div>
    
</template>
<script>
    export default{
        props:{

        },
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