require('ses');

lockdown();

const user = {
  name: 'Alice',
  age: 30
};

// Harden the user object
harden(user);

// Attempt to modify the user object
try {
  user.name = 'Bob';
} catch (error) {
  console.error('Error:', error.message);
}

console.log(user);