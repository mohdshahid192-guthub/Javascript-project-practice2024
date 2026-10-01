 function invokeDelay(callback){
  setTimeout(() => {
    console.log(callback);
  }, 2000)
};

invokeDelay("Project done");