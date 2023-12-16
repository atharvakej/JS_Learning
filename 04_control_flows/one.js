

// === checks type too STRICT EQUAL

// if(2=="2"){
//     console.log("Executed")
// }
// !== same but with type too


// shorthand notation

const balance = 1000
if(balance>500) console.log("Test"), // implicit scope
console.log("Test2"); 

// falsy values (those are false in if condition)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// 'false', "0", " " , [], {}, function(){}



// object empty check 

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("Object is empty")
}

//  null coalescing operator (??) : null and undefined
// security check for null and undefined values

let val 
val = 5 ??  10
let val1
val1 = null ?? 1010
console.log(val);
console.log(val1);