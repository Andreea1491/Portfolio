//Creaza un string in baza array-ului de la exercitiul anterior care afiseaza nume + varsta pentru fiecare element din array.
// Ex:[{ firstName: 'Dragos',  age: 25 }, { firstName: 'Alina',  age: 27 }  ] Rezultat: 'Dragos: 25 ani, Alina: 27 ani'

const human = [
    {firstName: "Andreea", age: 19, height: 168, weight: 50, race:"white"},
    {firstName: "Cristina", age: 31, height: 165, weight: 50, race:"white"},
    {firstName: "Ioana", age: 40, height: 180, weight: 90, race:"colored"},
    {firstName: "Iulian", age: 20, height: 185, weight: 70, race:"white"},
    {firstName: "Buddy", age: 1, height: 120, weight: 16, race:"yellow"}
]

let people = human.map( function(a){
    return a.firstName + ": " + " " + a.age + " ani ";
})
console.log(people)