var isValid = function(s) {
    let m = {
        '(':']',
        '{':')',
        '[':']'
    }
    let stack = []
    for(let i=0;i<s.length;i++){
        if(m[s[i]]){
            stack.push(s[i])
        }else if(m[stack.pop()]!=s[i]){
            return false
        }
    }
    return stack.length==0
    
};
let ans = isValid("{[]}")
console.log(ans)