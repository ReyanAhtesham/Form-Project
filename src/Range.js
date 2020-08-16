var data = JSON.stringify({
    "data": {
      "firstName": "Reyan",
      "lastName": "Gilani",
      "email": "reyanahtesham@gmail.com",
      "password": "hbybuybuvugv"
    },
    "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a"
  });
  
  var xhr = new XMLHttpRequest();
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.raisely.com/v3/signup");
  xhr.setRequestHeader("content-type", "application/json");
  
  xhr.send(data);
  console.log("oisdnf")