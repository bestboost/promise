const promise = new Promise((resolve, reject) => {
     const canFulfill = Math.random() > 0.5;
 
     setTimeout(() => {
      if(canFulfill) {
          resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
      }

      reject('Промис выполнился с ошибкой (отклонён, rejected)');
     }, 2000);
});

// promise.then(onFulfilled, onRejected);

function onFulfilled(result){
    console.log("onFulfilled -> onFulfilled:");
    console.log(result);
};

function onRejected(error){
    console.log("onRejected -> onRejected:");
    console.log(error);
};

promise
   .then(onFulfilled)
   .then(x => {
    console.log("x :", x );

    return 10;
   })
   .then(y => {
    console.log("y:", y);

     throw new Error('ошибка в третьем then');

    return 5;
   })
   .then(z => {
    console.log("z:", z);    
   })
   .catch(error => console.log(error))
   .finally(() => console.log('Я буду выполнен в любом случае'));
