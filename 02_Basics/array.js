const arr = [1,2,3]
console.log(arr[0])

// array methods
arr.push(43)
console.log(arr)

arr.unshift(999);
console.log(arr);
arr.shift();
arr.shift();
console.log(arr);

// includes search

console.log(arr.includes(3));

//converts to string

const newarr = arr.join();
console.log(newarr);
console.log(typeof newarr);

// splice and slice in js
console.log("Now splice and slice things \n")
const array = [1,2,3,5,6,7,8]
console.log("A " , array);

console.log(array.slice(1,3)); // 1-2 included
console.log("B ", array)

console.log(array.splice(1,3)); // 1-2-3 included and change in 
// original array
console.log("C ", array);


