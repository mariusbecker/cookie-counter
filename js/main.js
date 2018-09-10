let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let bonuselement = document.getElementById("bonuselement");
let gameover = document.getElementById("gameover");
let pressplay = document.getElementById("pressplay");
let points = 0;
var t;
var subtractinterval;
var factor = 1;

cookie.addEventListener("click", clicker);
cookie.addEventListener("click", gameoverscreen);
cookie.addEventListener("click", startscreen);
cookie.addEventListener("mousedown", pausesubtractpoints);
cookie.addEventListener("mouseup", runsubtractionpoints);
bonuselement.addEventListener("click", pointsx2);
$("#cookie").one("click", startgame); //jquery event to run a function only one single time

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
}

function gameoverscreen() {
    setInterval(function() {
        if(points == 0) {
            clearTimeout(t);
            gameover.classList.remove("hidden");
        }
    }, 100);
}

function startscreen() {
    pressplay.classList.add("hidden");   
}

function subtractpoints() {
    counter.innerHTML = points;
    if(points >= 200) {
        points = points - 9;
    }
    if(points >= 100) {
        points = points - 6;
    }
    if(points >= 1) {
        points = points - 1;
    }
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