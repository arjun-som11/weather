var button = document.querySelector('.mybtn')
var inputValue = document.querySelector('.inputValue')
var nam = document.querySelector('.nam')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var pres = document.querySelector('.pres')
var humid = document.querySelector('.humid')
var visi = document.querySelector('.visi')
var speed = document.querySelector('.speed')

 button.addEventListener("click", function(){
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=cd6f9b70a039a10352d796a290121bfb')
 .then(response => response.json())
 .then(data => {
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var tempValue = data['main']['temp'];
    var presValue = data['main']['pressure'];
    var humidValue = data['main']['humidity'];
    var visiValue = data['visibility']
    var speedValue = data['wind']['speed']

    nam.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    pres.innerHTML = presValue;
    humid.innerHTML = humidValue;
    visi.innerHTML = visiValue;
    speed.innerHTML = speedValue;

 })

 .catch(err => alert("wrong city!"))
 })
