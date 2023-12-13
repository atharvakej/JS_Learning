function saymyname() {
  console.log("AKJ");
}

saymyname; // only reference of a function not calling it
saymyname();

function add2n(num1, num2) {
  return num1 + num2;
  console.log(num1 + num2);
}
//console.log(add2n(3,4));

// strings

function userlogmsg(username="Minimal value") {
  if (username === undefined) {
     return "Please enter username"
  }
  return `${username} Just Logged In`
}

console.log(userlogmsg("akj"));
