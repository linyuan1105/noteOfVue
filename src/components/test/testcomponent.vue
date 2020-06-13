<template>
    <div>
        {{nameprop}}
        testcomponent
    </div>
</template>


<script>
    export default{
        props:{
            nameprop: {
                type: String,
                required: false,
                default: () => ''
            }
        },
        data() {
            return {
                name:'component'
            }
        },
    }
</script>