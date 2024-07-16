function sayHello(){
  
  const number  = [1,2,3,4,5,6];
  
  for(var i =0;  i <= 5; i++ ){
    
    
    /// array.forEach(function(array_variable){

    //})
    number.forEach(function(number){
       console.log(number);
    })

    console.log(i);
    
   
    
  }

  
  
}

sayHello();


// Arrow Function  Normaly We are Write

let sum  = function (a, b,c){
  return a+b+c;


}


let sum =(a,b,c)=>{
  return  a+b+c;
}

arrow function
let sum =  (a,b,c) => a+b+c;


string literals 


var title = "hi";
var title

spread property 


let person {
  name:"a",
  age:4
}

let p1 = {...person};

// Spread Operater

let person = {
  name:"ab",
  age:"1"

  
};

let address  =  {
  city:"Mumbai",
  pin:400093
}
let p1 = {...person,...address};
console.log(p1);


//  rest operater

Rest Parameter

let number = [1,2,3,4,5];
function sum(num){
  let total = 0
  for()
}

// rest Operater 

let number = [1, 2, 3, 4, 5, 6];

function sum(...num) {
  console.log(num);
}

console.log(sum(1, 2, 3)); // Output: [1, 2, 3]
// class object 
class Person {
  constructor(name) {
    this.name = name;
  }
}

let p1 = new Person("jay");
console.log(p1.name); // Output: jay
//object literals

var person  ={

}

// object literals

let name  = "abhishek";
let age = 30;
let person = { name, age, addresss: "kolkata"};
console.log(person)

// Map data
