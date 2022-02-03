//Adauga instantele create la exercitiul anterior intr-un array si sorteaza array-ul sa aiba obiectele aranjate dupa height

const human = [
    {firstName: "Andreea", age: 19, height: 168, weight: 50, race:"white"},
    {firstName: "Cristina", age: 31, height: 165, weight: 50, race:"white"},
    {firstName: "Ioana", age: 40, height: 180, weight: 90, race:"colored"},
    {firstName: "Iulian", age: 20, height: 185, weight: 70, race:"white"},
    {firstName: "Buddy", age: 1, height: 120, weight: 16, race:"yellow"}
]
function myFunction(a,b){
    return (a.height - b.height);
}
console.log(human.sort(myFunction))