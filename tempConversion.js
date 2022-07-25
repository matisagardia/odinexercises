const ftoc = function(far) {
      celsius = (far - 32) / 1.8;
      celsiusDecimal = Math.round(celsius * 10) / 10;
      return celsiusDecimal;    
};

const ctof = function(cel) {
      farenheit = (cel * 1.8) + 32;
      farenDecimal = Math.round(farenheit * 10) / 10;
      return farenDecimal;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
