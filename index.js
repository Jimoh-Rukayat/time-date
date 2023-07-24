let one = document.getElementsByClassName('day');
let two = document.getElementsByClassName('time')
let three = document.getElementsByClassName('date')



function dateAndTime(){
    let currentDay = new Date();
    let day = currentDay.getDay();
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hour = currentDay.getHours();
let greenwichMeridian = (hour >= 12) ? " PM" : " AM";
hour = hour % 12;
hour = hour ? hour : 12;
let minutes =currentDay.getMinutes();
minutes = minutes < 10 ? '0' + minutes: minutes;
let seconds = currentDay.getSeconds();
function leadingZero(time){
     return time.toString().padStart(2, '0');
 }
 let currentTime = leadingZero(hour) + " " + greenwichMeridian + ":" + leadingZero(minutes) + ":" + leadingZero(seconds);
 let a= 'Today is:' + " " + dayList[day];
 let b= 'Current Time:' + currentTime;

 let one = document.getElementsByClassName('day')[0];
  let two = document.getElementsByClassName('time')[0];

 one.innerHTML= a
 two.innerHTML= b;

}setInterval(dateAndTime, 1000);

let currentDay = new Date();
let date= currentDay.getDate()
let month= currentDay.getMonth() + 1
month = month < 10 ? '0' + month: month;
let monthList= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
let year= currentDay.getFullYear()

document.querySelector('.date').innerHTML= (month) + "/" + date  + " /" + year


let printContent= function(){
    window.print();
}


