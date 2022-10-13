var a; // declarando una variable
var b = 'b'; //estamos declarando y asignando una variable
b = 'bb'; // estamos reasignando 
var a = 'aa'; // y en este caso estamos re-declarando 

//Global Scope
var fruit = 'apple'; // global

function bestFruit() {
    console.log(fruit);
}
bestFruit();

function countries() {
    country = 'colombia'; // se va a declara automaticamente en nuestro documento quedando en nuestro global scope
    console.log(country);
}
countries();
console.log(country);