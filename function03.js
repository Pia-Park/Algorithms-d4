// convert hours into seconds. 
// Take in a value of hours up to 4 decimal places, 
// and convert it into seconds. 

const hoursToSeconds = function(hours){ 
    let result = hours * 60 * 60;
    return(result.toFixed(4));
};

console.log(hoursToSeconds(3));