

const fs = require('fs')
const http = require('http')






//文件的根文件夹
const root = __dirname
//移除文件的函数
function removeFile(fielname){
    fs.unlink(fielname,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('删除文件成功')
        }
    })
}
//removeFile('test.txt')
//为文件重命名
function renameFile(oldfile,newfile){
    fs.rename(oldfile,newfile,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('重命名完成')
        }
    })
}
//renameFile('test.mp4','renameTest.mp4')
//异步操作获取文件的属性
function renameFileSync(fielname){
    fs.stat(fielname,(err,stats)=>{
        if(err){
            console.log(err)
        }else{
            let val = JSON.stringify(stats)
            let resVal = JSON.parse(val)
            console.log('文件属性--文件的大小:'+resVal.size);
        }
    })
}
//renameFileSync('renameTest.mp4')


//试想在进行文件操作的过程中，如果你需要修改文件名，然后又需要读取
//文件的属性,n那么就得确保该代码的正常执行：在修改前读取属性，还是在修改后读取属性
//renameFileSync(fielname)
//renameFile(oldfile,newfile)

//如要进行正常的操作，移动fs.stat到fs.rename操作的回调中即可
function changefileNameAndGetFileProperty(oldfileName,newfileName){
    fs.rename(oldfileName,newfileName,(err)=>{
        if(err){
            console.log(err)
        }else{
            fs.stat(newfileName,(err,stats)=>{
                if(err){
                    console.log(err)
                }else{
                    let fileProperty = JSON.stringify(stats)
                    let res = JSON.parse(fileProperty)
                    let fileSize = res.size
                    console.log("文件属性--文件大小:"+fileSize)
                }
            })
        }
    })
}

//打开文件
function openFile(filename){
    fs.open(filename,'r',(err,fd)=>{
        if(err) console.log(err);
        fs.close(fd,(err)=>{
            if(err) console.log(err);
        })
    })
}
//openFile('test.txt')



function openFileByUrl(url){
    const fileUrl = new URL(url)
    let fileContent = fs.readFileSync(fileUrl)
    return fileContent
    
}
//发送文件到客户端
function fileSendToClient(){
    http.createServer((req,res)=>{
        res.setHeader("Access-Control-Allow-Origin","*")
        let fileContent = openFileByUrl('file:///F:/note/noteOfVue/src/note/nodeVideo/test.txt')
        res.end(fileContent)
    }).listen(8000,()=>{
        console.log('8000端口可监听')
    })
}
//表示目录流的类
async function print(path) {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
      console.log(dirent.name);
    }
  }
  //print('./').catch(console.error);
// fileoprations.js
// index.html
// renameTest.mp4
// service.js
// test.txt

// function Foo(){
//     getname = function(){console.log(1)}
//     return this
// }
// Foo.getname = function(){
//     console.log(2)
// }

// Foo.prototype.getname=function(){
//     console.log(3)
// }
// var getname = function(){
//     console.log(4)
// }
// function getname(){
//     console.log(5)
// }
// Foo.getname()//2 ok
// getname()//4
// //Foo().getname()
// getname()//4
// new Foo.getname()//2
// new Foo().getname()/3
// new new Foo().getname()//3
// console.log(this)

// function test(name){
//     this.name=name
//     return {
//         age:16
//     }
// }
// let res = new test('xialin')
// console.log(res)
// console.log(new test('linyuan'))















