class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("Ninja's name is " + this.name)
        return this;
    }
    showStats(){
        console.log("Ninja's name is " + this.name)
        console.log("Ninja's strength is " + this.strength)
        console.log("Ninja's speed is " + this.speed)
        console.log("Ninja's health is " + this.health)
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(this.name + "'s health is " + this.health)
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakwisdom(){
        this.drinkSake();
        console.log("Go with the flow.")
    }
}



const sensei1 = new Sensei("Larry");
sensei1.showStats();
sensei1.drinkSake();
sensei1.speakwisdom();