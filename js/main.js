var cookie = document.getElementById("cookie");
var counter = document.getElementById("counter");
var bonuselement = document.getElementById("bonuselement");
var gameover = document.getElementById("gameover");
var pressplay = document.getElementById("pressplay");
var pluspoints = document.getElementById("pluspoints");
var minuspoints = document.getElementById("minuspoints");
var progressbar = document.getElementById("progressbar");
var points = 500;
var t;
var a;
var b = 1;
var count;
var subtractinterval;
var factor = 1;
var varpoint = 1;

// Stopwatch variables
var time = document.getElementsByClassName("stopwatch"),
c=0, s=0, m=0, io=0, itv=null;

// Eventlisteners
cookie.addEventListener("click", clicker);
cookie.addEventListener("mousedown", mousedown);
cookie.addEventListener("mouseup", mouseup);
bonuselement.addEventListener("click", pointsplus100);

//Run only one single time
$("#cookie").one("click", startgame);
$("#cookie").one("click", startscreen);
$("#cookie").one("click", gameoverscreen); 
$("#cookie").one("click", playPause);

function clicker() {
    counter.innerHTML = points;
    pluspoints.innerHTML = b; 
    progressbar.value = points;
    points = b + points; 
    if(points >= 300) {
        b = 4;
    }
    else if(points >= 200) {
        b = 3;
    }
    else if(points >= 100) {
        b = 2;
    }
    else {
        b = 1;
    }
}

function mousedown(){
    clearInterval(subtractinterval);
    document.getElementById("cookie").style.backgroundImage = "url('./assets/beemo-button-active@2x.svg')";
    clearInterval(itv); 
}

function mouseup(){
    subtractinterval = window.setInterval(subtractpoints, 500);
    document.getElementById("cookie").style.backgroundImage = "url('./assets/beemo-button@2x.svg')";
    io = !io;
    return itv = setInterval(count, 10); 
}

function startgame() {
    t = setInterval(bonusevent, 6000);
    points = 500;
    minuspoints.innerHTML = varpoint;
    a = window.setInterval(function(){
        varpoint = varpoint + 1;
        minuspoints.innerHTML = varpoint;
        console.log(varpoint);
    }, 2000);
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

// Subtractpoints steuert die Anzahl Punkte, welche abgezogen werden. Interval = mouseup
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

  function pointsplus100() {
    points = points + 100;
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