// Immedietely Invoked Function Expression (IIFE)
function shoppingkart(...num1) {
    return num1;
  }

(function chai(){
    console.log(`DB CONNECTED`);
})();

function one(num1){
    return num1;
}

console.log(one(43));
(
    (parameter)=> {
        console.log(`AKJ IS HERE ${parameter}`)
    }
)('Atharva final')