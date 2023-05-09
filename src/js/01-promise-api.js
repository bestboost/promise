const promise = new Promise((resolve, reject) => {
     const canFulfill = Math.random() > 0.5;
 
     setTimeout(() => {
      if(canFulfill) {
          resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
      }

      reject('Промис выполнился с ошибкой (отклонён, rejected)');
}, 2000);
});
console.log("promise:", promise)