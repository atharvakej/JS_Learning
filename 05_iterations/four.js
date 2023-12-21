const myobj={
    js : "JavaScript",
    cpp: "C++",
    rb : "Ruby"
}

for (const key in myobj) {
    console.log(`${key} is short for ${myobj[key]}`);
}
 
const arr = ["ab", "abc", "disco"]
for (const key in arr) {
    console.log(key);
}