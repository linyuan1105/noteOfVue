<template>
    <div class="mixins">
      <span>{{msg}}</span>
      <button @click="hello">hello</button>
    </div>
  </template>
  
  <script>
    const myMixin = {
      created(){
        this.hello();
      },
      methods: {
        hello(){
            console.log(this.msg)
        }
      }
    };
    export default {
      mixins: [myMixin],
      name: 'mixins',
      data () {
        return {
          msg: 'mixin',
  
        }
      }
    }
  </script>