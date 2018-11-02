setInterval(function(){
var time = document.getElementById("MoscowTime");
//Удаляем таймер если он был 

while (time.firstChild) {
time.removeChild(time.firstChild);
}
//выводим время
var isTime = moment().utcOffset(3).format("HH:mm");
var Newspan = document.createElement('span');
Newspan.textContent ="Московское время: " + isTime;
time.appendChild(Newspan);


}, 500);



                 
                   