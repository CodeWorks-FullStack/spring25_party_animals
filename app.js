// SECTION state 🧠 (global variables)

const partyAnimals = [
  {
    name: 'mike t',
    emoji: '🦍',
    partyLocation: 'waterfall'
  },
  {
    name: 'barry',
    emoji: '🦈',
    partyLocation: 'reef'
  },
  {
    name: 'bill',
    emoji: '🦢',
    partyLocation: 'wetlands'
  },
  {
    name: 'remy',
    emoji: '🐒',
    partyLocation: 'waterfall'
  },
  {
    name: 'road runner',
    emoji: '🐦',
    partyLocation: 'desert'
  },
  {
    name: 'roman',
    emoji: '🐍',
    partyLocation: 'desert'
  },
  {
    name: 'lucille',
    emoji: '🦭',
    partyLocation: 'reef'
  },
  {
    name: 'doug',
    emoji: '🦎',
    partyLocation: 'desert'
  },
  {
    name: 'steve',
    emoji: '🐉',
    partyLocation: 'desert'
  },

]

const locations = ['wetlands', 'desert', 'reef', 'waterfall']

// !SECTION


// SECTION logic/actions ⚙️

function changeAnimalLocations() {
  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i]
    animal.partyLocation = getRandomLocation()
  }

  drawWaterfallAnimals()

  drawDesertAnimals()

  drawAnimalsByLocation('reef')

  drawAnimalsByLocation('wetlands')
}

function getRandomLocation() {
  const randomLocationIndex = Math.floor(Math.random() * locations.length)
  const randomLocation = locations[randomLocationIndex]
  return randomLocation
}

// !SECTION

// SECTION draw ✏️

function drawWaterfallAnimals() {
  let emojis = ''

  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i]
    if (animal.partyLocation == 'waterfall') {
      emojis += animal.emoji
    }
  }


  console.log('waterfall animal emojis', emojis);

  const waterfallElem = document.getElementById('waterfall')

  waterfallElem.innerText = emojis

}

function drawDesertAnimals() {
  let emojis = ''

  const desertAnimals = partyAnimals.filter((animal) => animal.partyLocation == 'desert')

  for (let i = 0; i < desertAnimals.length; i++) {
    const animal = desertAnimals[i];
    emojis += animal.emoji
  }

  const desertElem = document.getElementById('desert')

  desertElem.innerText = emojis
}

function drawAnimalsByLocation(locationName) {

  let emojis = ''

  const animalsAtLocation = partyAnimals.filter((animal) => animal.partyLocation == locationName)

  console.log('filtering by location name', locationName);
  console.log(animalsAtLocation);

  for (let i = 0; i < animalsAtLocation.length; i++) {
    const animal = animalsAtLocation[i];
    emojis += animal.emoji
  }

  const partyLocationElem = document.getElementById(locationName)

  partyLocationElem.innerText = emojis

}

// !SECTION

// SECTION page load 🔃

drawWaterfallAnimals()

drawDesertAnimals()

drawAnimalsByLocation('reef')

drawAnimalsByLocation('wetlands')


// !SECTION