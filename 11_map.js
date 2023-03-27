let arr = [12, 34, 45, 48]

//foreach loop is used to perform opration array 
arr.forEach((value) => {
    console.log(value + 5)
})

// map is return new array form existing array
let arr1 = arr.map((value) => {
    return value + 2
})
console.log(arr1)

//filter 

let arr2 = arr.filter((value) => {
    return value < 35
})
console.log(arr2)

//reduce it return value 

let arr3 = arr.reduce((v1, v2) => {
    return v1 + v2
})
console.log(arr3)
