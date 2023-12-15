// const user = {
//   username: "Atharva",
//   price: 999,

//   welcomemsg: function () {
//     console.log(`${this.username}, Welcome to the Website`);
//     console.log("This is this function\n", this);
//   },
// };

// user.welcomemsg();
// user.username = "Alternate";
// user.welcomemsg();

//console.log(this); // here it is empty but in console it will be window
// as the global environment there is window that is being opened

// inside the function this function does not work

function chai() {
  let username = "AKJ";
  console.log(this.username);
}
///chai();

// arrow functions
const chaio = (num1,num2) => ({username:"AKJ"})
//     username : "Ainf"
//   console.log("AKJ");
 

const func =()=>{
return username="AKJ"
}
console.log(chaio(3,4))
