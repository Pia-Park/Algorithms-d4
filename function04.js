// convert celsius into fahrenheit into celsius, and vice versa. 
// Function will take two parameters that will be  
// a temp either fahrenheit or celsius, up to 2 decimal places. 
// The second argument will be either the letter ‘c’ 
// or the letter ‘f’ to state whether the value given is starting
// in celsius or in fahrenheit. Convert the temp to the opposite unit, 
// and return the value.  (35.6, ‘c’)


const convertCtoF = function(degree, cf){
    let result = 0;

    if(cf === 'c'){
        result = degree * 9 / 5 + 32;
        return(result.toFixed(2));
    } else if(cf === 'f'){
        result = (degree - 32) * 5 / 9;
        return(result.toFixed(2));
    }
    
};


console.log(convertCtoF(35.6, 'c'));