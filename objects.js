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