require('ses');

lockdown();

const data = {
    id: Symbol('id'),
    process: function () {
      console.log('Processing data...');
    }
  };
  
  // Harden the data object
  harden(data);
  
  // Attempt to modify the function and symbol
  try {
    data.process = function () {
      console.log('New process function');
    };
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  try {
    data.id = Symbol('newId');
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  data.process();
  console.log(data);