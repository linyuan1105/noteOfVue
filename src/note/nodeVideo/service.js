const http = require('http')
const fs = require('fs')
const stat = require('fs').promises
const videoPath = './test.mp4'
async function data(){
    
}

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    if(req.url=='/'){
        res.end(
            '<video src = "./test.mp4"  width="500" controls="controls"></video>'
        )
    }else if(req.url=='/video'){
        let range = req.headers('range')
        if(range){
            let stats = await stat.stat(videoPath);
            let r= range.match(/=(\d+)-(\d+)?/)
            let start = parseInt(r[1],10)
            let end = r2?parseInt(r[2],10):start+1024*1024;
            if(end>stat.size){}
            let hedad = {
                'Content-type':'video/mp4',
                'Content-range':'bytes ${start}-${end}/${stats.size}',
                'Content-Length':end-start+1,
                'Accept-Ranges':'bytes'
            }
            res.writeHead(200,hedad)
            fs.createReadStream(videoPath,{start:start,end:end},pipe(res))
        }else {
            fs.createReadStream(videoPath).pipe(res)
        }
    }
}).listen(3000,()=>{
    console.log('3000端口监听')
})




