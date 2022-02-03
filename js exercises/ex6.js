//functie cu 3 parametri sa afiseze doar parametri pari

function par(a,b,c) {
    if (a % 2===0) {
        console.log(a);
    }
     if ( b % 2 ===0) {
        console.log(b);
    }
     if ( c % 2 === 0) {
        console.log(c)
    }
}
par(10,14,25)