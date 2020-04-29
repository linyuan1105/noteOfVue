<template>
    <div id="app">
        <slot :todos="todos">
        </slot>
    </div>
  </template>
   
  <script>
  export default {
    props: {
      todos: {
        type: Object
      }
    },
    computed: {
      todoscount(){
          console.log(this.todos.count)
          return this.todos.count
      },
      todosname(){
          if(todoscount>10){
              console.log("todoscount大于10了")
          }
      }  
    },
    mounted () {
        console.log("子组件初始化")
        if(this.todos.count>5){
            console.log("count大于5了")
        }
        console.log(this.todos)
    }
  }
  </script>

  <style>
    #app{
    color: red;
    font-size: 50px;
    }
  </style>