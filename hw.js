//Instantiate a new Person named Timmy
//Age Timmy 5 Years
class person {
constructor(name, age) {
    this.name = name;
    this.age = age;
}

}

let Timmy = new person("Timmy", 5);
console.log(Timmy.name)
console.log(Timmy.name  + Timmy.age + ' Years Old')


//Have Timmy eat 5 times
function eat() {
    console.log('Timmy is eating')
}

for (let i = 1; i <=5; i++) {
eat();
}

//Have Timmy exercise 5 times
function exercise() {
    console.log('Timmy is exercising')
}
for (let i = 1; i<= 5; i++) {
    exercise();
}

//Age Timmy 9 Years

Timmy = new person("Timmy", 9);
console.log(Timmy.name + Timmy.age + ' Years Old')

//Name Hamster Gus

let hamsterName = "Gus"
console.log(hamsterName + ' is hamster name')

// Set Gus's owner to the string "Timmy"
hamsterName.owner = 'Timmy';
console.log('Timmy' + ' is hamster owner')

// Have Timmy "buy" Gus
// buyHamster = {
//     getPrice(10)
// }
// console.log(buyHamster)

// Age Timmy 15 years
Timmy.age= 15;
console.log(Timmy.name + Timmy.age + ' Years Old')

//Timmy is eating twice
function eat() {
    console.log('Timmy is eating')
}

for (let i = 1; i <=2; i++) {
eat();
}
console.log()

//Timmy is exercising twice
function exercise() {
    console.log('Timmy is exercising')
}

for (let i = 1; i <=2; i++) {
exercise();
}
console.log()





