//Fa o functie care primeste ca si parametru un string si returneaza 
//true sau false daca ultimul cuvant din string este bamboocha

function myFunction(a){
let all =[]
all = a.split(/\s+/)
let last = all[all.length-1]
if(last === "bamboocha") {
    return true;
} else {
    return false;
}
}
console.log(myFunction("bamboocha is here e with us"))