const amount = 12
if (amount < 10) {
    console.log('small number')
}else{
    console.log('large number')
}

console.log(`it's my first application!`)

console.log(__dirname);
setInterval(() => {
    console.log("Hello world");
}, 1000);
//modules 
sayHi=(name)=>{
    console.log(`Hello world ${name}`);
}
sayHi("Ratchanon Traitiprat")