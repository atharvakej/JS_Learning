function shoppingkart(...num1) {
  return num1;
}
// ... is rest operator
// 
console.log(shoppingkart(4, 43, 434, 4, 4, 2323));

// function ke andr object

function handleobj(anyobj){
  console.log(`My name is ${anyobj.username} and price is ${anyobj.price}`)
}

handleobj({
  username : "Atharva",
  price : 1029
})