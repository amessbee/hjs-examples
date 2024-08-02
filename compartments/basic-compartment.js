const _ = require('ses');

// Creating a new Compartment with hardened global 'print' function
const c = new Compartment({
  console, // Allow access to console in the compartment
});

// Evaluate code within the compartment
c.evaluate(`
  console.log('Hello! Hello?');
`);