import '../css/common.css';

// fetch('http://pokeapi.co/api/v2/pokemon/ditto')
// .then(r => r.json)
// .then(console.log);

fetch('https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331')
.then(r => r.json)
.then(console.log);