let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let points = 0;
var intervalID = window.setInterval(subtractpoints, 500);
var timeoutID = window.setTimeout(bonusevent, 1000);
let bonuselement = document.getElementById("bonuselement");


cookie.addEventListener("click", clicker);

function clicker() {
    counter.innerHTML = points;

    if(points  > 9) {
        points = points + 10;
    }
    else {
        points = points + 5;
    }
}

function subtractpoints() {
  if(points > 0) {
    points = points - 2;
    counter.innerHTML = points;
  }
}

function bonusevent() {
    cookie2.classList.remove("hidden");
  }

  function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
window.onload = function() {
	document.body.appendChild(bonuselement);
	var xy = getRandomPosition(bonuselement);
	bonuselement.style.top = xy[0] + 'px';
	bonuselement.style.left = xy[1] + 'px';
} 