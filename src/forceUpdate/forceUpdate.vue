<template>
    <div>
        <h1>虽然没有找到需要使用forceUpdate的实例</h1><br/>
        <p>简单理解就是，当我们使用方法向添加数据的时候，可能会造成页面不会更新</p><br/>
        <p>所以一般在添加数据之后，还需要使用forceUpdate强制更新，才能是数据页面完全渲染</p>
        <input placeholder="请输入需要删除的序号" v-model="index">
        <p>对象数据：{{forceUpdateObj.name}}</p>
        <button @click = "changData">changData</button>
        <button @click="addData">addData</button>
        <div v-for="(item,index) in arrData">{{item}}</div>
    </div>
</template>
<script>

export default{
    data () {
        return {
            arrData:[
                1,2,3,4,5
            ],
            forceUpdateObj:{},
            index:''
        }
    },
    methods: {
        changData(){
            let index = this.index
            if(index !== ''&& index>0){
              this.arrData.splice(index,1)
            }
            
        },
        addData(){
            this.forceUpdateObj.name = "linyuan"
            let len = this.arrData.length
            this.arrData.push(len+1)
        }
    }
}

</script>
<style></style>
