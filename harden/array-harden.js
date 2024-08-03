require('ses');

lockdown();

const profile = {
    username: 'johndoe',
    roles: ['admin', 'editor']
  };
  
  // Harden the profile object
  harden(profile);
  
  // Attempt to modify the array
  try {
    profile.roles.push('viewer');
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log(profile);