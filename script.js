// select dom
const cityNameElement = document.querySelector("#cityName");
const cityCodeElement = document.querySelector("#cityCode");
const localDateElement = document.querySelector("#localDate");
const localTimeElement = document.querySelector("#localTime");
const refreshButtonElement = document.querySelector("#refreshButtonElement");
const weatherImgElement = document.querySelector(".weather_img");
const mainTemperatureElement = document.querySelector("#mainTemperature");
const tempDescriptionElement = document.querySelector("#tempDescription");
const celsiusElement = document.querySelector("#celsius");
const fahrenheitElement = document.querySelector("#fahrenheit");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");
const mainTempHotElement = document.querySelector("#mainTempHot");
const mainTempLowElement = document.querySelector("#mainTempLow");

// initial data
const apiKey = "126688fe7925400d81763c4bb6265bba";
const cityName = "riyad";
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthList = [
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

// get time and date
const setTimeAndDate = () => {
  let dateObj = new Date();
  let day = dayList[dateObj.getDay()];
  let month = monthList[dateObj.getMonth()];
  let date =
    dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
    let year = dateObj.getFullYear();
  localDateElement.innerHTML = `${day} ${month} ${date} ${year}`;
  return function setTime() {
    let hour = dateObj.getHours() % 12;
    let minute = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    let am_pm = hour > 12 ? "am" : "pm";
    return localTimeElement.innerHTML = `${hour}:${minute}:${seconds} ${am_pm}`;
  };
};
setInterval(() => {
  setTimeAndDate()();
}, 1000);

let linkApi = async (cityName, apiKey) => {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
  );
  return await response.json();
};

let waitForResponse = async (cityName, apiKey) => {
  let getData = await linkApi(cityName, apiKey);
  return getData;
};

let result = waitForResponse(cityName, apiKey);
result.then((data) => console.log(data.weather[0]));
