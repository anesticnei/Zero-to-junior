// Class inheritance

//====================================================================================================

// class Animal {
//     constructor(name){
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed){
//       this.speed = speed;
//       alert(`${this.name} run with speed ${this.speed}.`);
//     }
//     stop(){
//       this.speed = 0;
//       alert(`${this.name} stands still`)
//     }
//   }
  
//   let animal = new Animal ('My animal');
  
  
//   class Rabit extends Animal{
//     hide(){
//       alert(`${this.name} hides!`)
//     }
//   }
  
//   let rabit = new Rabit("White Rabit")
  
// rabit.run(5);
// rabit.hide();






// function f(phrase){
//     return class {
//         sayHi(){
//             alert(phrase)
//         }
//     }
// }

// class User extends f("Hello"){}

// new User().sayHi();




// class Rabbit extends Animal {
//     stop(){
        
//     }
// }


// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed){
//         this.speed = speed;
//         alert(`${this.name} runs with speed ${this.speed}.`)
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still`);
//     }
// }

// class Rabbit extends Animal {
//     hide(){
//         alert(`${this.name} hides!`)
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }

// let rabit = new Rabbit("White Rabit");

// rabit.run(5);
// rabit.stop();

// class Rabbit extends Animal{


//     stop() {
//         setTimeout(() => super.stop(), 1000)
//     }
// }



// class Rabbit extends Animal {
//     constructor(...args){
//         super(...args)
//     }
// }


// class Animal {
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 10);

// alert(rabbit.name)
// alert(rabbit.earLength)


// class Animal {
//     name = 'animal';

//     constructor(){
//         alert(this.name);
//     }
// }

// class Rabbit extends Animal{
//     name = 'rabit';
// }


// new Animal()
// new Rabbit()


// class Animal {
//     showName(){
//         alert('animal')
//     }
//     constructor(){
//         this.showName()
//     }
// }

// class Rabbit extends Animal{
//     showName(){
//         alert('rabbit')
//     }
// }

// new Animal()
// new Rabbit()




// Recursion and stack

//====================================================================================================

// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16

// function pow(x, n){
//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *= x;
//     }

//     return result
// }

// alert(pow(2, 3));


// function pow(x, n){
//     if(n == 1) {
//         return x;
//     }else {
//         return x * pow(x, n - 1);
//     }
// }

// alert( pow(2, 3 ))

// function pow (x, n){
//     return (n == 1) ? x : (x * pow (x, n - 1))
// }
// alert( pow(2, 3))



// function pow(x, n) {
//     if(n == 1){
//         return x
//     }else {
//         return x * pow(x, n - 1)
//     }
// }
// alert( pow(2, 3))


// function pow(x, n){
//     let result = 1;
    
//     for(let i = 0; i < n ; i++){
//         result *= x;
//     }
//     return result
// }

// alert( pow(2, 3))




// let company = {

//         sales: [{
//             name: 'John',
//             salary: 1000,
//         },
//         {
//             name: 'Alice',
//             salary: 1600,
//         }],

//         development: {
//             sites: [{
//                 name: 'Peter',
//                 salary: 2000,
//             }, {
//                 name: 'Alex',
//                 salary: 1800,
//             }],
//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };


let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600}],
    development: {
        sites: [{name: 'Peter', salary:2000}, {names: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev, current) => prev + current.salary, 0)
    }else{
        let sum = 0
        for(let subdep of Object.values(department)){
            sum += sumSalaries(subdep)
        }
        return sum
    }
}

alert(sumSalaries(company))


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
