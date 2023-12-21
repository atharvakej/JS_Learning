const arr = [1, 2, 3, 2, 3];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello_World";

for (const it of greetings) {
  console.log(`each char is ${it}`);
}

const mapio = new Map();

mapio.set("FR", "france");
mapio.set("FR", "france");
mapio.set("FRr", "ffrance");

for (const [k, value] of mapio) {
  console.log(k, ":-", value);
}
