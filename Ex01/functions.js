function aFunctionThatAddsAndReturnsTheValue(first, second) {
    return first + second;
}

console.log(aFunctionThatAddsAndReturnsTheValue(5,10));

var aFunctionIsJustAVariableThatContainsCode = function() {
    console.log("hello, I'm a function running a console.log() statement.");
};

console.log(aFunctionIsJustAVariableThatContainsCode);
aFunctionIsJustAVariableThatContainsCode();

//In Javascript, we can pass functions to other functions as arguments.
// This is a pretty neat trick, considering we have anonymous functions 
//that can be defined in-place. Check this out:
//And then, we can pass a function we have previously declared
function batman(exclamation){
    console.log("NaNaNaNaNaNaNaNa");
    exclamation();
}


function obvious(){
    console.log("Batman!");
}

batman(obvious);

//OR we can declare the function right there:

batman(function(){
    console.log("CAT MAN!");
});