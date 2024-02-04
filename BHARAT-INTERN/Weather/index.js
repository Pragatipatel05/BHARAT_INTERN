var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "fe2f25b9b0d6bb94a38fbdbf355d3926"
function convertion(val)
{
    return(val - 273).toFixed(2)
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var wndspeed = data['wind']

            city.innerHTML=`City: <span>"${nameval}<span>"`
            temp.innerHTML=` <span>${ convertion(temperature)} ºC </span>`
            description.innerHTML=` <span>${descrip}<span>`
            wind.innerHTML=` <span>15 km/h<span>`
        }
    )

    .catch(err => alert('Invalid Input'))
})