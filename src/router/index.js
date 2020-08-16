import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EmitOff from '@/emitAndOff/emitAndOffFunc.vue'
import mountComponent from '@/$mount/$mount.vue'
const forceUpdate = ()=>import('@/forceUpdate/forceUpdate')
const nextTick=()=>import('@/nextTick/nextTick')  
const destroy =()=>import('@/destroy/destroy')
const extend =()=>import ('@/VueExtend/extend')
const directive=()=>import ('@/directive/directive')
const filter =()=>import ('@/filter/filter.vue')
const plugin =()=>import ( '@/plugin/plugin.vue')
const myvuex =()=>import ( '@/Vuex/vuex.vue')
const mixin =()=>import ( '@/Mixin/mixin.vue')
const element =()=>import ( '@/element/index.vue')
const compile =()=>import ( '@/compile/compile.vue')
const slot_scope =()=>import ( '@/slot-scope/slot-scope.vue')
const parent =()=>import ( '@/note/parent/parent.vue')
const childrenA =()=>import ( '@/note/children/childrenA.vue')
const childrenB =()=>import ( '@/note/children/childrenB.vue')
const es6component =()=>import ( '@/es6/es6_index.vue')
const VUE_CODE =()=>import ( '@/VUE_CODE/index.vue')
const dynicroutercomponent = ()=>import('@/dynicrouter/index.vue')
//element项目的组件
const home =()=>import ( '@/note/elementProject/home/home.vue')
import componentA from '@/note/elementProject/component/componentA.vue'
import slot from '@/note/elementProject/component/slot.vue'
import httpService from '@/note/elementProject/httpService/httpService.vue'
import nodeNote from '@/note/elementProject/httpService/nodeNote.vue'
import Algorithm from '@/note/Algorithm/Algorithm.vue'
import awit from '@/note/awit/awit.vue'
import cascader from '@/components/cascader/cascader.vue'
import compvswatch from '@/compvaswatch/index.vue'
import fail from './fail.vue'
import foo from './foo.vue'
import bar from './bar.vue'
import defaultA from './default.vue'
import testRouterMode from '@/testhash/index.vue'
// console.log(compvswatch,1111111111111)
Vue.use(Router)

  let res = new Router({
  mode:'hash',
  routes: [
    {
      path: '/testRouterMode',
      name: 'testRouterMode',
      component: resolve=>(require(["@/testhash/index.vue"],resolve))
    },
    {
      path:'/VUE_CODE',
      name:'VUE_CODE',
      component:VUE_CODE
    },
    {
      path:'/fail',
      components:{
        default:defaultA,
        bar:bar,
        foo:foo
      },
      beforeEnter:(to,from,next)=>{
        console.log(to,'to')
        console.log(from,'from')
        next()
      }
    },
    {
      path: '/element',
      name: 'element',
      component: resolve=>(require(["@/element/index.vue"],resolve))
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        
        {
          path: 'compvswatch',
          name: 'compvswatch',
          component: compvswatch
        },
        {
          path: 'cascader',
          name: 'cascader',
          component: cascader
        },
        {
          path: 'awit',
          name: 'awit',
          component: awit
        },
        {
          path: 'Algorithm',
          name: 'Algorithm',
          component: Algorithm 
        },
        {
          path: 'nodeNote',
          name: 'nodeNote',
          component: nodeNote
        },
        {
          path: 'componentA',
          name: 'componentA',
          component: componentA
        },
        {
          path: 'slot',
          name: 'slot',
          component: slot
        },
        {
          path: 'httpService',
          name: 'httpService',
          component: httpService
        }
      ]
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent,
      children:[
        {
          path: 'childrenA',
          name: 'childrenA',
          component: childrenA
        },
        {
          path: 'childrenB',
          name: 'childrenB',
          component: childrenB
        }
      ]
    },
    {
      path: '/slot_scope',
      name: 'slot_scope',
      component: slot_scope
    },
    {
      path: '/compile',
      name: 'compile',
      component: compile
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: mixin
    },
    {
      path: '/myvuex',
      name: 'myVuex',
      component: myvuex
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/emitoff',
      name:'emitOff',
      component:EmitOff
    },
    {
      path:'/$mount',
      name:'$mount',
      component:mountComponent
    },
    {
      path:'/forceUpdate',
      name:'forceUpdate',
      component:forceUpdate
    },
    {
      path:'/nextTick',
      name:'nextTick',
      component:nextTick
    },
    {
      path:'/destroy',
      name:'destroy',
      component:destroy
    },
    {
      path:'/extend',
      name:'extend',
      component:extend
    },
    {
      path:'/directive',
      name:'directive',
      component:directive
    },
    {
      path:'/filter',
      name:'filter',
      component:filter
    },
    {
      path:'/plugin',
      name:'plugin',
      component:plugin 
    },
    {//ES6的知识点学习总结
      path:'/es6component',
      name:'es6component',
      component: es6component,
      children:[
        
      ]
    }

  ]
})
let dynicRouter = [ {
  
  path:'/dynicrouter',
  name:'dynicrouter',
  component: dynicroutercomponent

}]
res.addRoutes(dynicRouter)
export default res