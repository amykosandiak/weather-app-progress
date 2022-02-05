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
  let citySearch = (document.querySelector("#citySearch").innerHTML =
    response.data.name);
  document.querySelector("#todaysTemp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
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
