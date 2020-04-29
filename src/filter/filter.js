
export default {
    filters:{
        filterA:function(value){
            console.log(value,"filterA的第一个参数")
            return value + "林"
        },
        filterB:function (val,params) {
            console.log(val,params,"filterB的参数")
            return val + params
        },
        filterC:function (val1,val2,val3) {
            console.log(val1,val2,val3,"filterC的参数")
            return val1+val2+val3
        }
    }
}