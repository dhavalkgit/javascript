let p1 = new Promise((resolve,reject)=>{
    console.log("promise 1 is called")
    resolve(true)
})

p1.then((value)=>{
    console.log("promise 1 is completed")
    let p2=new Promise((resolve,reject)=>{
        console.log("promise 2 is called")
        resolve(true)
    })
    return p2
}).then((value)=>{
    console.log("Promise 2 is completed")
    return 2 // it converted in promise 
}).then((value)=>{
    console.log("we are done")
})