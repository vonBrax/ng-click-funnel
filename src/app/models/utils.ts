// Import methods
import { parseCustom, formatCustom, getNumberType, isValidNumberCustom } from 'libphonenumber-js';

// Import type definitions
import { CountryCode, ParsedNumber, NumberFormat } from 'libphonenumber-js';
import { examples, numberTypes, validationError } from '../data/intl-tel-input.data';

// Import metadata
// import {metadata} from './metadata.custom';

export class IntlTelInputUtils {

    numberType = numberTypes;
    customMetadata: any;

    contructor() {}

    setCustomMetadata(data: any) {
        this.customMetadata = data;
    }

    // format the given number to the given format
    formatNumber(number: string, countryCode: string, formatAs: string = 'E.164' ) {
        try {
            const numberObj = parseCustom(number, countryCode.toUpperCase() as CountryCode, this.customMetadata);
            return formatCustom(numberObj, formatAs as NumberFormat, this.customMetadata);
        } catch (e) {
            return number;
        }
    }

    // get an example number for the given country code
    getExampleNumber(countryCode: string, nationalFormat: boolean, numberType) {
      try {
        /** TODO: CHECK IF IT IS REALLY NECESSARY TO GET THE PHONE NUMBER EXAMPLES
         *  FOR A SPECIFIC TYPE (MOBILE, FIXED-LINE ETC) SINCE WE ARE CURRENTLY
         *  USING ONLY MOBILE EXAMPLES...
         */

        const numberStr = this.getExampleNumberForType(countryCode.toUpperCase(), numberType);
        const formatAs = nationalFormat ? 'National' : 'International';
        return formatCustom(numberStr, countryCode.toUpperCase() as CountryCode, formatAs, this.customMetadata);
      } catch (e) {
        return '';
      }
    }

    getExampleNumberForType(countryCode: string, numberType: string): string {
        return examples[countryCode];
    }

    // get the extension from the given number
    getExtension(number: string, countryCode: string) {
          try {
            const numberObj = parseCustom(number, countryCode.toUpperCase() as CountryCode, this.customMetadata);
            return numberObj.ext;
          } catch (e) {
            return '';
          }
    }

    // get the type of the given number e.g. fixed-line/mobile
    getNumberType(number: string, countryCode: string) {
        try {
            const numberObj = parseCustom(number, countryCode.toUpperCase() as CountryCode, this.customMetadata);
            return getNumberType(numberObj);
        } catch (e) {
            // broken
            return -99;
        }
    }

    isValidNumberCustom(number: string, countryCode: string) {
        try {
            const numberObj = parseCustom(number, countryCode.toUpperCase() as CountryCode, this.customMetadata);
            return isValidNumberCustom(numberObj, this.customMetadata);
        } catch (e) {
            return false;
        }
    }
}
