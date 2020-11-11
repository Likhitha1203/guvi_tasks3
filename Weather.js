//Generate an API key and  Print the current weather data in console- By city name, By city ID, By lat lang


//By Lat-Lang
var lat = []
var long = []
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function() {
	var data = JSON.parse(this.response);
for(var i in data) {
  lat.push(data[i].latlng[0])
  long.push(data[i].latlng[1])
}
// console.log(lat)
// console.log(long)
for(var i = 0 ; i<lat.length ; i++) {
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=' +lat[i]+ '&lon=' +long[i]+ '&appid=7d9c51394451909807e616a21b768060', true);
request.send();
request.onload= function(){
	var lat_lng = JSON.parse(this.response);
console.log(lat_lng["weather"])
}
}
}


//By-CityName
var city = []
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload= function() {
	var data = JSON.parse(this.response);
for(var i in data) {
  city.push(data[i]["capital"])
}
//console.log(city)
for(var i = 0 ; i<city.length ; i++) {
var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' +city[i]+ '&appid=7d9c51394451909807e616a21b768060', true);
request.send();
request.onload= function(){
var by_city = JSON.parse(this.response)
console.log(by_city["weather"])
}
}
}
