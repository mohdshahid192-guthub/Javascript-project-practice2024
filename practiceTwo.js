function callbackBasedFunction(arg1, arg2, callback){
   setTimeout(() =>{
  let result = arg1 + arg2;
  if (result % 2 !== 0){
    callback(null, result);
  }
  else{
    callback(new Error("Result is odd"), null);
  }
   }, 1000);

}

function promiseBasedFunction(arg1, arg2){
  return new Promise((resolve, reject) => {
    callbackBasedFunction(arg1, arg2, (error, result) => {
    if(error){
      reject(error)
    }
    else{
      resolve(result)
    }
  });
  });
}


promiseBasedFunction(2, 6)
.then((result) => {
  console.log(result);
  
})
.catch((error) => {
  console.log('Error', error.message);
  
})

