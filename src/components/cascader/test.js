// function* gen() { 
//     yield function(){
//         console.log(1)
//     };
//   var m =  yield 2;
//     yield 3*m;
//   }
  
//   let g = gen();
//   console.log(g.next().value())
//   console.log(g.next())
//   console.log(g.next())


//   function* fibonacci() {
//   var a = yield 1;
//   yield a * 2;
// }

// var it = fibonacci();
// console.log(it);          // "Generator {  }"
// console.log(it.next());   // 1
// console.log(it.send(10)); // 20
// console.log(it.close());  // undefined
// console.log(it.next());
function a(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("a")
            res("a success")
        },2000);
    })
}
function b(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("b")
        }, 2000);
      
    })
}

async function c(){
  let m = await a()
  console.log(m)
  await b()
}

c()
