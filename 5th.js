const obj={
name:'john',

sayhello:function(){
setTimeout(() => {
    console.log(`hello,${this.name}`)
}, 1000);

}

}

obj.sayhello();





// const obj={
//     name:'john',
    
//     sayhello:()=>{
   
//         console.log(`hello,${this.name}`)
    
    
//     }
    
//     }
    
//     obj.sayhello();





// const obj={
//     name:'john',
    
//     sayhello:function(){
   
//         console.log(`hello,${this.name}`)
    
    
//     }
    
//     }
    
//     obj.sayhello();




// const obj={
// name:'john',

// sayhello:function(){
// setTimeout(function()  {
//     console.log(`hello,${this.name}`)
// }, 1000);

// }

// }

// obj.sayhello();