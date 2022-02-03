//Creaza o clasa Bill care accepta urmatorii parametri: date, value, note
//Defineste pe instanta o metoda care returneaza valoarea totala a facturii cu 19% TVA inclus.
function Bill(date, value, note){
    this.date = date;
    this.value = value;
    this.note = note;
    this.vat = function(p, v){
        let vat = p * v / 100;
        let total = p + vat;
        return total;
    } 
}

const July = new Bill('14/07/2020', 100, "July invoice");
console.log(July)//.vat(100,19))

