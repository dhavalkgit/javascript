// Primitives data type is 
// null numner string symbol boolean bigint undefine 
let a = null
let b = 12
let c = "dhaval"
let d = Symbol("I am dhaval")
let e = true
let f = BigInt(567)
let g = undefined
console.log(a,b,c,d,e,f,g)

// non primitives data type
// object is key value pair

const item ={
    "dhaval" : 24,
    "rahul" : 25,
    "lovepreet" : 29,
}
console.log(item)

// here item is constant but we can still add content inside object because item is reference to object 
// but we can not do 'item = 10' it give error 
item["narayan"] = 29
console.log(item)