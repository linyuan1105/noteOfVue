let myPlugin = {
    func1:{
        firstName :"lin",
        lastName  :"yuan"
    },
    func2:{
        place:"广州",
        provinces:"广东"
    },
    getFirstInfo:function(){
        console.log(this.func1.firstName+this.func1.lastName)
    },
    getNextInfo:function(param1,param2){
        console.log(param1+param2)
        console.log(this.func2.place+this.func2.provinces)
    },
    paramsVia:function(param1,param2){
        console.log(param1+param2)
    },
    //
    mydispatch:function(){
        let that = this
        let args = [...arguments]
        let event = args.slice(0,1)
        let arg = args.slice(1)
        console.log(event,arg)
        this.getNextInfo.apply(this,arg)

    },

    install:function(vue){
        console.log("插件开始安装")
        vue.prototype.func1 = this.func1
        vue.prototype.func2 = this.func2
        vue.prototype.getFirstInfo = this.getFirstInfo
        vue.prototype.getNextInfo = this.getNextInfo
        vue.prototype.mydispatch = this.mydispatch
        vue.prototype.paramsVia = this.paramsVia
    }
}
export default myPlugin