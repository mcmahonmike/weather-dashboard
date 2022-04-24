var key = 'b5238790541c39db2b120d5831c48c7b'
//var city = "Milwaukee"
var cityFormEl = document.querySelector("#city-search")
var cityInputEl = document.querySelector('.btn')
var currentWeatherEl = document.querySelector("#current-weather")


var getCurrentWeather = function(lat, lon){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key)
    .then(function(response) {
        return response.json()
    })
    .then(function(weatherData){
        console.log(weatherData)
        //getCityLocation(weatherData)
    })
}

var getCityLocation = function(city){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" +key)
    .then(function(response){
      return response.json()
    })
      .then(function(data){
     console.log(data)
     getCurrentWeather(data[0].lat, data[0].lon)
    })

    .catch(function (err) {
        console.log(err)
    })
    
}

var handleCityInput = function(event){
    event.preventDefault();
    var cityName = cityFormEl.value;
    console.log(cityName)
    getCityLocation(cityName);
    

if (cityName) {
  
  cityInputEl.value = "";
  var searchEl = document.createElement("h3")
  searchEl.innerHTML = cityName
  
  currentWeatherEl.appendChild(searchEl)

} 
}
//     console.log(event);
// }

// var displayCurrentWeatcher = function () {
    
// }

//getCityLocation(city)
cityInputEl.addEventListener('click', handleCityInput)