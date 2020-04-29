let Vuedirective = {
  //bind和inserted
  //共同点:dom插入都会调用
  //不同点：bind时父节点为空 可能原因是bind是还没有进行绘制
  /*       inserted时父节点存在
           bind是在dom树绘制前调用，inserted在dom树绘制后调用
           inseted会调用多次，而inserted会多次调用
  */
    bind:function(el,binding,vnode){
        // console.log(el,binding,vnode)
        let dom = document.getElementById('dom')
        console.log(dom,"dom测试bind")
        el.style["color"] = binding.value
    },
    inserted:function(el,binding,vnode){
      el.addEventListener('mouseover',(event)=>{
        el.style.color = 'black'
        let dom = document.getElementById('dom')
        console.log(dom,"dom测试inserted")
        // console.log(event,"event")
      })
      el.addEventListener('mousemove',(event)=>{
        
      })
    },
    //组件更新，会触发update和componentUpdate
    //update会在component之前调用
    update:function(el,binding,vnode,oldVnode) {
      console.log(el,"update")
    },
    componentUpdated: function(el,binding,vnode) {
      console.log(el,"componentUpdated")
    },
    //在指令解绑时调用
    unbind:function(el,binding,vnode) {

    }

  }
export default Vuedirective