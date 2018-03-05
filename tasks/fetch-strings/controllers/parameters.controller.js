'use strict';

const chalk = require('chalk');
const shortForm = ['m', 'l', 'f', 'p'];
const longForm = ['model', 'lang', 'funnel-sheet', 'page-sheet'];

exports.parse = function (params) {
    const config = {};
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        let obj = {};
        if (param.indexOf('=') > -1 ) {
            obj = extractFromSingleParam(param);
        } else {
            obj = extractFromDoubleParam(param, params[++i])
        }
        //config.push(obj);
        config[obj.key] = obj.value;
    }
    return config; 
};

function extractFromSingleParam(param) {
    const pair = param.split('=');
    let key;
    if(pair[0].indexOf('--') === 0) {
        key = matchLongForm(pair[0].slice(2));
    } else if (pair[0].indexOf('-') === 0) {
        key = matchShortForm(pair[0].slice(1));
    }
    if (!key) {
        throw new Error(`Unknown parameter "${pair[0]}"`);
        process.exitCode(1);
    }
    if (isInvalidPair(key, pair[1])) {
        if (key === 'sheet' || key === 's') {
            console.warn( chalk.bgYellow( chalk.bold('WARNING: '),`Sheet ID "${pair[1]}" appears to be incorrect. Please double check it`));
        } else {
            throw new Error(`Invalid value "${pair[1]}" for parameter "${key}"`);
            process.exitCode(1);
        }
    }
    return { key: key.replace(/-/g,'_'), value: pair[1]};
}

function extractFromDoubleParam(key, value) {
    return extractFromSingleParam(key + '=' + value);
}

function matchLongForm(key) {
    if (longForm.indexOf(key.toLowerCase()) > -1 ) {
        return key;
    }
    return null;
}

function matchShortForm(key) {
    const index = shortForm.indexOf(key.toLowerCase());
    if (index > -1) {
        return convertToLongForm(index);
    }
    return null;
}

function isInvalidPair(key, val) {
    switch(key) {
        case 'model':
        case 'm':
            if (['click', 'vertical', 'vert'].indexOf(val.toLowerCase()) > -1) {
                return false;
            }
            break;
        case 'lang':
        case 'l':
            if (['en', 'de', 'es'].indexOf(val.toLowerCase()) > -1){
                return false;
            }
            break;
        case 'funnel-sheet':
        case 'page-sheet':
        case 'f':
        case 'p':
            if (val.length === 44) {
                return false;
            }
            break;
    }
    return true;
}

function convertToLongForm(index) {
   return longForm[index];
}