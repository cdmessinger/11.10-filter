const planets = [
     { name: "Mercury", temperature: 440, distance: 0.39 },
     { name: "Venus", temperature: 737, distance: 0.72 },
     { name: "Earth", temperature: 288, distance: 1 },
     { name: "Mars", temperature: 253, distance: 1.5 },
     { name: "Jupiter", temperature: 163, distance: 5.2 },
     { name: "Saturn", temperature: 133, distance: 9.58 },
     { name: "Uranus", temperature: 78, distance: 19.22 },
     { name: "Neptune", temperature: 73, distance: 30.05 },
];

//filter plents between 253K 323K AND between 0.75AU and 1.5AU

let hospitablePlanets = planets.filter(function (planet) {
     if (planet.temperature < 253 || planet.temperature > 323) {
          return false;
     }
     if (planet.distance < 0.75 || planet.distance > 1.5) {
          return false;
     }
     return true;
});
