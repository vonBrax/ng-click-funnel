'use strict';

const readline = require('readline'),
  fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec,
  google = require('googleapis'),
  chalk = require('chalk');

// Global configuration object which holds the
// model for the funnels
const config = require('../config/funnels.config');

async function cli(token, customParams) {
  console.log('\x1b[41m \x1b[37m \x1b[5m WELCOME TO THIS AMAZING PIECE OF SOFTWARE!! =) \x1b[0m');
  if (!token) {
    console.log('TOKEN NOT FOUND. ABORTING...');
    return;
  }
  const questions = setupQuestions(customParams);
  const selectedOptions = {...customParams};
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  for (let i = 0; i < questions.length; i++) {
    const possibleAnswers = setupAnswers(questions[i].option, selectedOptions);
    if (!possibleAnswers) {
      continue;
    }
    const userAnswer = await askQuestion(rl, questions[i].text, possibleAnswers);
    selectedOptions[questions[i].option] = userAnswer;
  }

  // TODO: WE ARE ONLY COLLECTION VARIANTS FOR THE FUNNEL SHEET NOW
  // IDEALLY, FUNNEL AND LANDING PAGE STRINGS SHOULD GO TO THE
  // SAME SHEET.
  selectedOptions.variants = await getVariantsData(token, selectedOptions);
  if (selectedOptions.variants.length > 1 ) {
    selectedOptions.range = await askQuestion(rl, 'Please select variant to use', setupAnswers('variants', selectedOptions));
  } else {
    selectedOptions.range = selectedOptions.variants[0].title;
  }

  rl.close();
  
  setAdditionalMetadata(selectedOptions);

  Promise.all([
    grabSheet(token, selectedOptions, true), // Landing page strings
    grabSheet(token, selectedOptions) // Funnel strings
  ])
  .then(data => {
    const lpIndex = findColumnIndexes(data[0][0], selectedOptions.lang),
      funnelIndex = findColumnIndexes(data[1][0], selectedOptions.lang),
      lpStrings = replacePageStrings(selectedOptions, data[0], lpIndex),
      funnelStrings = buildFunnelStrings(selectedOptions, data[1], funnelIndex);
    // save new strings file in project folder
    saveStringsFile(selectedOptions, lpStrings, funnelStrings);
    // update env file with current locale
    updateEnvFile(selectedOptions);
  })
  .catch(err => console.log(err));
}

function getVariantsData(auth, options) {
  return new Promise( (resolve, reject) => {
    const sheets = google.sheets('v4');
      sheets.spreadsheets.get({
      auth: auth,
      spreadsheetId: options.funnel_sheet,
      includeGridData: false,
      ranges: []
    }, (err, response) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      const variants = [];
      response.sheets.forEach(sheet => {
        variants.push({title: sheet.properties.title, id: sheet.properties.sheetId})
      });
      resolve(variants);
    });
  });
}

function setAdditionalMetadata(options) {
  let model = config.find(funnel => funnel.model_name === options.model);
  if (!model) {
    model = config.find(funnel => funnel.alias.indexOf(options.model) > -1 );
    if (!model) {
      throw new Error(chalk.red('Could not find a match for the funnel model. Exiting.'));
      process.exitCode(1);
    }
  }
  options.target_file = model.target_file;
  options.target_filename = model.target_filename;
}

function setupQuestions(custom) {
  let hasModelValue = false,
    hasLangValue = false,
    hasFunnelSheetValue = false,
    hasPageSheetValue = false;
  const questions = [];
  custom = custom || {};
  if (!custom.model) {
    questions.push({ option: 'model', text: 'Select model of the funnel:'});
  }
  if (!custom.funnel_sheet) {
    questions.push({option: 'funnel_sheet', text: 'Select spreadsheet for the FUNNEL:'});
  }
  if (!custom.page_sheet) {
    questions.push({option: 'page_sheet', text: 'Select spreadsheet ID for the LANDING PAGE:'})
  }
  if (!custom.lang) {
    questions.push({ option: 'lang', text: 'Select language to use:' });
  }
  return questions;
}

function setupAnswers(question, options) {
  let answers = [];
  
  switch(question) {
    case 'model':
      config.forEach(funnel => {
        answers.push(funnel.model_name);
      });
      break;
    case 'lang':
      answers.push('EN', 'DE', 'ES');
      break;
    
    // TODO: Refactor to not duplicate code
    case 'funnel_sheet':
      config.forEach(funnel => {
        if (funnel.model_name === options.model || funnel.alias.indexOf(options.model) > -1) {
          // answers = funnel.funnel_sheetid;
          answers = funnel.funnel_sheets;
          // options.target_filename = funnel.target_filename;
          // options.target_file = funnel.target_file;
        }
      });
      break;
    case 'page_sheet':
      config.forEach(funnel => {
        if (funnel.model_name === options.model || funnel.alias.indexOf(options.model) > -1) {
          answers = funnel.landing_page_sheetid;
        }
      });
      break;
    case 'variants':
      options.variants.forEach(variant => {
        answers.push(variant.title);
      });
      break;
  }
  return answers;
}

function askQuestion(readLine, question, answers) {
  return new Promise( (resolve, reject) => {
    let isObject = typeof answers[0] === 'object';
    console.log(chalk.green(question));
    for (let i = 0; i < answers.length; i++) {
      if( isObject ) {
        console.log(chalk.bgCyan(`${i+1} - ${answers[i].name}`));
      } else {
        console.log(chalk.bgCyan(`${i+1} - ${answers[i]}`));
      }
      if(i == answers.length - 1) {
        console.log(chalk.bgCyan(`${i + 2} - Exit`));
      }
    }
    readLine.question('Answer: ', answer => {
      const toInt = Number.parseInt(answer);
       if( toInt === 'NaN' || toInt < 1 || toInt > answers.length + 1) {
        resolve('invalid');
      } else {
        if(toInt === answers.length+1) {
          process.exit(0);
        }
        if (isObject) {
          resolve(answers[answer-1].id);
        } else {
          resolve(answers[answer-1]);
        }
      }
    });
  })
}

function grabSheet(auth, model, isLandingPage) {
  const id = isLandingPage ? model.page_sheet : model.funnel_sheet;
  if (!id) {
    console.err(chalk.bgRed(`COULD NOT FIND SHEET ID FOR "${JSON.stringify(model)}"`));
  }
  const sheets = google.sheets('v4');

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: id,
      range: isLandingPage ? ['Sheet1'] : [model.range]
    }, (err, response) => {
      if(err) {
          console.log('The API returned an error: ' + err);
         return reject(err);
      }
     let rows = response.values;
     if(rows.length == 0) {
        console.log('No data found. Aborting process');
        return reject('No data found');
     } else {
        return resolve(rows);
     }
    });

  });
}

function findColumnIndexes(row, lang) {
  const sectionCol = row.findIndex(cell => cell === 'SECTION');
  const langCol = row.findIndex(cell => cell === lang.toUpperCase() );
  return {section: sectionCol, language: langCol };
}

function buildFunnelStrings(model, rows, index) {
  let funnel_name, funnel = [];
  let step = {
    name: '',
    type: 'radio-click',
    validators: ['required'],
    question: '',
    answers: []
  };
  let personalField = {
    name: '',
    type: '',
    placeholder: '',
    error_message: '',
    validators: []
  };
  
  let lastSection, currStep, newStep,
    currName, newName, isDynamicStep, additionalInfoCounter = 0;
  for (let i = 1; i < rows.length; i++) {
    let section = /step/i.test(rows[i][index.section]) ? ( /\*dyn/i.test(rows[i][index.section]) ? 'dynamic-step' : 'step') : rows[i][index.section];
    if (!section) {
      section = lastSection;
    }

    switch(section) {
      case 'funnel_name':
        funnel_name = rows[i][index.language];
        lastSection = 'funnel_name';
        continue;
      case 'dynamic-step':
        isDynamicStep = true;
      case 'step':
        currStep = rows[i][index.section];
        newStep = newStep || currStep;
        break;
      case 'name':
        if (currStep === 'personal_information') {
          currName = rows[i][index.language];
          newName = newName || currName;
          break;
        } else if (rows[i][index.language] === 'additional_info_user_notes') {
          step.type = 'textarea';
          step.name = rows[i][index.language];
          step.validators = [];  
        }
        else {
            step.name = step.name ?
            step.name + '|' + rows[i][index.language] :
            rows[i][index.language];
        }
        // break;
        continue;
      case 'question':
        step.question = step.question ?
          step.question + '|' + rows[i][index.language] :
          rows[i][index.language];
        if(lastSection === 'answers') {
          step.answers.push('*');
        }
        lastSection = 'question';
        continue;
      case 'answers':
        step.answers.push(rows[i][index.language]);
        lastSection = 'answers';
        continue;
      case 'icons':
         if (step.icons) step.icons.push(rows[i][index.language])
         else step.icons = [ rows[i][index.language] ];
         lastSection = 'icons';
         continue;
      case 'append':
        if (step.append) step.append.push(rows[i][index.language])
        else step.append = [ rows[i][index.language] ];
        lastSection = 'append';
        continue;
      case 'subtitle':
        step.subtitle = rows[i][index.language];
        lastSection = 'subtitle';
        continue;
      case 'placeholder':
        personalField.placeholder = rows[i][index.language];
        lastSection = 'placeholder';
        continue;
      case 'error_message':
        personalField.error_message = rows[i][index.language];
        lastSection = 'error_message';
        continue;
      case 'required':
        rows[i][index.language].toLowerCase() === 'true' ? personalField.validators.push('required') : '';
        lastSection = 'required';
        continue;
      case 'tos':
         step.tos = rows[i][index.language];
         lastSection = 'tos';
         continue;
      case 'submit_btn':
         step.submit_btn = rows[i][index.language];
         currName = 'End of fields';
         break;
      case 'personal_information':
        // Save the last step before personal information
        funnel.push(Object.assign({}, step));
        currStep = 'personal_information';
        newStep = 'personal_information';
        step.name = 'personal_information';
        step.type = 'personal_information';
        step.question = '';
        step.subtitle = '';
        step.fields = [];
        delete step.answers;
        break;
      default:
        step[section] = rows[i][index.language];
    }
    lastSection = section;

    if ( currName && currName !== newName) {
      personalField.name = newName;
      personalField.type = 'text';
      if (personalField.name === 'phone_number') {
        personalField.type = 'phone';
      } else if (personalField.name === 'email') {
        personalField.type = 'email';
      }
      step.fields.push(Object.assign({}, personalField));
      personalField.validators = [];
      newName = currName;

    } else if (currName) {
      personalField.name = rows[i][index.language];
    }

    if( newStep !== currStep || i === rows.length - 1) {
      if (isDynamicStep && /\*dyn/.test(newStep)) {
        isDynamicStep = false;
        const dynSteps = buildDynamicStep(step);
        step.dynamics = dynSteps;
        step.name = 'dynamic_' + newStep.split('*')[0];
        delete step.question;
        delete step.answers;
      }
      funnel.push(Object.assign({}, step));
      step.type = 'radio-click';
      step.name = '';
      step.question = '';
      step.answers = [];
      delete step.icons;
      delete step.append;
      delete step.dynamics;
      newStep = currStep;
    }
  }
  return {funnel_name, funnel}
}

function buildDynamicStep(step) {
  step.type = 'dynamic-step';
  const names = step.name.split('|');
  const questions = step.question.split('|'); 
  let dynamic = [];
  for (let i = 0; i < questions.length; i++ ) {
    const separatorIndex = step.answers.indexOf('*');
    let answers = separatorIndex === -1 ? step.answers : step.answers.splice(0, separatorIndex);
    
    if (answers[0].charAt(0) === '$') {
      const index = Number.parseInt(answers[0].replace('$',''));
      answers = dynamic[index].answers;
    }
    dynamic.push({
      name: names[i],
      question: questions[i],
      answers
    });
    if(separatorIndex > -1) { step.answers.shift(); }
  }
  return dynamic;
}



function replacePageStrings(model, rows, index) {
  // Use current strings.ts file to get all needed strings
  // and use it as guide during strings replacement
  const modelFilePath = buildModelFile(model.target_file);
  const modelFile = loadModelFile(modelFilePath, model);
  // Get the index for the SECTION column
  const sectionCol = index.section; // rows[0].findIndex(cell => cell === 'SECTION');
  // Get the index of the desired language column
  const langCol = index.language; // rows[0].findIndex(cell => cell === model.language );

  // Find the correspondent interval for each property in
  // guide file (properties name in the file should match
  // the names in the SECTION column)
  const intervals = findRowsInterval(sectionCol, rows);
  const result = JSON.parse(JSON.stringify(modelFile));

  for (var k in modelFile) {
    const strings = grabSectionStrings(rows, langCol, intervals[k]);
    if (!strings) {
      console.log('No strings found for section with key: ' + k);
      continue;
    }
    // Deep copy object
    let section = JSON.parse(JSON.stringify(result[k]));
    traverseAndReplace(section, strings);
    result[k] = section;
  }
  return result;
}

function buildModelFile(tsFilePath) {
  const fileName = path.basename(tsFilePath).replace('.ts', '');
  const content = fs.readFileSync(tsFilePath, 'utf8');
  const jsContent = content.replace('export const ', 'exports.');
  fs.writeFileSync(`./models/${fileName}.js`, jsContent);
  return path.join(__dirname, `../models/${fileName}.js`);
}

function loadModelFile(jsFilePath, model) {
  const file = require(jsFilePath);
  let key;
  for (var k in file) {
    key = k;
    break;
  }
  // Store the variable name defined in the ts file
  model.var_name = key;

  return file[key];
}

function findRowsInterval(col, rows) {
  let intervals = {};
  let section = {};

  for (let i = 1; i < rows.length; i++) {
    if(rows[i][col] && !section.key) {
      section.key = rows[i][col];
      section.start = i;
    } else if (rows[i][col]) {
      section.end = i - 1;
      intervals[section.key] = {
        start: section.start,
        end: section.end
      };
      section.start = i;
      section.key = rows[i][col];
    } else if (i === rows.length - 1) {
      section.end = i;
      intervals[section.key] = {
        start: section.start,
        end: section.end
      };
    }
  }
  return intervals;
}

function grabSectionStrings(rows, col, interval) {
  if (!interval) {
    return;
  }
  let strings = [];
  for (var i = interval.start; i <= interval.end; i++) {
    strings.push(rows[i][col]);
  }
  return strings;
}

function traverseAndReplace(section, strings, counter = 0) {
  if (counter >= strings.length) {
    throw new Error('Error: Different number of model strings and i18n strings.');
    return;
  }
  for(var k in section) {
    if(typeof section[k] === 'string') {
      section[k] = strings[counter];
      counter++;
    } else if (typeof section[k] === 'number') {
      section[k] = parseInt(strings[counter]);
      counter++;
    } else {
      counter = traverseAndReplace(section[k], strings, counter);
    }
  }
  return counter;
}

function saveStringsFile(model, lpStrings, funnelStrings ) {
  if(funnelStrings) {
    console.log('#############################################################################');
    lpStrings.funnel = funnelStrings.funnel;
    lpStrings.funnel_name = funnelStrings.funnel_name;
  }

  fs.writeFileSync(model.target_file, `export const ${model.var_name} = ${JSON.stringify(lpStrings, null, 2)};`);
  console.log(`Strings file saved to ${model.target_file}`);

  // loadAdditionalOptions(model);
}

function updateEnvFile(options) {
  console.log(chalk.red('Updating ENV files...'));
  const model = config.find(funnel => ( funnel.model_name === options.model || funnel.alias.indexOf(options.model) > -1));
  const envFile = model.env_file;
  const lang = options.lang.toLowerCase();
  
  const devContent = fs.readFileSync(envFile + '.ts', 'utf8');
  const prodContent = fs.readFileSync(envFile + '.prod.ts', 'utf8');
  const devModified = devContent.replace(/locale: \'[a-z]{2}\'/, `locale: '${lang}'`);
  const prodModified = prodContent.replace(/locale: \'[a-z]{2}\'/, `locale: '${lang}'`);
  // Dev environment file
  fs.writeFileSync(envFile + '.ts', devModified, 'utf8');
  console.log(chalk.green(`Changes saved to ${envFile}.ts (lang: "${lang}")`));
  // Prod environment file
  fs.writeFileSync(envFile + '.prod.ts', prodModified, 'utf8');
  console.log(chalk.green(`Changes saved to ${envFile}.prod.ts (lang: "${lang}")`));
}

// function loadAdditionalOptions(model) {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   const base_path = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
//   const appPath = path.join(base_path, 'node/' + model.app_name + '/');
//   let command;
//   console.log('Please select an option:');
//   console.log('0 - Build dist files');
//   console.log('1 - Exit');

//   rl.question('Answer: ', answer => {
//     rl.close();
//     const num = parseInt(answer);
//     switch(num) {
//       case 0: command = '/usr/local/lib/node_modules/@angular/cli/bin/ng'; break;
//       case 1: console.log('Thanks for using this amazing tool. Bye!'); process.exit();
//     }

//     // command + ' build -e ' + appPath + '--prod --aot --build-optimizer'
//     console.log('Build function not yet implemented... =(');
//     console.log('Please run this in the app folder: ng build --prod --aot --build-optimizer');
//     /* exec(appPath + 'npm run build', (err, stdout, stderr) => {
//       if (err) {
//         console.log('Node could not execute command');
//         console.log(appPath + 'npm run build');
//         console.log(command + ' build -e ' + appPath + '--prod --aot --build-optimizer');
//         return;
//       }
//       console.log(`Stdout: ${stdout}`);
//       console.log(`Stderr: ${stderr}`);
//       console.log('Exiting program now');
//       process.exit(0);
//     }); */
//   });
// }

module.exports = cli;
