<template>
    <div>
        <button @click="changeData">changeData</button><br/>
        <todo-list :todos="todos">
          <template slot-scope="slotProps">
              <button @click="changetodoListData(slotProps)">changetodoListData</button><br/>
              {{slotProps.todos.name}}<br/>
              {{slotProps.todos.count}}<br/>
          </template>
        </todo-list>
    </div>
    
  </template>
   
  <script>
  import todoList from './todoList'
  export default {
      mounted () {
        //   this.$set(this.todos, 'name', 'linyuan')
      },
    data () {
      return {
        todos: {
            name:'linyuan',
            count:19
        }
      }
    },
    methods: {
        changetodoListData(params){
            this.todos.count++
            // this.$forceUpdate()
        },
        changeData(){
            this.todos.count++
        }  
    },
    components: {
      todoList
    },
   
  }
  </script>