"use strict";
console.log("Its working!");

class Player {
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    taunt(){
        console.log("BOOOO!");
    }
}

const player1= new Player("Blue", "Cat")
console.log(player1.first);
player1.taunt()
const player2= new Player("Black", "Dog")
console.log(player2.first);
player2.taunt()

