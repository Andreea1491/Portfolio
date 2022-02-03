//Creaza o functie care primeste ca si parametru un string si returneaza
//un array cu toate cuvintele din array care contin litera x.

function myStr(parameter) {
    let newStr = [];
    newStr = newStr.concat(parameter.split(/\s+/));
    for(let i = 0; i < newStr.length; i++ ){
       if(newStr[i].includes('x')){
           console.log(newStr[i])
        }
    }
}
myStr("Ana este extrem de toxica")