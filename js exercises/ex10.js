//Fa o functie care primeste ca si parametru un string si returneaza un array care contine toate cuvintele din string 
//care au o lungime mai mare de 5 caractere.

function anotherFunction(words) {
    let newArr = [];
    let anotherArr = [];
    newArr = newArr.concat(words.split(/\s+/));
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i].length > 5) {
            anotherArr = anotherArr.concat(newArr[i]);
        }
    } 
    console.log(anotherArr)
} 
anotherFunction("Andreea invata js")