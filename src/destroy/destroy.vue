<template>
  <div>
    <p>完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。</p>  
    <p>触发 beforeDestroy 和 destroyed 的钩子。</p>
    <div>
        {{tt}}
{{ooo}}
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
    </div>
    <div id="demo">{{ fullName }}</div>
    <button @click='handlechange'>handlechange</button>
  </div>

</template>
<script>
  export default {
    data() {
    return {
      firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',
      tt:100,
      question: '',
    answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  watch: {
    firstName: function (val) {
      console.log(val)
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    },
   'tt':function(val){
     this.tt+9000
   } 
  },
  computed: {
    ooo(){
      return this.tt+500
    }
  },
  methods: {
    handlechange(){
      this.firstName=6666
      this.lastName=15555
    }
  },
  }
  


</script>