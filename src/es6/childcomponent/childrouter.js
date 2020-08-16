const proxy = ()=>import('./proxy.vue') 
const module = ()=>import('./module.vue') 
const router = [
    {
      path:'proxy',
      name:'proxy',
      component:proxy
    },
    {
        path:'module',
        name:'module',
        component:module
    }
]
export default router