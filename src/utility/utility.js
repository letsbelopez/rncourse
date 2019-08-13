const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      case "minLength":
        isValid = isValid && minLength(val, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalTo(val, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};

const minLength = (val, minLength) => {
  return val.length >= minLength;
};

const equalTo = (val, checkValue) => {
  return val === checkValue;
};

export default validate;
