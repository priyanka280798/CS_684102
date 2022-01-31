function getReq(url_api){
  const axios = require('axios');

  axios.get(url_api).then(
    res => {
      var resultant_data = res.data
      console.log(resultant_data);
    },
    error => {
      console.log(error);
    });
}
getReq('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team=the%20Eternals&member=Shaili&member=Priyanka&member=Suvineet');
