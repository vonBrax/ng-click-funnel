'use strict';

const getToken = require('./controllers/google.auth.controller'),
  cli = require('./controllers/funnels.controller'),
  drawing = require('./models/drawings'),
  parameters = require('./controllers/parameters.controller');

console.log('###### Funnel and Landing Page Strings #########');
console.log(drawing.logo);
console.log('Checking credentials...');

/* const token = */
getToken(token => {
  console.log('Authentication complete!');
  console.log(drawing.lets);
  console.log(drawing.some);
  console.log(drawing.funnel);
  let customConfig;
  if(process.argv.length > 2) {
    customConfig = handleParams(process.argv.slice(2));
  }
  initCli(token, customConfig);
});

// Parse command line parameters
function handleParams(params) {
  return parameters.parse(params); 
}

// Init user interface
function initCli(token, customConfig) {
  cli(token, customConfig);
}
