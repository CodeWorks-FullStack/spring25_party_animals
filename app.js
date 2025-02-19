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

// !SECTION


// SECTION logic/actions ⚙️

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

// !SECTION