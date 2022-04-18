var key = 'b5238790541c39db2b120d5831c48c7b'
var city = "Milwaukee"


var getCurrentWeather = function(){
    fetch()
}

var getCityLocation = function(){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" +key)
    .then(function(response){
    response.json().then(function(data){
     console.log(data)
    })


    })
}
getCityLocation(city)