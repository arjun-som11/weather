var button = document.querySelector('.mybtn')
var inputValue = document.querySelector('.inputValue')
var nam = document.querySelector('.nam')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

 button.addEventListener("click", function(){
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=cd6f9b70a039a10352d796a290121bfb')
 .then(response => response.json())
 .then(data => {
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var tempValue = data['main']['temp'];

    nam.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
 })

 .catch(err => alert("wrong city!"))
 })
