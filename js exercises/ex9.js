//Fa o functie care primeste ca si parametru un string si returneaza o valoare booleana care indica 
//daca acel string este mai lung de 20 charactere.

function myFunction (bol) {
if(bol.length > 20) {
    return true;
} else {
    return false;
}
}
console.log(myFunction("This is madness"))