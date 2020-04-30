// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import mystore from '@/Vuex/vuex.js'
import testApp from './testApp'
import myPlugin from '@/plugin/myPlugin.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import library from './Library.js'
import Router from 'vue-router'
console.log(library)
//我猜想的vuex实现思路，
//首先由于事件有promise，所以猜测会使用一个vue实例作为一个bus总线
//结合emit和on建立发布订阅的事件模型
//将其注册到vue的原型链上即可使用
//再查看了vuex的源码之后，其dispatch和commit与vue中的发布订阅模式异曲同工之妙。
//通过自己写简单的插件的方式
//总结如下：
//插件如同对象，有自己的方法和数据。通过传参的方式，使用插件来管理项目中的数据
//结合es6中的不同api可以实现自己的事件调用，参数传递
//vuex插件相对比较复杂，但是基本的写作原理是这样的。所以
Vue.use(myPlugin)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios,axios)
const store = new Vuex.Store(mystore)
Vue.prototype.func = function(){
  console.log("与插件类似的方法")
}

let myvue = new Vue()
// console.log(App)
//使用一个Bus总线来进行事件管理（vue实例）
Vue.prototype.myvue = myvue
Vue.config.productionTip = false
/*
对于第二种写法的原因：
在挂载元素之前我们可以进行一些必要的操作


第二种挂载  挂载在元素id名为app的元素中。也可以不挂载在app元素中，可直接使用router-link直接查看*/
let res = new Vue({
  el:'#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})





//第四种挂载的方式
/*
var options = {
  el:'#app',
  router,
  ...App
}
new Vue(options)
*/




//app实例渲染的第三种方式
/*使用render函数渲染组件*/
/*let res = new Vue({
  //挂载的元素
  el:'#app',
  //路由的配置
  router,
  //渲染的目标组件
  // components: { App },
  render:h=>h(App),
  //渲染目标组件的模板，目前的组件名和目标组件是一样的
  template: '<App/>'
})
*/





/* eslint-disable no-new */
//挂载的第一种写法
/*let res = new Vue({
  router,
  components: { App },
  template: '<App/>'
})*/
//三秒后再进行挂载
/*setTimeout(() => {
  res.$mount('#app')
}, 3000);*/





// console.log(res)
