<template>
  <div>
    <div class="right">
          <el-upload
          action="http://localhost:88/imgUpload?pathname=imgUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        {{show}}
        {{name}}
        {{firstName}
        <div>{{person.name}}：{{person.age}}</div>
        <button @click="set">set</button>
        <button @click="changeName">changeName</button>
        <button @click="deleteage">deleteage</button>
        <button @click="setAgeAgain">setAgeAgain</button>
        <button @click="showBtn">showBtn</button>
        <myTest v-if="show"></myTest>
        <myTest v-if="show"></myTest>
        <myTest v-if="show"></myTest> <br/>
    </div>
    
    <div class="record">
      <router-link to="emitOff">查看$off的用法和作用</router-link>
      <router-link to="$mount">查看$mount的用法</router-link>
      <router-link to="forceUpdate">查看forceUpdate的用法</router-link>
      <router-link to="nextTick">查看nextTcik的用法</router-link>
      <router-link to="destroy">查看destroy和beforeDestroy的作用</router-link>
      <router-link to="extend">查看extend的作用</router-link><
      <router-link to="directive">查看directive的作用</router-link>
      <router-link to="filter">查看filter的作用</router-link>
      <router-link to="plugin">查看plugin的作用</router-link>
      <router-link to="myvuex">查看vuex的用法</router-link>
      <router-link to="mixin">查看mixin的用法</router-link>
      <router-link to="compile">查看compile的用法</router-link>
      <router-link to="slot_scope">查看slot_scope的用法</router-link>
      <router-link to="parent">查看路由嵌套的使用</router-link>
      <router-link to="home">查看element项目</router-link>
      <router-link to="compvswatch">计算属性VS侦听属性</router-link>
      <router-link to="fail?pp=100&sdsd=dsds">fail</router-link>
      <router-link to="element">查看element的table项目</router-link>
      <router-link to="testRouterMode">testRouterMode</router-link>
      <router-link to="es6component">es6component</router-link>
      <router-link to="dynicrouter">dynicrouter</router-link>
      <router-link to="VUE_CODE">VUE_CODE</router-link>
      <a href="https://www.runoob.com/w3cnote/css-position-static-relative-absolute-fixed.html">position基础</a>
    </div>
    
    
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
    console.log(this.$router)
    console.log(this.$route)


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
        dialogImageUrl: '',
        dialogVisible: false,
          nums:1,
          show:false,
          person:{
            name:'xiaoming',
            age:'18'
          },
          firstName: 'Foo',
          lastName: 'Bar',
          fullName: 'Foo Bar'
      }
  },
  computed: {
    name(){
      return this.show+'11111111111111'
    }
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            console.log(file.url)
            let bloburl = URL.createObjectURL(new Blob())
            console.log(bloburl,'bloburl')
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
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
.file-box {
    position: relative;
    display: inline-block;
}
.file-box img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: -30px;
    left: 0;
    display: inline-block;
    border: none;
}
.file-box .txt,.file-box .file {
    width: 70px;
    height: 36px;
    position: absolute;
    top: -20px;
    left: 100px;
    text-align: center;
}
.record{
  position: absolute;
  left: 400px;
  top: 50px;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: gray;
  overflow-y: scroll;

}
a{
  float: left;
  width: 150px;
  height: 50px;
  background-color:green;
  color: white;
  margin: 5px;
  overflow: hidden;
}
.right{
  position: absolute;
  right: 50px;
  top: 50px;
}
</style>
