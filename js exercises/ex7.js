//Fa o functie care primeste un string ca si parametru si returneaza un array cu toate cuvintele din acel string fara spatii.
//Exemplu: String: This is a test string Result:  ['This', 'is', 'a', 'test', 'string]
function justSplit (strArr) {
    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
      newArr = newArr.concat(strArr[i].split(/\s+/));
      return newArr;
}
}
console.log(justSplit(["Learning js is a nightmare"]))