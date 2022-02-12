let apiKey = "afe09f7274f1df9fa9fce1bf37473de0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=${apiKey}&units=metric`;

console.log(apiUrl);

function askForCountry() {
  let country = prompt("What's your country?").toLowerCase().trim();

  if (country === "brazil" || country === "portugal") {
    alert("You speak Portuguese! Boa pá!");
  } else {
    alert("You speak another language");
  }
}

askForCountry();

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

let todaysDateDisplay = `${day} ${month} ${date}, ${year}`;
