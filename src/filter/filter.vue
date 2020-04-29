<template>
    <div>
        <div>
            {{filter}}
        </div>
        <div>{{'yuan'|filterA}}</div>
        <div>{{'yuan'|filterB("参数")}}</div>
        <div>{{'yuan'|filterC("参数1","参数2")}}</div>
        <h3> 打开控制台，打开源码即可查看</h3>
        <p>注意过滤器的使用方式，以对象传入</p>
    </div>
    
</template>

<script>
import filtersmy from './filter.js'
//filter是一个对象传入，可以依次传入，也可以一次性全部传入
let filter = filtersmy.filters
let filterA = filtersmy.filters.filterA
let filterB = filtersmy.filters.filterB
let filterC = filtersmy.filters.filterC
// console.log(filter)
console.log(filtersmy)
export default{
    filters:filter,
    data () {
        return {
            filter:"filter功能"
        }
    }
}
</script>



