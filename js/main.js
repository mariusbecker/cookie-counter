let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
var intervalID = window.setInterval(subtractpoints, 500);
let bonuselement = document.getElementById("bonuselement");
let gameover = document.getElementById("gameover");
let pressplay = document.getElementById("pressplay");
let points = 0;
var t;

cookie.addEventListener("click", clicker);
cookie.addEventListener("click", gameoverscreen);
cookie.addEventListener("click", startscreen);
bonuselement.addEventListener("click", pointsplus200);
$("#cookie").one("click", startgame);

function clicker() {
    counter.innerHTML = points;
    if(points >= 200) {
        points = points + 20;
    }
    if(points >= 100) {
        points = points + 10;
    }
    else {
        points = points + 1;
    }
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
        points = points - 20;
    }
    if(points >= 100) {
        points = points - 10;
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
    setTimeout(function(){ bonuselement.classList.add("hidden"); }, 1000);
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