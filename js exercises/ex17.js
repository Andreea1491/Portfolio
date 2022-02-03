//Creaza o clasa "Room" care primește ca și parametri numerici width, length, height, coveredHeight (valorile vor fi în cm). 
//Definește următoarele metode:
//getTotalLengthWallSize - returnează suprafață pereților laterali în m2 cu pana la 2 decimale
//getTotalWidthWallSize - returnează suprafață pereților în m2 cu pana la 2 decimale de pe lățime ( pereții de la dus și usa)
//getExtraLengthWallSize - returneaza suprafata peretilor laterali in m2 neacoperita de bugetul dezvoltatorului
//getExtraWidthWallSize - returneaza suprafata peretilor dus / usa in m2 neacoperita de bugetul dezvoltatorului
//getFloorSize - returnează suprafață în m2 cu pana la 2 decimale ai podelei
//Creaza cel putin 2 instante ale clasei room cu ce valori vrei tu (poti sa creezi mai multe daca vrei). 

function Room(width, length, height, coveredHeight, door,materials,floorTile, sideWallTiles, showerTile, doorWallTile){
    this.width = width;
    this.length = length;
    this.height = height;
    this.coveredHeight = coveredHeight;
    this.door = door;
    this.materials = materials;
    this.floorTile = floorTile;
    this.sideWallTiles = sideWallTiles;
    this.showerTile = showerTile;
    this.doorWallTile = doorWallTile;
    this.getTotalLengthWallSize = function(){
        let newLength = (2 * this.length * this.height) / 10000;
        let total = newLength.toFixed(2)
        return parseFloat(total);
    }
    this.getTotalWidthWallSize = function(){
        let newWidth = (2 * this.width * this.height) / 10000;
        let total = newWidth.toFixed(2);
        return parseFloat(total);
    }
    this.getExtraLengthWallSize = function(){
        let newHeight = (2 * (this.height - this.coveredHeight) * this.length) / 10000;
        let total = newHeight.toFixed(2)
        return parseFloat(total);
    }
    this.getExtraWidthWallSize = function(){
        let newHeight = (2 * (this.height - this.coveredHeight) * this.width) / 10000;
        let total = newHeight.toFixed(2)
        return parseFloat(total);
    }
    this.getFloorSize = function(){
        let floor = (this.length * this.width) / 10000;
        let decimalFloor = floor.toFixed(2)
        return parseFloat(decimalFloor);
    }
    this.getTotalCost = function() {
            let budgetLength = this.getTotalLengthWallSize() - this.getExtraLengthWallSize();
            let budgetWidth = this.getTotalWidthWallSize() - this.getExtraWidthWallSize();
            let totalCovered = (budgetLength + budgetWidth - this.door.getSize())* (this.materials.pricePerSquareMeter - this.materials.developerBudget);
            let extraLength = this.getExtraLengthWallSize() + this.getExtraWidthWallSize();
            let floorPrice = this.getFloorSize() * (this.materials.pricePerSquareMeter - this.materials.developerBudget)
            let totalExtra = extraLength * this.materials.pricePerSquareMeter;
            let totalBudget = totalCovered + totalExtra + floorPrice;
            return totalBudget
        }
}

const materials = new Material("Liston Oxford", 1234,100, 40)
const bathDoor = new Door(85, 200);
const bathRoom = new Room(185, 250, 280, 200,bathDoor,materials);
// console.log(bathRoom.getTotalCost())
//console.log(shower.getFloorSize())

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
};

const bathroomDoor = new Door(85, 200);
//console.log(bathroomDoor);
//console.log(bathroomDoor.getSize());

//Creaza o clasa "Material" care primeste ca si parametri numerici: name, productCode, pricePerSquareMeter, developerBudget.

function Material(name, productCode, pricePerSquareMeter, developerBudget){
    this.name = name;
    this.productCode = productCode;
    this.pricePerSquareMeter = pricePerSquareMeter;
    this.developerBudget = developerBudget;
};

const tiles = new Material("Liston Oxford", 1234,100, 40);
//console.log('tiles', tiles)


//Defineste o metoda pe clasa Room care calculeaza totalul de plata pentru suprafetele acoperite de dezvoltator + cost aditional 
//in cazul in care materialul are un pret mai mare decat bugetul definit de dezvoltator + costul aditional pentru 
//suprafata neacoperita de dezvoltator (cei 60 cm de exemplu pe inaltimea camerei).
//Ia in considerare suprafata usii atunci cand calculezi suprafata totala acoperita de faianta / gresie.
