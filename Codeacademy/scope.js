const city = "New York City";
const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};
console.log(logCitySkyline());


const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky(){       //here are the parameters being defined
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky(satellite, galaxy, stars)); //here are the variables being used as arguments

function logVisibleLightWaves(parms) {
    const lightWaves = 'Moonlight'
    console.log(lightWaves);
} 
console.log(logVisibleLightWaves());
//Moonlight and undefined 
console.log(lightWaves);
// We get an Reference Error


// We are gonna experiment now with overwriting a variable 
const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
    stars = 'Sirius'
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
/* You’ll notice that the global variable stars was reassigned to 'Sirius'. 
In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. 
This is bad practice in code maintainability and could impact our program in ways we do not intend.*/



const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    if (region === 'The Arctic') {
       
    }
    
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();
