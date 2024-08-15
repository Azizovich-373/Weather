import moment from "moment";
import { reload } from "../../lib/utils";
import { Weather_hour } from "../../components/Weather-hour";
import { Weather_day } from "../../components/Weather-day";
const btn = document.querySelector('button')
const h5 = document.querySelector('h5')
const hours_place = document.querySelector('.forecast_hours')
const days_place = document.querySelector('.forecast_days')

const url = "https://api.weatherstack.com/current?access_key=0baa396afd94e84ca2513ab9fffe0840&query=Samarkand";
const options = {
    method: "GET",
}; 
(async () => {
    try {
        const res = await fetch(url, options);
        const result = await res.json();
        console.log(result);
        h5.innerHTML = moment(result.location.localtime).format("MMM Do YY");
        reload(result, hours_place, Weather_hour);
        reload(result, days_place, Weather_day);
    } catch (error) {
        console.error(error);
    }
})();
btn.onclick = () => {
    location.assign('/')
}