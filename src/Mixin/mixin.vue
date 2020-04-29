<template>
<div>
    <h1>{{msg}}</h1>
    <p>该API通过修改Vue.options属性，进而影响对
        应的vue实例。
    </p>
<button @click="mixinfunc">mixinfunc</button>
</div>
</template>

<script>
const myMixin = {
    created () {
        this.mixinfunc();
    },
    methods: {
        mixinfunc(){
            console.log("mixin的使用")
        }
    }
};
export default{
    mixins:[myMixin],
    name:'mixins',
    data () {
        return {
            msg:"Mixin"
        }
    }
}

</script>


<style scoped>


</style>


