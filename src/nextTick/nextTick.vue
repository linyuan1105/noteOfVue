<template>
    <div>
        <h1>nextTick</h1>
        <span class="test">{{egData}}</span>
        <button @click="changeData">changeData</button>
        <h5>点击按钮后虽然更新了数据，但是打印结果还是之前的旧数据。在使用nextTick之后就可以获取到这个更新后的数据</h5><br/>
        <h5>使用异步也可以获取到更新后的元素属性</h5>
        <br/>
        <p>对于$nextTick的作用：在元素数据更新之后。使用该方法可以操作更新后的元素。
            若不使用方法，在数据更新后，直接操作元素的话是不可行的。
        </p>

        <br/>
        <img src="../../static/nex.png" alt="">
        <p></p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                egData:'old Message'
            }
        },
        methods: {
            changeData(){
                this.egData = 'new Message'
                //数据更新后马上操作dom
                let ele = document.getElementsByClassName('test')
                console.log(ele[0].innerHTML,"在数据更新后但没有使用nextTick")
                //使用异步获取一下元素
                setTimeout(() => {
                    let ele3 = document.getElementsByClassName('test')
                    console.log(ele3[0].innerHTML,"在数据更新后使用异步获取元素数据")
                }, 0);
                this.$nextTick(function(){
                let ele2 = document.getElementsByClassName('test')
                console.log(ele2[0].innerHTML,"在数据更新后但使用nextTick")
                })
            }
        }
    }
</script>


