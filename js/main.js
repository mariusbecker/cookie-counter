let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let bonuselement = document.getElementById("bonuselement");
let gameover = document.getElementById("gameover");
let pressplay = document.getElementById("pressplay");
let points = 0;
var t;
var a;
var count;
var subtractinterval;
var factor = 1;
var varpoint = 1;

// Stopwatch
var time = document.getElementsByClassName("stopwatch"),
c=0, s=0, m=0, io=0, itv=null;

cookie.addEventListener("click", clicker);
cookie.addEventListener("mousedown", pausesubtractpoints);
cookie.addEventListener("mouseup", runsubtractionpoints);
bonuselement.addEventListener("click", pointsx2);
//run only one single time
$("#cookie").one("click", startgame);
$("#cookie").one("click", startscreen);
$("#cookie").one("click", gameoverscreen); 
$("#cookie").one("click", playPause);

function clicker() {
    counter.innerHTML = points;
    if(points >= 200) {
        points = points + (3*factor);
    }
    if(points >= 100) {
        points = points + (2*factor);
    }
    else {
        points = points + (1*factor);
    }
}

function pausesubtractpoints(){
    clearInterval(subtractinterval);
}

function runsubtractionpoints(){
    subtractinterval = window.setInterval(subtractpoints, 500);
}

function startgame() {
    t = setTimeout(bonusevent, 2000);
    points = 2;
    a = window.setInterval(function test(){varpoint = varpoint + 5, console.log (varpoint)}, 2000);
}

function gameoverscreen() {
    setInterval(function() {
        if(points <= 0) {
            clearTimeout(t);
            clearInterval(a);
            gameover.classList.remove("hidden");
            clearInterval(itv);
        }
    }, 100);
}

function startscreen() {
    pressplay.classList.add("hidden");
}

// Subtractpoints steuert die Anzahl Punkte, welche abgezogen werden. Interval = runsubtractionpoints
function subtractpoints() {
    counter.innerHTML = points;
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

  function pointsx2() {
    setTimeout(function(){ factor = 2; }, 1);
    setTimeout(function(){ factor = 1; }, 5000);
    bonuselement.classList.add("hidden");    
  } 
 
  function pointsplus200() {
    points = points + 200;
    counter.innerHTML = points;
    bonuselement.classList.add("hidden");    
  }

  function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

function padd(n) { // Zero padd minutes and seconds
    return n<10 ? "0"+n : n;
  }
  
function count() {
    c = ++c%100;
    if(!c) {
        s = ++s%60;
      if(!s) m=++m%60;
    }
    time[0].innerHTML = padd(m) +":"+ padd(s) +"."+ padd(c);
    time[1].innerHTML = padd(m) +":"+ padd(s) +"."+ padd(c);
  }

  function playPause() {
    io = !io;
    return io ? itv = setInterval(count, 10) : clearInterval(itv);
  }