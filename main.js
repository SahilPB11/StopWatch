const sTop = document.getElementById("stop");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
let hr = 0,
  min = 0,
  sec = 0,
  milisec = 0,
timer = false,
hhr, hmin, hsec;

function setValues(hr, min, sec, milisec) {
  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("milisec").innerHTML = milisec;
}

function Start() {
  timer = true;
  stopWatch();
}
function Stop() {
  timer = false;
}
function Reset() {
  (hr = 0), (min = 0), (sec = 0), (milisec = 0);
  setValues("00", "00", "00", "00");
  timer = false;
}

function stopWatch() {
  if (timer) {
    milisec++;

    if (milisec === 100) {
      sec++;
      milisec = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
    }
    hhr = hr, hmin = min, hsec = sec;
    hhr = hhr < 10 ? "0" + hhr : hhr;
    hmin = hmin < 10 ? "0" + hmin : hmin;
    hsec = hsec < 10 ? "0" + hsec : hsec;

    setValues(hhr, hmin, hsec, milisec);
    setTimeout(() => {
      stopWatch();
    }, 10);
  }
}

start.addEventListener("click", Start);
sTop.addEventListener("click", Stop);
reset.addEventListener("click", Reset);
