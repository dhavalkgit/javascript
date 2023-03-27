console.log("Array Example in JavaScript")

let arr = [1, 2, 3, 4, "Not"]  // you can store diffrent type of value in array
console.log(arr)
console.log(arr.length)
arr[5] = 6
console.log(arr)

// Array methods

let b = arr.toString()
console.log(b) // convert array into string 

let c = arr.join("/")
console.log(c)  // join array element by provided element 

arr.pop()   // remove last element from array
console.log(arr)

arr.push(10) // push elemetn into last
console.log(arr)

let d = arr.shift()  // remove element from begin
console.log(d, arr)

arr.unshift(9)  // insert element at begin 
console.log(arr)

delete arr[0]  // delete perticuler element from array
console.log(arr)  // array lenght not modify 

let arr1=[1,2,3]
let arr2=[4,5,6]

let arr3=arr1.concat(arr2)
console.log(arr3)

arr.sort()  // it sort alphabeticaly 
console.log(arr)

let compare = (a,b)=>{
    return a-b
}

let arr4 = [1,5,2,4,0,-1]
arr4.sort(compare)
console.log(arr4)

for (let ele in arr4){
    console.log(arr4[ele])
}

for (let ele of arr4){
    console.log(ele)
}