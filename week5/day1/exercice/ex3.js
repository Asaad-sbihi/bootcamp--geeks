// Resolve with value 3
const promiseResolved = Promise.resolve(3);
promiseResolved.then(value => console.log(value));

// Reject with error message "Boo!"
const promiseRejected = Promise.reject("Boo!");
promiseRejected.catch(error => console.log(error)); 