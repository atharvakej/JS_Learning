// signleton
//const tinderuser = new Object();
// this is a singleton object




const tinderuser1 = {};
console.log(tinderuser)
console.log(tinderuser1)

const mysym = Symbol("key1");

// object 
const Jsuser = {
  [mysym]: "mykey1",
  name: "AKJ",
  email: "atharvakjnitb@gmail.com",
  islogged: false,
  location: "DOS",
};
console.log(Jsuser.email);
console.log(Jsuser["email"]);

//for symbol use [] -- line 5
console.log(Jsuser[mysym]);
console.log(typeof Jsuser[mysym]);

Jsuser.email = "akj@gmail.com";
console.log(Jsuser.email);
//Object.freeze(Jsuser);

Jsuser.email = "bhagsale";

console.log(Jsuser); // email didnt changed after freezing

Jsuser.greeting = function () {
  console.log("Hello JS USer");
};
Jsuser.greetingtwo = function () {
  console.log(`Hello JS User ${this.name}`);
};

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
