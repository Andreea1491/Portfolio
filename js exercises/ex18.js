//Creaza o clasa "Door" care primeste ca si parametri numerici width, height (valorile vor fi în cm). Definește urmatoarea metoda:
//getSize - returneaza suprafata usii in m2
//Modifica clasa de la exercitiul 1 sa accepte un nou parametru, o instanta a clasei Door, numit door.

function Door(width, height){
    this.width = width;
    this.height = height;
    this.getSize = function(){
        let total = (this.width * this.height) / 10000;
        return total;
    }
}

const bathroomDoor = new Door(85, 200)
console.log(bathroomDoor)
console.log(bathroomDoor.getSize())