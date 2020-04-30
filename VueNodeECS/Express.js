const http = require('http');
const fs = require('fs')
//用于获取url参数的模块
var url = require("url");
var querystring = require("querystring");




const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    });
  // req 是一个 http.IncomingMessage 实例，它是可读流。
  // res 是一个 http.ServerResponse 实例，它是可写流。

  let body = '',
  post = '';
  // 接收数据为 utf8 字符串，
  // 如果没有设置字符编码，则会接收到 Buffer 对象。
  req.setEncoding('utf8');

  // 如果添加了监听器，则可读流会触发 'data' 事件。
  req.on('data', (chunk) => {
    body += chunk;
    console.log(body)
  });

  // 'end' 事件表明整个请求体已被接收。 
  req.on('end', () => {
    try {
      //get请求的结果
        let arg = url.parse(req.url).query
        // console.log(req)
      //post请求的结果
      post = querystring.parse(post)



      const data = JSON.parse(body);
      // 响应信息给用户。
      res.write('arg:'+arg+';'
      +'post:'+post);
      res.end();
    } catch (er) {
      // json 解析失败。
      res.statusCode = 400;
      return res.end(`错误: ${er.message}`);
    }
  });
});

server.listen(1234);

// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"
// 错误: Unexpected token o in JSON at position 1