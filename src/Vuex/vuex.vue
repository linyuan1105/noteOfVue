<template>
    <div>
        <h1>{{content}}</h1>
        <div>{{count}}</div><br/>
        <div>{{$store.state.name}}</div>
        <button @click="getMyVuexData">getMyVuexData</button><br/>
        <div v-for="(item,index) in mydata">
            <h3>{{item.Dynasties}}：{{item.place}}</h3>
        </div>
        <button @click="funcGetters">通过getters的函数调用</button><br/>
        <button @click="changeData">gettersChangeData</button><br/>
        <button @click="changeCount">changeCount</button><br>
        <button @click="changeText">changeText</button>
        <h1>dispatch部分</h1>
        <button @click="actionDispatch">actionDispatch</button>
        <h1>关于action和mutation</h1><br/>
        <p>mutation可以让我们方便的对action进行异步封装</p>
        <p>如果在mutation中封装了异步回调。在大型项目中很难知道回调的执行次序。所以需要借助mutation</p>
    </div>
</template>

<script>
    export default {
        mounted () {
            this.count = this.$store.state.count
        },
        watch: {
            count:function(val1,val2){
                console.log(val1,val2)
                this.count = this.$store.state.count
                
            }
        },
        data () {
            return {
                content:"Vuex的使用",
                mydata:"",
                count:0
            }
        },
        methods: {
            getMyVuexData(){
                this.mydata = this.$store.state.dataArray
            },
            changeData(){
                this.$store.getters.getDynasties
            },
            funcGetters(){
                this.mydata = this.$store.getters.testGetters
                
            },
            changeCount(){
                this.$store.commit('edit')
                
            },
            changeText(){
                this.$store.commit({
                    type:'another',
                    payload:{
                        age:15,
                        sex:"男"
                    }
                })
            },
            actionDispatch(){
                this.$store.dispatch('edit').then(()=>{
                    console.log('dispatch异步')
                })
            }
        }
    }
</script>


