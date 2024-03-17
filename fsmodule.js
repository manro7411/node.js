const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('/Users/sleanz/Desktop/Desktop - MacBook Pro ของRatchanon/node.js/content/subfolder/test2.txt','utf8')
const second = readFileSync('/Users/sleanz/Desktop/Desktop - MacBook Pro ของRatchanon/node.js/content/subfolder/test2.txt','utf8')

console.log(first,second);
writeFileSync('/Users/sleanz/Desktop/Desktop - MacBook Pro ของRatchanon/node.js/content/subfolder/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag: 'a'})

const {readFile,writeFile} = require('fs')

readFile('/Users/sleanz/Desktop/Desktop - MacBook Pro ของRatchanon/node.js/content/subfolder/test2.txt','utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('/Users/sleanz/Desktop/Desktop - MacBook Pro ของRatchanon/node.js/content/subfolder/testing.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile('/Users/sleanz/Desktop/Desktop - MacBook Pro ของRatchanon/node.js/content/subfolder/result-sync.txt',`Here is the result : ${first}, ${second}`,(err,result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})