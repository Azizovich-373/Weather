import moment from "moment"
export function Weather_hour(item, array) {
  
    const flex = document.createElement('div')
    const span = document.createElement('span')
    const img = document.createElement('img')
    const hour = document.createElement('span')
  
  
    flex.classList.add('flex')
    
    span.innerHTML = item.current.temperature + "°";
    img.src = item.current.weather_icons
    hour.innerHTML = moment(item.location.localtime).format('LT');
  
    flex.append(span,img,hour)
  
    return flex
}
  