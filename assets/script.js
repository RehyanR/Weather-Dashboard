$(document).ready(function () {
  $("#search-form").submit(function (event) {
    event.preventDefault();
    var city = $("#search-input").val();
    getWeatherData(city);
  });

  function getWeatherData(city) {
    var apiKey = "5053ec4fe604b73e4ed031612d75c596"; // Added my API Key from OpenWeatherMap
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    $.get(apiUrl)
      .done(function (data) {
        displayWeather(data);
        saveToLocalStorage(city);
      })

      .fail(function () {
        $("#today").html(
          "<p>Failed to retrieve weather data. Please try again later.</p>"
        );
      });
  }

  function displayWeather(data) {
    var cityName = data.city.name;
    var date = new Date(data.list[0].dt * 1000).toLocaleDateString();
    var iconUrl = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
    var temperature = `${Math.round(data.list[0].main.temp)}°C`;
    var humidity = `Humidity: ${data.list[0].main.humidity}%`;
    var windSpeed = `Wind Speed: ${data.list[0].wind.speed} m/s`;

    var weatherHTML = `
      <h2>${cityName}</h2>
      <p>Date: ${date}</p>
      <img src="${iconUrl}" alt="Weather Icon">
      <p>Temperature: ${temperature}</p>
      <p>${humidity}</p>
      <p>${windSpeed}</p>
    `;

    $("#today").html(weatherHTML);
    displayForecast(data);
  }

  function displayForecast(data) {
    var forecastHTML = "<h2>5-Day Forecast</h2>";
    for (var i = 0; i < data.list.length; i += 8) {
      var date = new Date(data.list[i].dt * 1000).toLocaleDateString();
      var iconUrl = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
      var temperature = `${Math.round(data.list[i].main.temp)}°C`;
      var humidity = `Humidity: ${data.list[i].main.humidity}%`;

      forecastHTML += `
        <div class="forecast-item">
          <p>Date: ${date}</p>
          <img src="${iconUrl}" alt="Weather Icon">
          <p>Temperature: ${temperature}</p>
          <p>${humidity}</p>
        </div>
      `;
    }
    $("#forecast").html(forecastHTML);
  }
});
