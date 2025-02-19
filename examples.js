
// methods
// method is a function that exists on an object

const cat = {
  name: 'Gopher',
  favoriteFood: 'bread',
  // this is a method
  sayMeow: function () {
    // this always refers to a member of the same object
    return `Meow I am a cat and my name is ${this.name}`
  }
}

// array methods

const doggies = [
  {
    name: 'dipper',
    hasLongHair: true,
    isStinky: false,
    favoriteToys: ['ball', 'snow']
  },
  {
    name: 'pluto',
    hasLongHair: false,
    isStinky: true,
    favoriteToys: ['ball', 'snow', 'stuffed animals']
  },
  {
    name: 'jackson',
    hasLongHair: true,
    isStinky: true,
    favoriteToys: ['ball']
  }
]

// add element to end of array
doggies.push({
  name: 'hooper',
  hasLongHair: false,
  isStinky: false,
  favoriteToys: ['sticks']
})

// add element to beginning of array
doggies.unshift({
  name: 'rusty',
  hasLongHair: true,
  isStinky: true,
  favoriteToys: ["children's legs"]
})

// first argument is where to start splicing, second argument is how many items to remove at first argument, third argument is what to put in at first argument 
doggies.splice(2, 0, {
  name: 'mocha',
  hasLongHair: false,
  isStinky: true,
  favoriteToys: ['rocks']
})

// removes 1 element at index of 0
doggies.splice(0, 1)

// a different way of writing a function
const getDoggy2 = function () {
  console.log('I am a function!');
}

// a different way of writing a function
const getDoggy3 = () => {
  console.log('I am also a function');
}

getDoggy2()
getDoggy3()

function getDoggy(doggy) {

  if (doggy.name == 'pluto') {
    return true
  }

  return false
}

// NOTE find is a higher order function (a function that takes in another function as an argument)
// NOTE getDoggy is a callback function (a function that some other function will invoke and run for us)
const foundDoggy = doggies.find(getDoggy)

const otherFoundDoggy = doggies.find((doggy) => {
  if (doggy.name == 'dipper') {
    return true
  }

  return false
})

// look through the doggies and find me the doggy where the doggy's name is mocha
const mochaDoggy = doggies.find(dog => dog.name == 'mocha')

// finds the FIRST dog that is stinky
const stinkyDoggy = doggies.find(dog => dog.isStinky == true)

const stinkyDogs = []

for (let i = 0; i < doggies.length; i++) {
  const dog = doggies[i];
  if (dog.isStinky == true) {
    stinkyDogs.push(dog)
  }

}

console.log('stinky dogs', stinkyDogs);


// const otherStinkyDogs = doggies.filter(dog => dog.isStinky == true)
// NOTE finds all of the dogs that are stinky and returns them in a new array
const otherStinkyDogs = doggies.filter(dog => dog.isStinky)

console.log('other stinky dogs', otherStinkyDogs);

// NOTE forEach is essentially a for loop
doggies.forEach(dog => dog.favoriteToys.push('bone'))

