// const makeOrder = dish => {
//      const DELAY = 1000;

const { rejects } = require("assert")

//      return new Promise ((resolve, reject) => {
//           const passed = Math.random() > 0.5;

//           setTimeout(() => {
//                if(passed) {
//                     resolve('Вот ваше блюдо');
//                }

//                reject('Извините закончились продукты');
//           }, DELAY);
//      });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//      console.log("onMakeOrderSuccess  result:", result);    
// };

// function onMakeOrderError(error) {
//      console.log("onMakeOrderError  error:", error);    
// };


// * Промисификация "синхронных" функций
// const makeOrder = dish => {
//      return  Promise.resolve(`Вот ваше заказ: ${dish}`);    
// };

// makeOrder('пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//      console.log("onMakeOrderSuccess  result:", result);    
// };



// const fetchPokemonId = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
// };

// fetchPokemonId(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonId(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonId(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//      console.log("onFetchSuccess  pokemon:", pokemon);  
// };

// function onFetchError(error) {
//      console.log("onFetchError  error:", error);
//      console.log('Это в блоке catch');    
// };


const makePromise = () => {
     return new Promise((resolve, reject) => {
          const passed = Math.random() > 0.5;
          if (passed) {
               resolve('This is resolve');
          }

          reject('fall down - reject');
     });
};

makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));