require('ses');

lockdown();
const settings = {
    theme: 'dark',
    preferences: {
      notifications: true,
      language: 'en'
    }
  };
  
  // Harden the settings object
  harden(settings);
  
  // Attempt to modify a nested property
  try {
    settings.preferences.language = 'fr';
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  console.log(settings);