// OBJECTS

let spaceship = {}; // spaceship is an empty object

let fasterShip = {
    "color":"silver",
    "Fuel Type":"Turbo Fuel"
  };



// Bracket Notation
['A', 'B', 'C'][0]; // Returns 'A'

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];
console.log(spaceship['Active Mission']);// true

// Property Assignment
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 8;
delete spaceship['Secret Mission'];
console.log(spaceship);

// Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  } 
}
alienShip.retreat();

// invoking multiple methods by commas
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let takeOffMessage = 'Spim... Borp... Glix... Blastoff!';

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  
  takeOff() {
  console.log(takeOffMessage)
}
};
alienShip.retreat();
alienShip.takeOff();

// Nested Objects
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
console.log(capFave);
spaceship.passengers = [
  {name: 'Space Dog',
  age: 32,
  location: 'Watamu'}
];
let firstPassenger = spaceship.passengers[0].name;
console.log(firstPassenger);

// Pass By Reference

let functionName = objectParam => {
  objectParam['Property Name'] = 'New Property Value';
};

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = objectParam => {
  objectParam['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
  obj['disabled'] = true;
};

// Pass by Reference
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = objectParam => {
  objectParam['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = obj => {
  obj.disabled = true;
};

// calling the functions
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
console.log(spaceship);


