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