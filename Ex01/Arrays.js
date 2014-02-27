//Lists are called arrays in Javascipt

var listOfMuppets = ["Kermit", "Dr. Teeth", "Gonzo","Fozzie", "Animal", "Statler", "Waldorf"];
var fibs = [1,1,2,3,5,8,13,21,34];

//Arrays are complex and contain multitudes (of types)
var multiTypeArray = ["things", 5, ["teeth"], {cats:5 , cucco:2}];

//Length is property on arrays

console.log("length of muppets list is" + listOfMuppets.length);
//would oupput 7
console.log("length of fibs is " + fibs.length);
// would output 9

//List slicing

//All the muppets that play instruments
var musicalMuppets = listOfMuppets.slice(0,5);

//All the numbers that are jerks
var criticalMuppets = listOfMuppets.slice(-2);

//All the muppets that aren't fozzie
var funnyMuppets = listOfMuppets.slice(0,3).concat(listOfMuppets.slice(4));
//The slice function doesn't take an iteration argument, wakka wakka wakka!