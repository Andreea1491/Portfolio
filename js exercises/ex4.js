//functie care sa faca suma numerelor impare de la 1 la 10
function even(start, end) {
    let sum = 0;
    if (start > end) {
        console.log("start must be smaller than the end")
        return sum;
    }
    for (let i = start; i < end; i++) {
        if ( i % 2 === 1) {
            sum = sum +i;
        }
    }
    console.log(sum)
}
even();