const http = require('http')
const fs = require('fs')
const {stat} = require('fs').promises
const videopath = './renameTest.mp4' 


http.createServer((req,res)=>{
    if(req.url='./'){
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.end('<video src="/renameTest" width="500" controls="controls"></video>')
    }else if(req.url=='/video'){
       // fs.createReadStream(videopath).pipe(res)
    }
}).listen(3333,()=>{
    console.log('运行在3333')
})