var apikey = "4e35ef17dcaf3aef4c3cf979343d2d51";
function displayWeather(cityName) {
  var currentweatherdata = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=imperial`;

  fetch(currentweatherdata)
    .then(function (response) {
      return response.json();
    })
    .then(function (formattedcurrentweather) {
      console.log(formattedcurrentweather);
      var onecalldata = `https://api.openweathermap.org/data/2.5/forecast?lat=${formattedcurrentweather.coord.lat}&lon=${formattedcurrentweather.coord.lon}&appid=${apikey}&units=imperial`;

      fetch(onecalldata)
      .then(function(response){

        return response.json();

      })
      .then(function(formattedonecall){

        console.log(formattedonecall)
      })

    });
}
displayWeather("austin")