//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function printFavs(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (typeof obj[Object.keys(obj)[i]] === 'object') {
            if (Object.keys(obj)[i] === 'shakes') {
                console.log(`Some of my favorite ${Object.keys(obj)[i]} are:`);
                const shakes = obj[Object.keys(obj)[i]][0];
                for (let key in shakes) {
                    console.log(`${shakes[key]}`);
                }
            } else {
                console.log(`Some of my favorite ${Object.keys(obj)[i]} are ${Object.values(obj)[i]}`);
            }
        } else {
            console.log(`Some of my favorite ${Object.keys(obj)[i]} are ${Object.values(obj)[i]}`);
        }
    }
}

printFavs(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {return `${name} is ${age} years old`};
    this.oneYearOlder = () => {age = age + 1};
    this.addAge = (num) => {age = age + num};
    
};

let mike = new Person('Mike', 38)

console.log(mike.printInfo())
mike.oneYearOlder()
mike.oneYearOlder()
mike.oneYearOlder()
console.log(mike.printInfo())
mike.addAge(10)
console.log(mike.printInfo())

let nina = new Person('Nina', 24)

console.log(nina.printInfo())
nina.oneYearOlder()
nina.oneYearOlder()
nina.oneYearOlder()
console.log(nina.printInfo())
nina.addAge(2)
console.log(nina.printInfo())

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringBig = (string) => {
    return new Promise( (resolve, reject) => {
        if (string.length > 10) {
            resolve(string)
        } else {
            reject(false)
        }
    })
}

isStringBig('Hello i am a long string!!!')
.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small Number')
})

isStringBig('Hello')
.then( (result) => {
    console.log('Big word')
})
.catch( (error) => {
    console.log('Small Number')
})