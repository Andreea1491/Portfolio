//Fa o clasa Human care defineste urmatoarele proprietati pe instanta: firstName, age, height, weight, race
//Defineste si o metoda numita scream pe metoda care atunci cand este chemata, afiseaza in consola string-ul TRALALALALLA
//Defineste o alta metoda numita grow care mareste height-ul si weight-ul cu 10% 
//din valoarea pe care o are la momentul respectiv.

function Human(firstName, age, height, weight,race) {
    this.firstName = firstName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.race = race;
    this.scream = function() {
        return "TRALALALA";
    }
    this.grow = function() {
       let initialHeight =  this.height + ( this.height * 0.10);
       let initialWeight = this.weight + (this.weight* 0.10);
       const newLook = {
           newHeight: initialHeight,
           newWeight: initialWeight,
       } 
        return newLook;
        }

    }

const Andreea = new Human("Andreea", 19, 168, 50, "white" )
const Cristina = new Human("Cristina", 31, 165, 60, "white" )
const Ioana = new Human("Ioana", 40, 180, 90, "colored" )
const Iulian = new Human("Iulian", 20, 186, 70, "white" )
const Buddy = new Human("Buddy", 1, 120, 16, "yellow" )
//console.log(Andreea.scream());
//console.log(Andreea.grow())
console.log(Cristina)
