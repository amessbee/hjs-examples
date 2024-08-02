require('ses');
lockdown();


function User(name) {
    this.name = name;
  }

// Malicious attempt to modify Object prototype
Object.prototype.isAdmin = true;

const user = new User('Alice');

console.log(user.isAdmin); // Output: true