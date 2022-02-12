let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let milliseconds = now.getMilliseconds();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

console.log(date);
console.log(milliseconds);
console.log(day);
console.log(year);
console.log(month);

let todaysDate = `${day} ${month} ${date}, ${year}<br>`;

function showWeather(response) {
  let temperatureElement = document.querySelector("#todaysTemp");
  let cityElement = document.querySelector("#citySearch");
  let descriptionElement = document.querySelector("#todaysDescription");

  let dateElement = document.querySelector("#todaysDate");

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  dateElement.innerHTML = todaysDate(response.data.dt * 1000);
}

function search(city) {
  let apiKey = "afe09f7274f1df9fa9fce1bf37473de0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function clickSubmit(event) {
  event.preventDefault();
  let citySearchElement = document.querySelector("#citySearch");
  search(citySearchElement.value);
}

let form = document.querySelector("#searchLocation");
form.addEventListener("submit", clickSubmit);

search("Adelaide");
