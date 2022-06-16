var nome: string
nome = "Lucas"
var idade: number
idade = 28
console.log(nome)


//exemplo 1
const user = {
    name: "Daniel",
    age: 26,
};
user.name;

//exemplo 2
const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowerCase();
announcement.toLocaleLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();

//exemplo 3
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;}

//exemplo 4
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value !== "b") {
// This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}

//exemplo 5
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
  }
   
  greet("Brendan");