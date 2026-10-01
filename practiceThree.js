function makeGetRequest(url){
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error (`HTTP Error status ${response.status}`);
      }
      
        return response.json();
      
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => reject(error))
  });
}


makeGetRequest('https://fake-json-api.mock.beeceptor.com/users')
.then(data => {
  console.log("Response data:" + data);
  
})
.catch(error => console.log(error.message)
)