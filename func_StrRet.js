import "isomorphic-fetch"

function getData(){
  const fetch_query = fetch('https://cs684api.7g2rji63c728k.us-east-1.cs.amazonlightsail.com/hw3?team=The%20Eternals');

  fetch_query.then(resp =>
            resp.json()).then(data => {
                console.log(data.team)
            })
}

getData()
