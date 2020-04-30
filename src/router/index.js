import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EmitOff from '@/emitAndOff/emitAndOffFunc.vue'
import mountComponent from '@/$mount/$mount.vue'
import forceUpdate from '@/forceUpdate/forceUpdate'
import nextTick from '@/nextTick/nextTick'
import destroy from '@/destroy/destroy'
import extend from '@/VueExtend/extend'
import directive from '@/directive/directive'
import filter from '@/filter/filter.vue'
import plugin from '@/plugin/plugin.vue'
import myvuex from '@/Vuex/vuex.vue'
import mixin from '@/Mixin/mixin.vue'
import compile from '@/compile/compile.vue'
import slot_scope from '@/slot-scope/slot-scope.vue'
import parent from '@/note/parent/parent.vue'
import childrenA from '@/note/children/childrenA.vue'
import childrenB from '@/note/children/childrenB.vue'
//element项目的组件
import home from '@/note/elementProject/home/home.vue'
import componentA from '@/note/elementProject/component/componentA.vue'
import slot from '@/note/elementProject/component/slot.vue'
import httpService from '@/note/elementProject/httpService/httpService.vue'
import nodeNote from '@/note/elementProject/httpService/nodeNote.vue'
import Algorithm from '@/note/Algorithm/Algorithm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
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
    }

  ]
})
