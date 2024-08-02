const _ = require('ses');

const mathEndowment = {
  sqrt: Math.sqrt,
  console
};

const c2 = new Compartment( globals = mathEndowment );
c2.evaluate('console.log(sqrt(16));'); // Outputs: 4
