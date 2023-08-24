var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/318312391_2942662619373076_7700481660901985183_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nWAd8K1OuCgAX936Z4I&_nc_ht=scontent.fhan4-2.fna&oh=00_AfDnJjuLKdLgiD-RaNTmGxAYD8MfGaTrpXq-luAp4reV1g&oe=64EC2D18";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partytime) {
        image = "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/364688252_1027533315281779_3692576407069130324_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JUuULVS1QJYAX_Acbe4&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAxrmKBlRxzRDcvtKy1msynM9RRvzJpHLnKvRPCgwqSIw&oe=64EB80B2";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/362913292_3101618510144152_5564215096110411417_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B-n2P60th9wAX-dXF-R&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCXMH6_Li_tucz8YprpDO-biT8t4jmgw1bBZdhHy7dERw&oe=64EBD41E";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/326245395_1327587938084906_3529446324520145601_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=A1aRdn-NLI4AX8uKXyx&_nc_ht=scontent.fhan4-1.fna&oh=00_AfBBatGyAb4kizyvCC5ZpunEir8di2n0yaNuWT4SB4jRyQ&oe=64ECCD82";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/318205494_2942662606039744_5610811434689333565_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=e1xmqOuKhE4AX8xEhP2&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCsntX7jYASeinB-_Y_j3suX9tbMxumz5c-szwh0VwVeA&oe=64ECFA4C";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/318189287_2942662529373085_662161151665217528_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rg64xTtd6kkAX_SPdBQ&_nc_ht=scontent.fhan4-3.fna&oh=00_AfC_RoyejwUDFiAAfsyeURcMhx_60AKX6crBS_WQzl9EHg&oe=64EC63F4";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/318312391_2942662619373076_7700481660901985183_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nWAd8K1OuCgAX936Z4I&_nc_ht=scontent.fhan4-2.fna&oh=00_AfDnJjuLKdLgiD-RaNTmGxAYD8MfGaTrpXq-luAp4reV1g&oe=64EC2D18";
        messageText = "Good evening!";
    }
    else {
        image = "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/338404768_526561262989093_8525777000187273440_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pYqmVZrw7IoAX_N048P&_nc_ht=scontent.fhan3-5.fna&oh=00_AfB5uwXla1pY0tsP-LURpKFXuOBbs829tVQo5PiX7xQRNw&oe=64ECFE5D";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);