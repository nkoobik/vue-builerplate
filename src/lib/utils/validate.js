const EMAIL_PATTERN = /^([а-яА-ЯёЁa-zA-Z0-9_.+-])+@([а-яА-ЯёЁa-zA-Z0-9-])+\.[а-яА-ЯёЁa-zA-Z0-9-.]+$/;
const URL_PATTERN = /^([a-zа-я\d](-*[a-zа-я\d])*)(\.([a-zа-я\d](-*[a-zа-я\d])*))+$/iu;
const FULL_URL_PATTERN = /^((http|https):\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

// Types
export function isUndefined(val) {
  return val === undefined;
}

export function isNull(val) {
  return val === null;
}

export function isNan(val) {
  return Number.isNaN(val);
}

export function isNumber(val) {
  return typeof val === 'number' && !Number.isNaN(val) && isFinite(val);
}

export function isBoolean(val) {
  return typeof val === 'boolean';
}

export function isString(val) {
  return typeof val === 'string';
}

export function isArray(val) {
  return Array.isArray(val);
}

export function isFunction(val) {
  return typeof val === 'function';
}

export function isObject(val) {
  return !isNull(val) &&
    !isUndefined(val) &&
    !isString(val) &&
    !isArray(val) &&
    !isNumber(val) &&
    !isBoolean(val) &&
    !isFunction(val);
}

// Types with empty values
export function isEmptyString(val) {
  return isString(val) && val.length === 0;
}

export function isNotEmptyString(val) {
  return isString(val) && val.length > 0;
}

export function isEmptyArray(val) {
  return isArray(val) && val.length === 0;
}

export function isNotEmptyArray(val) {
  return isArray(val) && val.length > 0;
}

export function isEmptyObject(val) {
  return isObject(val) && Object.keys(val).length === 0;
}

export function isNotEmptyObject(val) {
  return isObject(val) && Object.keys(val).length > 0;
}

// Complex values
export function isEmpty(val) {
  return isEmptyString(val)
    || isNan(val)
    || isEmptyArray(val)
    || isEmptyObject(val);
}

export function isNotEmpty(val) {
  return !isNull(val) && !isUndefined(val) && !isEmpty(val);
}

// Types with advanced value's validators
function isPositiveInt(val) {
  return isNumber(val) && Number.isInteger(val) && val > 0;
}

function isPositiveFloat(val) {
  return isNumber(val) && val % 1 !== 0 && val > 0;
}

function isPositiveNumber(val) {
  return isPositiveFloat(val) || isPositiveInt(val);
}

function isZero(val) {
  return isNumber(val) && val === 0;
}

function isNotZero(val) {
  return !isZero(val);
}

function isFixedLengthArray(val, length) {
  return isNotEmptyArray(val) && val.length === length;
}

function isArrayWithValidValues(array, callback) {
  return isNotEmptyArray(array) && array.every(item => callback(item));
}

function isObjectWithFields(object, fields) {
  return isObject(object)
    && fields.every((field) => Object.prototype.hasOwnProperty.call(object, field));
}

function isObjectWithSubField(object, fieldMap) {
  return isObject(object)
    && fieldMap.every((field, index) => {
      const previousFields = fieldMap.slice(0, index);

      if (previousFields.length === 0) {
        Object.prototype.hasOwnProperty.call(object, field);
      }

      let validatedObject = object;

      previousFields.forEach(prevField => validatedObject = validatedObject[prevField]);

      return Object.prototype.hasOwnProperty.call(validatedObject, field);
    });
}

export function isStringIncludingSubstring(val, substring) {
  return val.indexOf(substring) !== -1;
}

export function isStringNotIncludingSubstring(val, substring) {
  return !isStringIncludingSubstring(val, substring);
}

function isValueValidByValidators(value, validators) {
  for (let i = 0 ; i < validators.length ; i++) {
    const validator = validators[i];

    if (validator.call(null, value) === false) {
      return false;
    }
  }
  return true;
}

// Advanced types
function isEmail(string) {
  return EMAIL_PATTERN.test(string);
}

function isUrl(string) {
  if (!isString(string) || isEmptyString(string)) {
    return false;
  }

  let urlString = string.trim();
  while (':/'.includes(urlString.charAt(0))) {
    urlString = urlString.slice(1);
  }
  urlString = `http://${urlString.replace(/^https?:\/\//, '')}`;

  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return false;
  }

  return URL_PATTERN.test(url.host);
}

function isUrlWithProtocol(url) {
  if (!isString(url) || isEmptyString(url)) {
    return false;
  }

  return FULL_URL_PATTERN.test(url);
}

export default {
  isUndefined,
  isNull,
  isNan,
  isNumber,
  isBoolean,
  isString,
  isArray,
  isFunction,
  isObject,
  isEmptyString,
  isNotEmptyString,
  isEmptyArray,
  isNotEmptyArray,
  isEmptyObject,
  isNotEmptyObject,
  isEmpty,
  isNotEmpty,
  isPositiveInt,
  isPositiveFloat,
  isPositiveNumber,
  isZero,
  isNotZero,
  isFixedLengthArray,
  isArrayWithValidValues,
  isObjectWithFields,
  isObjectWithSubField,
  isStringIncludingSubstring,
  isStringNotIncludingSubstring,
  isValueValidByValidators,
  isEmail,
  isUrl,
  isUrlWithProtocol,
};
