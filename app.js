//console.log('Start')
//setTimeout(() => {
   // console.log('2 seconds timer')
//}, 2000)
//setTimeout(() => {
  //  console.log('0 second timer')
//}, 0);
//console.log('Stop')

 const request = require('request')

 const url = 'https://api.weatherStack.com?access_key=9a5c6003f5fc571ded9422b181f75541&query=37.8267,-122.4233'
 request({ url: url, json: true }, (error, response) => {
      console.log(response.body.current)
 })

 
