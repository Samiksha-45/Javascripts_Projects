var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime ;
var evening = 18;

//current time always showing on page
var showCurrentTime = function() {
    var clock = document.getElementById("clock");

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var Seconds = currentTime.getSeconds();
    var meridian = "Am";

    //setting hours
    if(hours >=noon){
        meridian = "PM";
    }
   if(hours > noon) {
    hours = hours - 12;
   }

   //setting minutes
   if(minutes < 10){
    minutes = "0" + minutes;
   }

   //setting seconds
   if (Seconds < 10){
    Seconds =  "0" + Seconds;
   }

   // add it all togther in string
  var clockTime = hours + ":" + minutes + ":" + Seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

//get the clock change

var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById("loccatImage");

    if (time == partytime)
        {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText = "Let's party!";
        }
        else if (time == wakeuptime)
        {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
          messageText = "Wake up Now!";
        }
        else if (time == lunchtime)
        {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
          messageText = " healthy lunch Time!";
        }
        else if (time == naptime)
        {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
          messageText = "Sweet Dreams!";
        }
        else if (time < noon)
        {
          image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
          messageText = "Good morning!";
        }
        else if (time >= evening)
        {
          image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
          messageText = "Good evening!";
        }
        else
        {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
          messageText = "Good afternoon!";
        };

        console.log(messageText);
        timeEventJS.innerText = messageText;
        lolcatImage.src = image;

        showCurrentTime();

}
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//button
let partyButton = document.querySelector("#partyTimeButton");

let partyEvent = () => {
    if(partytime < 0 ) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party over!";
        partyTimeButton.style.backgroundcolor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party time!";
        partyTimeButton.style.backgroundcolor = "222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

//wakeup
let wakeUpTimeSelector = document.querySelector("#wakeUpTimeSelector");

let wakeUpEvent = () => {
 wakeuptime = wakeUpTimeSelector.value;
}
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


//lunch
let lunchTimeSelector = document.querySelector("#lunchTimeSelector")

let lunchEvent = () => {
     lunchtime = lunchTimeSelector.value;
}
 lunchTimeSelector.addEventListener("change", lunchEvent);
 

//naptime

let napTimeSelector = document.querySelector("#napTimeSelector");

let napEvent = () => {
    naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change", napEvent);
