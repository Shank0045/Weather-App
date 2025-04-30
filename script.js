const val = document.querySelector(".input");

const enter = document.querySelector(".glass");

async function defult() {
 const url =
    "http://api.weatherapi.com/v1/current.json?key=0ef84a1c2055462db35122159251103&q=bengaluru&aqi=no";

  let res = await fetch(url);
  let data = await res.json();

  document.querySelector(".degree p").innerHTML =
    data.current.temp_c + `<sup>o</sup><p>deg</p>`;
  document.querySelector(".place p").innerText = data.location.name;
  document.querySelector(".humidity p").innerHTML = data.current.humidity + "%";
  document.querySelector(".windspeed p").innerHTML =
    data.current.wind_kph + "Km/h";
}

defult();

async function weather(place) {
  try {
    let baseurl = `http://api.weatherapi.com/v1/current.json?key=0ef84a1c2055462db35122159251103&q=${place}&aqi=no`;

    let res = await fetch(baseurl);
    let data = await res.json();
    console.log(data);
    console.log(data.current.temp_c);

    document.querySelector(".degree p").innerHTML =
      data.current.temp_c + `<sup>o</sup><p>deg</p>`;
    document.querySelector(".place p").innerHTML = data.location.name;
    document.querySelector(".humidity p").innerHTML =
      data.current.humidity + "%";
    document.querySelector(".windspeed p").innerHTML =
      data.current.wind_kph + "Km/h";

    if (data.current.temp_c <= 9) {
      document.querySelector(".sunimg img").src = "images/ice.svg";
    } else if (data.current.temp_c <= 20) {
      document.querySelector(".sunimg img").src = "images/cloud.svg";
    } else if (data.current.temp_c > 30) {
      document.querySelector(".sunimg img").src = "images/sun.svg";
    }
  } catch (e) {
    alert(`Enter a valid name  ${e}`);
  }
}
