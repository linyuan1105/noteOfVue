<template>
  <div>
    <div>{{person.name}}：{{person.age}}</div>
    <button @click="set">set</button>
    <button @click="changeName">changeName</button>
    <button @click="deleteage">deleteage</button>
    <button @click="setAgeAgain">setAgeAgain</button>
    <button @click="showBtn">showBtn</button>
    <myTest v-if="show"></myTest>
    <myTest v-if="show"></myTest>
    <myTest v-if="show"></myTest> <br/>
    <router-link to="emitOff">查看$off的用法和作用</router-link><br/>
    <router-link to="$mount">查看$mount的用法</router-link><br/>
    <router-link to="forceUpdate">查看forceUpdate的用法</router-link><br/>
    <router-link to="nextTick">查看nextTcik的用法</router-link><br/>
    <router-link to="destroy">查看destroy和beforeDestroy的作用</router-link><br/>
    <router-link to="extend">查看extend的作用</router-link><br />
    <router-link to="directive">查看directive的作用</router-link><br/>
    <router-link to="filter">查看filter的作用</router-link><br/>
    <router-link to="plugin">查看plugin的作用</router-link><br/>
    <router-link to="myvuex">查看vuex的用法</router-link><br/>
    <router-link to="mixin">查看mixin的用法</router-link><br/>
    <router-link to="compile">查看compile的用法</router-link><br/>
    <router-link to="slot_scope">查看slot_scope的用法</router-link><br/>
  </div>
  
</template>

<script>
  import myTest from './mytest.vue'
export default {
  components: {
    myTest
  },
  created () {
    this.meth1()
  },
  mounted () {
    //使用on方式订阅事件
    this.myvue.$on('emit',arg=>{
      console.log(arg)
    })
    this.myvue.$once('once',arg=>{
      console.log(arg)
    })
    this.myvue.$off('off',this.set)
  },
  destroyed () {
    console.log('destroyed')
    this.myvue.$off('emit')
  },
  data(){
      return {
          nums:1,
          show:false,
          person:{
            name:'xiaoming',
            age:'18'
          }
      }
  },
  methods: {
    showBtn(){
      this.show = !this.show
    },
    meth1(){
      console.log('emit')
      this.myvue.$off('emit')
    },
    set(){
      //使用set方法建立数据，确保响应式
      this.$set(this.person,'name','linyuan')
      this.person.age--
      //使用emit方法发布事件
      console.log(this.myvue.$emit('emit','arg'))
    },
    changeName(){
      this.person.name = "xiaolin"
    },
    deleteage(){
      //使用delete方法删除数据
      this.$delete(this.person, 'age')
    },
    setAgeAgain(){
      this.$set(this.person,'age',1000)
    }
    
  }
}
</script>


<style   scoped>

</style>



