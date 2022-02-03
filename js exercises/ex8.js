//Fa o functie care primeste ca si parametru un array de numere. Functia trebuie sa parseze array-ul si sa afiseze in consola
// fiecare element individual al array-ului.Exemplu: Parametru: [534, 533, 88, 888, 9544, 4353] Consola: 
//534
//533
//88
//888
//9544
//4353

function myFunction(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
    }
}
myFunction([200,5,40,8]);