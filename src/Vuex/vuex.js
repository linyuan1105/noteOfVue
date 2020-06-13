export default{
    //一般用来保存待维护的数据
    state: {
        dataArray:[
            {
                place:'京城',
                Dynasties:'唐朝'
            },
            {
                place:'燕山',
                Dynasties:'北宋'
            },
            {
                place:'中都',
                Dynasties:'金国'
            },
            {
                place:'大都',
                Dynasties:'元朝'
            }
        ],
        count:1,
        name:'Hellow VUEX'
    },
    getters: {
        getDynasties:state=>{
            console.log('getters',state)
            state.dataArray.map(item=>{
                item.Dynasties ="源于"+ item.Dynasties
            })
            return [1,2,5,6,3]
        },
        testGetters:function(state){
            let res = []
            state.dataArray.filter(item=>{
               if( item.Dynasties == '元朝'){
                res.push(item)
               }
            })
            return res
        }
    },
    mutations: {
        edit3(state){
            let p = new Promise(res=>{
                res('3333')
            })
          return  p.then(val=>{
                console.log(val)
            })
            
        },
        edit4(state){
                console.log(444)
        },
        edit(state){
                console.log('0000')
            
        },
        another(state,payload){
            state.name = "another"
            console.log(payload)
        }
    },
    actions: {
        edit1(context){
            debugger
                console.log(11111)
            context.commit('edit')
            
        },
        edit2(context){
                    console.log(222222222)
                  
            
        }
    }

}