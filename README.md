# Weather Dashboard

This weather dashboard application allows users to view current and future weather conditions for multiple cities. It utilises the 5 Day Weather Forecast API provided by OpenWeatherMap to retrieve weather data. The base URL for API calls is structured as follows: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.

## Features

* Current Weather Conditions: Users can search for a city and view its current weather conditions, including the city name, date, weather icons, temperature, humidity and wind speed.

* 5-Day Forecast: The dashboard provides a 5-day forecast for the searched city, displaying the date, weather icons, temperature and humidity for each day.

* Search History: The application stores search history using localStorage, allowing users to easily access previously searched cities.

# Usage

* Search for a City: Enter the name of the city you want to check the weather for in the search input field and click on the "Search" button.

* View Current Weather: Upon searching for a city, the dashboard will display the current weather conditions for that city.

* View Future Weather: Users can view the 5-day forecast for the searched city to plan ahead.

* Access Search History: Previously searched cities are stored in the search history section for easy access. Click on any city in the search history to view its current and future weather conditions again.

## API Usage

To access weather data, the application makes API calls to OpenWeatherMap's 5 Day Weather Forecast API. Ineeded to register for an API key on OpenWeatherMap's website and replace {API key} in the base URL with my actual API key.

## Technologies Used

HTML
CSS
JavaScript
OpenWeatherMap API
localStorage

## Screenshot

![View of completed application showing todays forecast and City search hisstory](<assets/images/displaying histoy and forecast.png>)
![Displaying 5 day weather forecast data](<assets/images/5 day forecast.png>)
![Error message displayed when data could not be gathered](<assets/images/error message.png>)


## Getting Started

Clone this repository to your local machine.
Register for an API key on the OpenWeatherMap website.
Replace {API key} in the base URL with your actual API key.
Open the index.html file in your web browser to launch the weather dashboard application.

## Credits

* This application utilises the 5 Day Weather Forecast API provided by OpenWeatherMap.
* W3Schools
* YouTube

## License

Distributed under the MIT License. See LICENSE for more information. IT License Copyright (c) 2024 Rehyan Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.