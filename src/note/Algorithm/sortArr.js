//插入排序
//插入排序很像手里拿着扑克牌，然后我们从桌面摸取扑克牌
//将摸取的扑克牌在手中找到合适的位置，然后插入即可
//只需要比较后面两个
function insertSort(arr){
   
    //从第二个数开始，依次插入
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            let current = arr[i]
            let j =i-1
            //关键在此处，我们需要与之前的数据对比，并对之前的数据进行移位
            //以此来找到插入的地方
            while(j>=0&&current<arr[j]){
                arr[j+1]=arr[j]
                j--
            }
            arr[j+1]=current
        }
    }
    return arr
}
function bubbleSort(arr){
    for(let i =0;i<arr.length;i++){
        //在此处优化,将j<arr.length，改为了j<arr.length-1。
        //提取到数组中的每一个数据，，然后与所有的数据进行对比，找到交换位置，进行交换
        for(let j =0;j<arr.length-1;j++){
        //对两者的数据进行比较，比较厚再交换位置
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
        console.log(arr)
    }
    return arr
}

var adder = {
    base : 1,
      
    add : function(a) {
      var f = v => v + this.base;
      return f(a);
    },
  
    addThruCall: function(a) {
      var f = v => v + this.base;
      var b = {
        base : 2
      };
              
      return f.call(b, a);
    }
  };


  var arguments = [1, 2, 3];
  var arr = () => arguments[0];
  
  arr(); // 1
  
  function foo(n) {
    var f = () => arguments[0] + n; // 隐式绑定 foo 函数的 arguments 对象. arguments[0] 是 n,即传给foo函数的第一个参数
    return f();
  }
  let a = {
      name:"linyuan"
  }
  function writeName(){
      console.log(this.name)
  }

  //插入排序也很想像冒泡排序，找到最小值，然后最最靠前的一位进行交换
function selectSort(arr){
    if(arr.length==0||arr.length==1){
        return arr
    }else{
        let len = arr.length
        for(let i =0;i<len;i++){
            let min = arr[i]
            for(let j = i;j<len;j++){
                if(min>arr[j]){
                    let temp = arr[j]
                    arr[j] = min
                    min = temp
                }
            }
            arr[i] = min

        }
    }
    return arr
}

//归并排序
function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let mid = start + parseInt((end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
    let temp = [];
    let len = 0;
    let i = start, j = mid + 1;
    for (; i <= mid && j <= end;) {
        if (arr[i] > arr[j]) {
            temp[len++] = arr[j++];
        } else {
            temp[len++] = arr[i++];
        }
    }
    while (i <= mid) {
        temp[len++] = arr[i++];
    }
    while (j <= end) {
        temp[len++] = arr[j++];
    }
    for (let t = 0; t < len; t++) {
        arr[t + start] = temp[t];
    }
}

let arr0fmerge = [3,2,1];

 console.log(mergeSort(arr0fmerge , 0 , 4)) 
 console.log(arr0fmerge)
 