function toFraction(num = 0, base = 16, simplified = false) {
  let integer = 0;
  let numerator = 0;
  if (isNaN(num)) {
    return "NaN";
  } else {
    integer = Math.trunc(num);
    numerator = Math.round((num - integer) * base);
    if (numerator == base) {
      integer += 1;
      numerator = 0;
    }
    if (numerator == 0) {
      return integer.toString();
    } else {
      if (integer == 0) {
        if (simplified) {
          return reduceFraction(numerator, base);
        } else {
          return numerator + "/" + base;
        }
      } else {
        if (simplified) {
          return integer + " " + reduceFraction(numerator, base);
        } else {
          return integer + " " + numerator + "/" + base;
        }
      }
    }
  }
}
function reduceFraction(num1 = 1, num2 = 1) {
  const commonFactorArray = [16, 8, 4, 2];
  if (num1 == num2) {
    return "1";
  }
  ;
  for (let commonFactor of commonFactorArray) {
    if (num1 % commonFactor == 0 && num2 % commonFactor == 0) {
      return num1 / commonFactor + "/" + num2 / commonFactor;
    }
  }
  return num1 + "/" + num2;
}
//# sourceMappingURL=scripts.js.map
