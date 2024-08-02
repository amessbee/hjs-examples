require('ses');
lockdown();

// Attempt to modify Object prototype
Object.__proto__ = {'isAdmin': true}; // Results in an error due to lockdown
