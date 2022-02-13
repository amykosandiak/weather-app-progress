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

let todaysDate = `${day} ${month} ${date}, ${year}`;

function showWeather(response) {
  document.querySelector("#citySearch").innerHTML = response.data.name;

  document.querySelector("#todaysTemp").innerHTML = `Currently ${Math.round(
    response.data.main.temp
  )}°C (and probably feels like ${Math.round(
    response.data.main.feels_like
  )}°C)`;

  document.querySelector(
    "#todaysWindSpeed"
  ).innerHTML = `Wind speed is ${Math.round(
    response.data.wind.speed
  )} metres/second`;

  document.querySelector(
    "#todaysHumidity"
  ).innerHTML = `Humidity is ${response.data.main.humidity}%`;

  document.querySelector(
    "#todaysDescription"
  ).innerHTML = `Currently: ${response.data.weather[0].description}`;

  currentWeatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#citySearch").value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);

  let location = document.querySelector("#location");
  location.innerHTML = `${citySearch.value}<br> ${todaysDate}`;
}

let searchButton = document.querySelector("#searchLocation");
searchButton.addEventListener("click", search);

let currentWeatherIcon = document.querySelector("#currentIcon");
