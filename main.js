import moment from "moment"
const form = document.forms.namedItem('weather-form')
const inp = document.querySelector('#search')
const img = document.querySelector('.weather_logo')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const wind = document.querySelector('.wind')
const hum = document.querySelector('.hum')
const btn = document.querySelector('button')
form.onsubmit = async (e) => {
    e.preventDefault();
    const url = "https://api.weatherstack.com/current?access_key=0baa396afd94e84ca2513ab9fffe0840&query=" + inp.value;
    const options = {
        method: "GET",
    };
  
    try {
        const res = await fetch(url, options);
        const result = await res.json();
  
        console.log(result);
        h1.innerHTML = moment(result.location.localtime).format("MMM Do YY");  
        h2.innerHTML = result.current.temperature + "°";
        h3.innerHTML = result.current.weather_descriptions; 
        img.src = result.current.weather_icons;
        wind.innerHTML = 'Wind   |   ' + result.current.wind_speed + ' km/h'
        hum.innerHTML = 'Hum   |   ' + result.current.uv_index + ' %'
    } catch (error) {
        console.error(error);
    }
};
btn.onclick = () => {
    location.assign('/pages/days/')
}