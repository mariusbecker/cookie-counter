// Variables
let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let bonuselement = document.getElementById("bonuselement");
let gameover = document.getElementById("gameover");
let pressplay = document.getElementById("pressplay");
let pluspoints = document.getElementById("pluspoints");
let minuspoints = document.getElementById("minuspoints");
let progressbar = document.getElementById("progressbar");
let points = 500;
let b = 1;
let factor = 1;
let varpoint = 2;
var count;
var t;
var a;
var subtractinterval;
// Stopwatch variables
let time = document.getElementsByClassName("stopwatch"),
c=0, s=0, m=0, io=0, itv=null;

// Eventlisteners
cookie.addEventListener("click", clicker);
cookie.addEventListener("mousedown", mousedown);
cookie.addEventListener("mouseup", mouseup);
bonuselement.addEventListener("click", pointsplus100);
// Run only one single time
$("#cookie").one("click", startgame);
$("#cookie").one("click", startscreen);
$("#cookie").one("click", gameoverscreen); 
$("#cookie").one("click", playPause);

function clicker() {
    counter.innerHTML = points + "/" + progressbar.max;
    points = b + points; 
    if(points >= 300) {
        b = 1;
    }
    else if(points >= 200) {
        b = 1;
    }
    else if(points >= 100) {
        b = 1;
    }
    else {
        b = 1;
    }
}

function mousedown(){
    clearInterval(subtractinterval);
    document.getElementById("cookie").style.backgroundImage = "url('./assets/svg/beemo-button-active@2x.svg')";
    clearInterval(itv); 
}

function mouseup(){
    subtractinterval = window.setInterval(subtractpoints, 500);
    document.getElementById("cookie").style.backgroundImage = "url('./assets/svg/beemo-button@2x.svg')";
    io = !io;
    return itv = setInterval(count, 10); 
}

function startgame() {
    t = setInterval(bonusevent, 6000);
    points = 500;
    a = window.setInterval(function(){
        varpoint = varpoint + 2;
        console.log(varpoint);
    }, 2000);
}

function gameoverscreen() {
    setInterval(function() {
        progressbar.value = points;
        if(points <= 0) {
            clearTimeout(t);
            clearInterval(a);
            gameover.classList.remove("hidden");
            clearInterval(itv);
            clearInterval(subtractinterval);
        }
    }, 100);
}

function startscreen() {
    pressplay.classList.add("hidden");
}

// Subtractpoints steuert die Anzahl Punkte, welche abgezogen werden. Interval = mouseup
function subtractpoints() {
    counter.innerHTML = points + "/" + progressbar.max;
    points = points - varpoint;
}

function bonusevent() {
    bonuselement.classList.remove("hidden");
    document.body.appendChild(bonuselement);
	var xy = getRandomPosition(bonuselement);
	bonuselement.style.top = xy[0] + 'px';
    bonuselement.style.left = xy[1] + 'px';
    setTimeout(function(){ bonuselement.classList.add("hidden"); }, 5000);
  }

  function pointsplus100() {
    points = points + 100;
    counter.innerHTML = points + "/" + progressbar.max;
    bonuselement.classList.add("hidden");    
  }

  function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}


// Stopwatch functions
function padd(n) { // Zero padd minutes and seconds
    return n<10 ? "0"+n : n;
  }
  
function count() {
    c = ++c%100;
    if(!c) {
        s = ++s%60;
      if(!s) m=++m%60;
    }
    time[0].innerHTML = padd(m) +":"+ padd(s) +":"+ padd(c);
    time[1].innerHTML = padd(m) +":"+ padd(s) +":"+ padd(c);
  }

  function playPause() {
    io = !io;
    return io ? itv = setInterval(count, 10) : clearInterval(itv);
  }

//   points = maths.min(100/5);