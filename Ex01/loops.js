var x = 0;
while (x <5) {
    console.log("The value of x:" + x);
    x++;
}

var myLotteryNumbers = [4,8,15,16,23,42];
for (var i=0; i < myLotteryNumbers.length; i++) {
    console.log("The next winning number is:" + myLotteryNumbers[i]);
}
console.log("I win the lottery");


// This is an object
var mySteryActor = {
    "Labyrinth" : "Jareth the Goblin King",
    "Basquiat" : "Andy Warhol",
    "The Prestige" : "Nikola Tesla",
    "Arthur and the Invisibles" : "Emperor Maltazard",
    "SpongeBob SquarePants" : "L.R.H"
};

for (var movie in mySteryActor) {
   console.log("our mystery actor appeared in " + movie + "as" + mySteryActor[i]);
}

console.log("who was our mystery Actor?");