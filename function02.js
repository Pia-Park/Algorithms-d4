// convert minutes into seconds. 
// Function will take one parameter that will be a number of minutes, 
// up to 2 decimal places. 
// Convert it into seconds, and return that number. 


const minutesToSeconds = function(minutes){ 
    let result = minutes * 60;
    return(result.toFixed(2));
};

console.log(minutesToSeconds(3));