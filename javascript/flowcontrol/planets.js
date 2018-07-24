
var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter',
               'Saturn', 'Uranus', 'Neptune'];

for (let idx in planets) {
    console.log(planets[idx]);
}

console.log("************")

for (let planet of planets) {
    console.log(planet);
}
