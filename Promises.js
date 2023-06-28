let promise = new Promise((resolve, reject) => {
    resolve('Hello, I am a Promise!');
})
  
promise.then((promise_kept_message) => {
    console.log(promise_kept_message);
}, (error) => {
  
// This function is invoked this time
// as the Promise is rejected.
console.log(error); })
