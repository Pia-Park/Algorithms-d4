// convert celsius into fahrenheit into celsius, and vice versa. 
// Function will take two parameters that will be  
// a temp either fahrenheit or celsius, up to 2 decimal places. 
// The second argument will be either the letter ‘c’ 
// or the letter ‘f’ to state whether the value given is starting
// in celsius or in fahrenheit. Convert the temp to the opposite unit, 
// and return the value.  (35.6, ‘c’)


const convertCtoF = function(celsius){
    let cTemp = celsius;
    let cToF = cTemp * 9 / 5 + 32;
    let result = (cToF.toFixed(2)) + ", 'f'";
    return result;
};

const convertFtoC = function(fahrenheit){
    let fTemp = fahrenheit;
    let fToC = (fTemp - 32) * 5 / 9;
    let result = (fToC.toFixed(2)) + ", 'c'";
    return result;
};

console.log(convertCtoF(60));
console.log(convertFtoC(60));