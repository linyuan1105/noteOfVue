<template>
    <div>
        {{data}}
    </div>
</template>
<script>
    export default{
        data(){
            return{
                data:1
            }
        },
        mounted () {
            this.myvue.$on('eventone',val=>{
                console.log(this.data,val)
            })
        },
        destroyed () {
            this.myvue.$off('eventone')
            console.log("hellow destroyed")
        }
    }
</script>
<style></style>


