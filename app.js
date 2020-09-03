const location_3 = document.querySelector('.location')
const temp_desc = document.querySelector('.temperature-svg')
const temp_value = document.querySelector('.temperature-value')
const temp_unit = document.querySelector('.temperature-unit')


getlocation =  () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const api_key  ="YOUR_API_KEY"
            var latitude = position.coords.latitude
            var longitude = position.coords.longitude
            const apiURI = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
             fetch(apiURI)
            .then(data => data.json())
            .then(response => {
                console.log(response)
                temp_value.innerText=Math.floor(response.main.temp - 273)+' C'
                temp_desc.innerText=response.weather[0].description
                location_3.innerHTML=response.name
            })
        

        })
    }else{
        console.log('error has come')
    }
}

getlocation()