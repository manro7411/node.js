// CommonJS, every file is module (by default)
// Modules - encapsulation code (Only share minimum)
// const amount = require('./global')
// if (amount < 10) {
//     console.log('small number')
// }else{
//     console.log('large number')
// }

// console.log(`it's my first application!`)

// console.log(__dirname);
// setTimeout(() => {
//     console.log("Hello world");
    
// }, 1000);
// //modules 
// sayHi=(name)=>{
//     console.log(`Hello : ${name}`);
// }
// sayHi("Ratchanon Traitiprat")
// const data = require('./alternative')
// console.log(data);
// require('./mind-grenade')
const http = require('http')
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welocome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Welcome</h1>
    <p>Ratchanon Traitiprat</p>
    
    `)
})
server.listen(4000)