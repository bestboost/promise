import '../css/common.css';

const horses = [
     'Secretariat',
     'Eclipse',
     'West Australian',
     'Flying Fox',
     'Seabiscuit',
   ];
let raceCount = 0;

const refs = {
     startBtn: document.querySelector('.js-start-race'),
     winerField: document.querySelector('.js-winner'),
     progressField: document.querySelector('.js-progress'),
     tableBody: document.querySelector('.js-results-table > tbody'),

};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
     raceCount += 1;
     const promises = horses.map(run);

     updateWinnerField('');
     updateProgressField('🤖 Заезд начался, ставки не принимаются!');
     determineWiner(promises);
     waitForAll(promises);
};

function determineWiner(horsesP) {
     Promise.race(horsesP).then(({horse, time}) => {
          updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
          времени`);
          updateResultsTable({ horse, time, raceCount })
     });
};

function waitForAll(horsesP) {
     Promise.all(horsesP).then(() => {
          updateProgressField('📝 Заезд окончен, принимаются ставки.');
     });  
};

function updateWinnerField(message) {
     refs.winerField.textContent = message;
};

function updateProgressField(message) {
     refs.progressField.textContent = message;
};

function updateResultsTable({ horse, time, raceCount }) {
     const tr = `<tr><td>${raceCount}</td><td>${horse}</td><td>${time}</td></tr>`;
     refs.tableBody.insertAdjacentHTML('beforeend', tr);
   };

     function run (horse) {
          return new Promise((resolve) => {
             const time = getRandomTime(2000, 3500)
    
             setTimeout(() => {

                   resolve({horse, time});
                  }, time);
               })
            };
        
     
     function getRandomTime(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
     };