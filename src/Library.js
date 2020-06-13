console.log(111)
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('want to sleep~');
        }, second);
    })
}

async function errorDemo() {
    let result = await sleep(1000);
    console.log(result);
}

// 为了处理Promise.reject 的情况我们应该将代码块用 try catch 包裹一下
async function errorDemoSuper() {
    try {
        let result = await sleep(1000);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

errorDemoSuper();// want to sleep~
// 有了 try catch 之后我们就能够拿到 Promise.reject 回来的数据了。