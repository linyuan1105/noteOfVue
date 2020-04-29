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
        edit(state){
                state.name = 'jack'
            
        },
        another(state,payload){
            state.name = "another"
            console.log(payload)
        }
    },
    actions: {
        edit(context){
            return new Promise((res,rej)=>{
                setTimeout(() => {
                    console.log(context)
                    context.commit('edit')
                    res()
                }, 3000);
                
            })
            
        }
    }

}