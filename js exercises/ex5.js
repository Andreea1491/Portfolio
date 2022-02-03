//functie care primeste 2 parametri si sa afisezi diferenta dintre
//produs si suma numerelor

function minus(a,b) {
    let addition = a * b;
    let sum = a + b;
    let result = addition - sum;
    return result;
}
console.log(minus(4,8));
