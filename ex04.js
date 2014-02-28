var cat = {
    tiredness: 20,
    hunger: 20,
    loneliness: 3,
    happiness: 15,
    obedientness: -5000,
    feed : function(food) {
        console.log("Om nom nom");
        if (food == "meat") {
            this.hunger = this.hunger - 10;
        }
        else {
            this.hunger = this.hunger -5;
        }
    },
    sleep : function() {
        console.log("zzzzzzzzz");
        this.tiredness = this.tiredness - 5;
    },
    pet : function() {
        console.log("awwwwwww");
        this.happiness = this.happiness + 5;
        this.hunger = this.hunger + 3;
    },
    status : function() {
        console.log("The cat status is:");
        console.log("Tiredness = " + this.tiredness);
        console.log("Hunger = " + this.hunger);
        console.log("happiness = " + this.happiness);
        console.log("loneliness = " + this.loneliness);
        console.log("Obedientness = " + this.obedientness);
    }
};

//cat.sleep();
//cat["sleep"]();
cat.status();