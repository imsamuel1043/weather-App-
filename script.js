// const apiKey = "YOUR_API_KEY"; // <-- Get it free from OpenWeather (openweathermap.org)

// async function getWeather() {
//   const city = document.getElementById("cityInput").value;
//   if (!city) return alert("Please enter a city name");

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("City not found");

//     const data = await response.json();

//     document.getElementById("cityName").textContent = data.name;
//     document.getElementById("temperature").textContent = Math.round(data.main.temp);
//     document.getElementById("feelsLike").textContent = Math.round(data.main.feels_like);
//     document.getElementById("wind").textContent = data.wind.speed;

//     // Rain info (may be missing if no rain)
//     const rain = data.rain ? data.rain["1h"] || data.rain["3h"] : 0;
//     document.getElementById("rain").textContent = rain;

//     // Weather icon
//     const icon = data.weather[0].icon;
//     document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//   } catch (error) {
//     alert(error.message);
//   }
// }


async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city");
    return;
  }

  const apiKey = "13b1a92af4b643a690353553251509"; 

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    console.log("Weather data:", data);

    document.getElementById("cityName").textContent = data.location.name;
    document.getElementById("temperature").textContent = Math.round(data.current.temp_c);
    document.getElementById("feelsLike").textContent = Math.round(data.current.feelslike_c);
    document.getElementById("wind").textContent = data.current.wind_kph + " km/h";
    document.getElementById("weatherIcon").src = "https:" + data.current.condition.icon;
  } catch (err) {
    console.error(err);
    alert("Could not get weather data");
  }
}



        
        
