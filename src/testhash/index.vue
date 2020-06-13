<template>
    <div>
        <h1>路由模式测试{{name}}</h1>
        <button @click="testhashReq">testhashReq</button>
        <button @click="xhr">xhr</button>
        <testcomponent :nameprop="myname"></testcomponent>
        <button @click="vuextest">vuextest</button>
    </div>
</template>
<script>
    import testcomponent from '../components/test/testcomponent.vue'
    function callback(val){
        console.log('jsonp成功')
        console.log(val)
        return val
    }
    export default{
        components:{testcomponent:testcomponent},
        data() {
            return {
                myname:'fail',
                name:'linyuan'
            }
        },
        created() {
            this.testmode()
            console.log(this,'this')
           
        },
        methods: {
           async vuextest(){
               let that = this;
               
               this.$store.dispatch('edit1');
            //   await  this.$store.dispatch('edit2');
            //    await this.$store.commit('edit3');
            //     this.$store.commit('edit');
            //    this.$store.commit('edit4');
             
            },
            xhr(){
        let cookie= document.cookie
        console.log(cookie)
        let myxhr = new XMLHttpRequest()
        myxhr.open('get','http://localhost:3000/')
         myxhr.setRequestHeader('Accept','image/webp,image/apng')
         myxhr.setRequestHeader('range','bytes=4000-')
        myxhr.send(null)
    },
            testhashReq(){
                console.log(location.hash)
                location.hash='#/compile'
            },
            testmode(){
                let url = "http://localhost:8888/callback.js/#!/name=4555"
                // 创建script标签，设置其属性
                let script = document.createElement('script');
                script.setAttribute('src', url);
                // 把script标签加入head，此时调用开始
                document.getElementsByTagName('head')[0].appendChild(script);
                window.callback = callback
            },
            callback(val){
                console.log('jsonp成功')
                console.log(val)
                return val
            }
            
        }
    }
</script>