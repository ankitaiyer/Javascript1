var age = 24;
if (age >35){
    console.log("you can hold any public office");
} else if (age < 35 && age >=30) {
    console.log("You can run for Senate!");
} else if (age < 30 && age > 25) {
    console.log ("YOu can run for a representative seat");
} else if (age < 25 && age > 21) {
    console.log ("You can run for some forms of public office!");
} else if (age < 21 && age > 18) {
    console.log("You can't drink or run for office but you can go to war!");
} else {
    console.log("You have no voice as citizen");
}