//Dictionaries (are called objects in Javascript (which is terrible))
var lonLonRanch = {
    cuccos : 100,
    horses : 5,
    eponas : 1,
    cows : 5,
    crazyOwners : 1
};
//Note that they don't have quotes around the keys, but otherwise look just like dictionaries. That's because they're pretty much used the same way. You don't have to use quotes when you try to get the key.

console.log(lonLonRanch.cuccos);
//Would write : 100



//You can put quotes, especially if you need spaces:
var linksAdventures = {
    "The Legend Of Zelda" : "NES",
    "Zelda 2: The Adventure of Link" : "NES",
    "The Legend Of Zelda: A Link to the Past" : "SNES"
};

//but then you have to access that property (it's called a property) like this:

console.log(linksAdventures["The Legend Of Zelda"]);

// would output : "NES"

//Objects ( we're still talking about -> {} ) can contain anything, even functions!

var enterprise = {
    printCrew: function() {
        console.log("Capitan Jean Luc Picard is the only crew you need to know about.");
    },
    warp: function(bearing, warpFactor) {
        console.log("Heading bearing " + bearing + " at Warp Factor " + warpFactor);
    },
    designation: "NCC-1701-D",
    crewCompliment: 1014
};
//You can call the functions (which are really called methods) like this:

enterprise.warp("2, 3, mark 5", 8);
//"Heading bearing 2, 3 mark 5 at Warp Factor 8";
