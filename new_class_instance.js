var StarShip = function(designation, registryNumber, crewComplement){
    this.designation = designation || "Unknown Designation";
    this.registryNumber = registryNumber || "registryNumber";
    this.crewComplement = crewComplement || 0;
};

// The 'new' word created starship Objects using above class definition
var enterprise = new StarShip("Enterprise", "NCC-1701-D", 1014);
console.log("1st StarShip object is : " + enterprise.designation + enterprise.registryNumber + enterprise.crewComplement);
var birdOfPrey = new StarShip("IKS Koraga", "K'Vort", "25");
console.log("2nd StarShip Object is : " + birdOfPrey.designation + birdOfPrey.registryNumber + birdOfPrey.crewComplement);
consol.log(this.width);