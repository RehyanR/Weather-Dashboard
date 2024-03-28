$(document).ready(function () {
  $("#search-form").submit(function (event) {
    event.preventDefault();
    var city = $("#search-input").val();
    getWeatherData(city);
  });
});

function getWeatherData(city) {
  var apiKey = "5053ec4fe604b73e4ed031612d75c596"; // Added my API Key from OpenWeatherMap
  var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
}

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
