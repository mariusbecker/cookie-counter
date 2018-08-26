let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
var intervalID = window.setInterval(subtractpoints, 500);
var timeoutID = window.setTimeout(bonusevent, 1000);
let bonuselement = document.getElementById("bonuselement");
let gameover = document.getElementById("gameover");
let points = 0;


cookie.addEventListener("click", clicker);
bonuselement.addEventListener("click", pointsplus200);

function clicker() {
    counter.innerHTML = points;

    if(points > 9) {
        points = points + 10;
    }
    else {
        points = points + 2;
    }
}

function gameoveroverlay() {
    if(points == 0) {
        console.log("Hello");
        gameover.classList.remove("hidden");
    }
}

function subtractpoints() {
    counter.innerHTML = points;
    if(points > 200) {
        points = points - 20;
    }
    if(points > 100) {
        points = points - 10;
    }
    if(points > 10) {
        points = points - 2;
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