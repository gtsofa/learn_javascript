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

// Looping Through Objects

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

/* 1
'[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.


*/
for (let crewrole in spaceship.crew){
console.log(`${crewrole}: ${spaceship.crew[crewrole].name}`)
};

// Write your code below
/* 2
'[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.


*/
for(let acrew in spaceship.crew){
  console.log(`'${spaceship.crew[acrew].name}: ${spaceship.crew[acrew].degree}'`)
};

// ADVANCED OBJECTS
/* The this keyword references the calling object which provides access to the calling object's properties*/


/**
 * add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.
 */

const robot = {
  model : '1E78V2',
  energyLevel : 100,

  provideInfo(){

    
    console.log('I am ' + this.model +'and my current energy level is' + this.energyLevel);
}
};
robot.provideInfo();

// Arrow Functions and this
//NOTE: don't use this keyword when using arrow function

const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();// prints undefined

 // use a normal method to correct that error
 const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();// prints correctly

// Privacy
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge();


// Getters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

// Setters
/**
 * Example 
 * const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
 */
