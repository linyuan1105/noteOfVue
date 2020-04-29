<template>
    <div>
        <div id="dom"></div>
        <h1 v-directives="color">{{directive}}</h1>
        <p>{{message}}</p><br/>
        <div >指令的效果</div>
        <button @click="changeComponent">changeComponent</button>
        <testComponent v-directives="color"></testComponent>
        
    </div>
</template>
<script>
import directives from './directives.js';

import testComponent from './testComponent'

console.log(directives)
export default{
    directives:{directives},
    components: {
        testComponent
    },
    data () {
        return {
            directive:"directive",
            message:"数据",
            color : "yellow"
        }
    },
    methods: {
        changeComponent(){
            this.directive="changeComponent"
        }
    }
}
</script>


