var key = 'b5238790541c39db2b120d5831c48c7b'
var cityFormEl = document.querySelector("#city-search")
var cityInputEl = document.querySelector('.search-btn')
var currentWeatherEl = document.querySelector("#weather")
var forecastWeatherEl = document.querySelector("#weekday-forecast")
var temps = []
// var DateTime = luxon.DateTime;
// console.log(DateTime)

// function for getting current weather
var getCurrentWeather = function(lat, lon){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key)
    .then(function(response) {
        return response.json()
    })
    .then(function(weatherData){
        console.log(weatherData)
        displayCurrentWeather(weatherData)
        displayForecast(weatherData)
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

var displayCurrentWeather = function (currentData) {
    var temp = currentData.current.temp
    var wind = currentData.current.wind_speed
    var humid = currentData.current.humidity
    var UV = currentData.current.uvi

    var tempEl = document.createElement("p")
    tempEl.innerHTML = "<span> Temp: </span>" + temp + "&deg" + "F"
    var windEl = document.createElement("p")
    windEl.innerHTML = "<span> Wind: </span>" + wind + "MPH"
    var humidEl = document.createElement("p")
    humidEl.innerHTML = "<span> Humidity: </span>" + humid + "%"
    var UVEl = document.createElement("p")
    UVEl.innerHTML = "<span> UV Index: </span>" + UV
    
    currentWeatherEl.append(tempEl, windEl, humidEl, UVEl)
    
 }

 var displayForecast = function(forecastData){
      for(var i = 0; i < 5; i++ ){
         var temp = forecastData.daily[i].temp.day
         var wind = forecastData.daily[i].wind_gust
         var humid = forecastData.daily[i].humidity
         var cards = document.createElement('div')
         cards.classList.add('card', 'col-2')

         var temp_el = document.createElement("p")
         temp_el.innerHTML = "<span> Temp: </span>" + temp + "&deg" + "F"
         var wind_el = document.createElement('p')
         wind_el.innerHTML = "<span> Wind: </span>" + wind + "MPH"
         var humid_el = document.createElement('p')
         humid_el.innerHTML = "<span> Humidity: </span>" + humid + "%"
         cards.append(temp_el, wind_el, humid_el)
         forecastWeatherEl.append(cards)
         
         
     }

 }

//getCityLocation(city)
cityInputEl.addEventListener('click', handleCityInput)