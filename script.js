let image = document.getElementById("image")
let btnstop = document.getElementById("btnstop")
let alert = document.getElementById("alert")
image.style.display = 'none'
btnstop.style.display = 'none'
alert.style.display = 'none'
alert.style.color = 'white'

function timetoseconds(time) {
  let parts = time.split(':');
  if (parts.length === 2) {
    let hours = parseInt(parts[0])
    let minutes = parseInt(parts[1])
    return hours * 3600 + minutes * 60
  }
}
function timedifference() {
  let timepicker = document.getElementById("appt").value
  let setbtn = document.getElementById("btn")
  let enteredtime = timepicker
  let currenttime = new Date();
  let currenthours = currenttime.getHours();
  let currentminutes = currenttime.getMinutes();
  let currentseconds = currenttime.getSeconds();

  let enteredseconds = timetoseconds(enteredtime);
  let currentTotalseconds = currenthours * 3600 + currentminutes * 60 + currentseconds + enteredseconds;

  let secondsleft;
  if (enteredseconds >= currentTotalseconds) {
    return secondsleft = enteredseconds - currentTotalseconds
  }
  else {
     secondsleft = 24 * 3600 - currentTotalseconds + enteredseconds
  }
  return secondsleft*1000;
}

let audio;
function wakeup() {
  audio = new Audio('Audio-5589897.mp3')
  audio.play()
  audio.loop = true
}
function stopalarm(){
  audio.pause()
}

function alarm() {
  image.style.display = 'block';
  btnstop.style.display = 'block';
  wakeup()
  
  btnstop.addEventListener("click", function() {
    stopalarm()
    image.style.display = 'none'
    btnstop.style.display = 'none'
   
  })
}


let setbtn = document.getElementById("btn")
setbtn.addEventListener("click", function() {
  
  alert.style.display = 'block'
  setTimeout(() =>{
    alert.style.display = 'none'
  },3000)
  
  setTimeout(() => {
    alarm()
  }, timedifference())
})


