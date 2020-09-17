// even or odd?  
// will take in one parameter ( a number ) and print either even or odd, 
// depending on the number. 


const evenOrOdd = function(number){
    if(number % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
};

console.log(evenOrOdd(55));