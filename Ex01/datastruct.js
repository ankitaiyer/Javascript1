// comments look like this OR
/* comments also look like this and extend on the next line
like this */

/* 
if you need to make
a comment haiku then these
stars are for multi lines
*/

//variables - are global unless you specify 'var' beore the variable name
var aVariable;

//number
var aNumber =5;

//numbers are the same, whether float or int
var aFloatingPointNumber= 5.5;

//strings
var aString = "cats";

//Turning a number into a string, alos concatination
var phrase = "I have " + aFloatingPointNumber + " " + aString;

var emptyonPurpose = null;

//var emptyBecauseINeverDeclaredIt = undefined;
//This is failing and confirmed with Liz - could be known behavior 
//console.log(anotherEmptyVariable);

var iHateCats =false;
var catsAreAwesome = true;
console.log(catsAreAwesome);