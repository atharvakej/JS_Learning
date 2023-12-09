const arr = ["a","c","b","r"]

const temp = ["assa", "asasasa" , "ewe"]

//arr.push(temp);
console.log(arr)
console.log(arr[3])
const ans = arr.concat(temp);
console.log(ans);

// using spread opearator-- mostly used

console.log(...arr, ...temp)

// flatting a array

const aray = [1,2, [12,23], [1212,[333,[233,232]]]];
const another = aray.flat(Infinity) // depth batani hoti hai
const anotherone = aray.flat(2) // depth batani hoti hai
console.log(another)
console.log(anotherone)

// c