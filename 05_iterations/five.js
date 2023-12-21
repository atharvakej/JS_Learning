const coding = ["Js", "php", "disco"];
// coding.forEach( function (item){
//     console.log(item);
// })

function printme(item) {
  console.log(item);
}

//coding.forEach(printme)

// coding.forEach((item,ind,ar)=>{
//     console.log(item,ind,ar)
// })

const arr = [
  {
    languagename: "JavaScript",
    syntax: "js",
  },
  {
    languagename: "Java",
    syntax: "java",
  },
  {
    languagename: "Python",
    syntax: "py",
  },
];

arr.forEach((item) => {
  console.log(item.syntax);
});
