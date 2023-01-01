// const restaurant = {
//     name: `ichiran Ramen`,
//     address: `johnson Ave`,
//     city: `Brooklyn`,
//     state: `NY`,
//     zipcode:`11206`
// }
// console.log(`${restaurant.name} lives in ${restaurant.address} in the city ${restaurant.city} in the country ${restaurant.state}, ${restaurant.zipcode}`);

//EX0 -1
let student = {
    name: "queen",
    age: 22,
    grade: 100,
    classes:["music", "sport", "Biology"], 
};
console.log (student.name)

//2
let book = {
    title: "Harry Potter",
    autor: "J. K. Rowling",
    year: 1997,
    genre: "Fantasy",
    publisher: "Bloomsbury Publishing",
    pages: 223,
    isbn: 23
}
book.rating = 120
console.log (book)

//3
let car = {
    make: "Tesla",
     model: "Model S",
     year: 2020,
     color: "Red",
     features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
   };
   
   console.log(car.features [1])

   //4
   let shop = {
    name: "Zara",
    location: "Tel Aviv",
    categories: ["clothes", "shoes", "Accessories"],
    products: [
        {name: "jacket" ,price: 70, quantity: 10},
        {name: "sunglasses", price: 80, quantity: 15},
        {name: "T-shirt", price: 60, quantity:12}
    ]
    }
function sumProducts (arr) {
        let sum = 0;
    for (let i = 0; i < shop.products.length; i++) {
        if (shop.products [i].name === arr){
            sum = shop.products[i].price *  shop.products [i].quantity;    
            return "The total price is" + " " + sum
        }; 
     }
            return "product doesnt exist"
    }    
    
console.log(sumProducts ("T-shirt"))

//EX1
//1
let person = {
    age: 30,
    height: 1.80,
    weight: 75
};

//2
function objectLength (){
    console.log(Object.keys(person).length);
}

objectLength () 

//3
let client = "john";
const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

function displayGroceries (){
    console.log (groceries.fruits)
}

displayGroceries ()

//2
function cloneGroceries (){
    let nameUser = client
        client = "betty";
    console.log (client)
    let shopping = groceries
    console.log(groceries);
    console.log(shopping)
    shopping.totalPrice = "35$"
    console.log(groceries);
    shopping.other.paid = false
    console.log(groceries);
}

cloneGroceries ()

//EX2
//1
const books = [
    {
        title : "the secret",
        Author : "Rhonda Byrne",
        alreadyRead : false    
    },
    // {
    //     title : "Rich Dad Poor Dad",
    //     Autor : "Robert Kiyosaki"
    //     alreadyRead : true
    // },
    // {
    //     title : "Thirteen Reasons Why",
    //     Autor : "jay asher"
    //     alreadyRead : true
    // }
];

function readTheBook () {
    for (let index = 0; index < books.length; index++) {
        let sentence =  `${books[index].title} by ${books[index].Author}`;
        books[index].alreadyRead?
            console.log('You already read '+ sentence):
            console.log('You still need to read '+ sentence);
    } 
}

readTheBook ();

//EX3
//1
let myPenguin = {
    name: "Parker",
    origin: "love birds",
    Autor: "Robert J. Sherman",
    
}

console.log(`Hello, Im a penguin and my name is ${myPenguin.name}`)

//3
myPenguin.canFly = false
console.log(myPenguin)

//4
myPenguin.chrip = function () {
    console.log(`CHIRP CHIRP! is this what penguins sound like?`)
}
myPenguin.chrip ()

//5 + 6
myPenguin.SayHello = function () {
    console.log(`Hello im a penguin and my name is ${this.name}`)
}
myPenguin.SayHello () 

//7
myPenguin.name = "Penguin McPenguinFace"
myPenguin.SayHello () 

// //8 + 9 + 10
// myPenguin.canFly = function (){
//     if (myPenguin.canFly = true){
//             console.log(`i can fly`)
//     } else if (myPenguin.canFly = false){
//         console.log(`No flying for me!`)
//     }
// }
// myPenguin.canFly();

// //11 + 12
// myPenguin.canFly = true
// myPenguin.canFly();

//13
function keyPrint () {
    for (let property in myPenguin) {
    console.log(`${property}`);
    }
}

keyPrint ()

//14
function keyPrint1 () {
    for (let property in myPenguin) {
    console.log(`${property}: ${myPenguin[property]} `);
    }
}

keyPrint1 ()

//EX4 -1
myPenguin.favoritefood = [
    "burger",
    "Pizza",
    "sushi" 
]

//2
console.log(myPenguin.favoritefood [1])

//3
let firstFavFood = myPenguin.favoritefood [0]
console.log(myPenguin.firstFavFood)

//4
myPenguin.favoritefood.push("pasta")
console.log(myPenguin.favoritefood)

//5
console.log(myPenguin.favoritefood.length)

//6
myPenguin.favoritefood [3] = "pineapples"
console.log(myPenguin.favoritefood)

//7
let lastFavFood  = myPenguin.favoritefood [myPenguin.favoritefood.length -1];
console.log(lastFavFood)

//8
function keyPrint2 () {
    for (let property in myPenguin.favoritefood) {
    console.log(`${property}: ${myPenguin.favoritefood[property]} `);
    }
}

keyPrint2 ()

//EX5
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };
  
  //1
  let penguins = [
    gunter,
    ramon,
    fred
  ]
  console.log (penguins)

  //2
  console.log(penguins[0])

  //3
  let secondPenguin = penguins[1]
  console.log(secondPenguin)

  //4
  console.log(penguins[penguins.length -1]);

  //5
  penguins.push(myPenguin)
  console.log(penguins)

  //6
  console.log(penguins.length)

  //7
  gunter.canFly = true
  console.log(gunter.canFly)

  //8
  gunter.sayHello ()

  //9
  function nameValue (){
      for (let i = 0; i < penguins.length; i++) {
        console.log(penguins[i].name)
      }
  }

  nameValue ()

//   //10
//   function SayHelloMethod (){
//     for (let i = 0; i < penguins.length; i++) {
//         penguins[i].sayHello();
//     }
// }

// SayHelloMethod ()

//11
// function addValue (){
//     for (let i = 0; i < penguins.length; i++) {
//         penguins[i].numberOfFeet = 2;
//     }
// }

// addValue ()
// // console.log(penguins)

//12
function PenguinCanFly (){
    for (let i = 0; i < penguins.length; i++) {
        if (penguins[i].canFly == true){
            console.log(`${penguins[i].name} can fly`)
        }
    }
}
PenguinCanFly ()

//EX6
//the same excrecise like EX0 - 1

//EX7
let school = {
    name: "Ironi Aleph",
    location: "Modiin",
    students: [ 
        {
            name: "Adam",
            age: 15,
            grade:8,
            classes: ["sport", "music"] 
        },   
        {
            name: "Bruno",
            age: 14,
            grade:7,
            classes: ["Math", "music"] 
        }
    ],   
    teachers: [
        {
            name:"Dana",
            subject:"Math",
            gradeLevels: ["7, 8, 9"]
        },
        {
            name:"Adele",
            subject:"music",
            gradeLevels: ["6, 7, 8"]
        }
    ]
}

function classTeacher (teacher, student) {
let studentIndex = school.students.indexOf(student)
let teacherIndex = school.teachers.indexOf(teacher)    
    // for (let i = 0; i < school.students.length; i++) {
    //     for (let j = 1; j < school.Teachers.length; j++) {
        for (let index = 0; index < school.teachers[teacherIndex].classes.length; index++) {
             if (school.students[studentIndex].grade === school.teachers[teacherIndex].classes[index]){
                return true 
             }
        }
    // }
    return false
// }
}
classTeacher ("Adele", "Bruno")

//EX8

const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };
  
function genreBooks(genre){
    let list = []
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].genre = genre){
            list.push(library.books[i].title)
        }
    }
    return list
}

genreBooks("Novel");


