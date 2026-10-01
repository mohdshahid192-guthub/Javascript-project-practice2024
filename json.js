

// fetch('https://fake-json-api.mock.beeceptor.com/users')
// .then(response => {
//   if(!response){
//     return new Error("Error occured")
//   }
//  const newObject = response.json()
  
//  return newObject
  
// })
// .then(data => {
//  toUSeTheData(data[1].name)
  
  
// })

// .catch(error => {
//   console.log(error.message);
  
// })

// let magic
// function toUSeTheData(callback){
//  magic = callback;
// // return magic;
// console.log(magic);

// }



// fetch('https://fake-json-api.mock.beeceptor.com/users')
// .then(response => {
//   return response.json()
// })
// .then(data =>{
//   console.log(data);
  
// })
// .catch(error =>{
//   console.log(error);
  
// });
let data = null;
async function userDataFetch(){
  if(!data){
  const response = await fetch("https://json-placeholder.mock.beeceptor.com/posts");
 data = await response.json()
}
}

function authenticateUser(num){
 
    if(data){
    const user = data.find(item => item.id === num)
    if(user){
     console.log("authentication successful");
     
    }
    else{
      console.log("No user found");
      
    }
  }
  else{
    console.log("No data found");
    
  }
  
}

userDataFetch().then(() => {
  authenticateUser();
});


