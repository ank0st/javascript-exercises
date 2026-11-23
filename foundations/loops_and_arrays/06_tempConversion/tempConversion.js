const convertToCelsius = function(tempInF) {
  //f = 9/5 c + 32
  //(f-32) * 5/9 = c
  let tempInC = (tempInF-32)*5/9;
  return Math.round(tempInC*10)/10;
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = tempInC*9/5 + 32;
  return Math.round(tempInF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
