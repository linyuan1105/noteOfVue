//栈类  先进后出
class Stack{
    constructor(){
        this.items=[]
    }
    //入栈
    push(element){
        this.items.push(element)
    }
    //出栈
    pop(){
        return this.items.pop()
    }
    //末位
    peek(){
        return this.items[this.items.length-1]
    }
    //是否为空栈
    isEmpty(){
        return !this.items.length
    }
    //大小
    size(){
        return this.items.length
    }
    //清空栈
    clear(){
        this.items=[]
    }
    //打印栈数据
    print(){
        console.log(this.items.toString())
    }
}


//队列 先进先出
class Queue{
    constructor(items){
        this.items = items||[]
    }
    //入队
    inqueue(element){
        this.items.push(element)
    }
    //出队
    dequeue(){
        return this.items.shift()
    }
    //队头
    front(){
        return this.items[0]
    }
    //队尾
    end(){
        return this.items[this.items.length-1]
    }
    //大小
    size(){
        return this.items.length
    }
    //是否是空队列
    isEmpty(){
        return !this.items.length
    }
    //查看队列
    print(){
        console.log(this.items.toString())
    }
    //置空
    clear(){
        this.items=[]
    }
}

//优先队列
class PriorityQueue{
    constructor(items){
        this.items =items||[]
    }
    inqueue(element,priority){
        let queueelement = {element,priority}
        if(this.isEmpty){
            this.items.push(queueelement)
        }else{
            let preindex = this.items.findIndex(item=>{
                queueelement.priority<item.priority
            })
            if(preindex>-1){
                this.items.splice(preindex,0,queueelement)
            }else{
                this.items.push(queueelement)
            }
        }
    }
    //出队
    dequeue(){
        return this.items.shift()
    }
    //队头
    front(){
        return this.items[0]
    }
    //队尾
    end(){
        return this.items[this.items.length-1]
    }
    //大小
    size(){
        return this.items.length
    }
    //是否是空队列
    isEmpty(){
        return !this.items.length
    }
    //查看队列
    print(){
        this.items.map(item=>{
            console.log(item)
        })
    }
    //置空
    clear(){
        this.items=[]
    }

}
