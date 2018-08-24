let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let points = 0;
var intervalID = window.setInterval(subtractpoints, 500);
var timeoutID = window.setTimeout(bonusevent, 1000);



cookie.addEventListener("click", clicker);

function clicker() {
    counter.innerHTML = points;

    if(points  > 9) {
        points = points + 10;
    }
    else {
        points = points + 1;
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