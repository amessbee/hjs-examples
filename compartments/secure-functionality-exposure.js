const _ = require('ses');

const myCompartment = new Compartment(
  globals = {
    console,
    setTimeout,
  }
);

myCompartment.evaluate(`
  console.log("This is safe");
  setTimeout(() => console.log("This is also safe"), 1000);
`);