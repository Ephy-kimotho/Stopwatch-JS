
const startStopBtn = document.getElementById("startStop-btn")
const resetBtn  = document.getElementById("reset-btn")
const timer = document.querySelector(".timer")

let seconds = 0
let minutes = 0
let hours = 0

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

let intervalId = null;
let timeStatus = 'stopped';

function stopWatch(){
    seconds++
    if(seconds / 60 === 1){
        seconds = 0
        minutes++
        if(minutes / 60 === 1){
            minutes = 0
            hours++
        } 
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds
    } else {
        leadingSeconds = seconds
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes
    } else{
        leadingMinutes = minutes
    }

    if(hours < 10){
        leadingHours = "0" + hours 
    } else {
        leadingHours = hours
    }

    

    let timeString = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
    timer.textContent = timeString

}

startStopBtn.addEventListener("click", () => {

    if(timeStatus === "stopped"){
        intervalId = window.setInterval(stopWatch, 1000)
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timeStatus = "started"
    } else {
        window.clearInterval(intervalId)
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timeStatus = "stopped"
    }
})

resetBtn.addEventListener("click", () => {
    window.clearInterval(intervalId)
    seconds = 0
    minutes = 0
    hours = 0

    timer.textContent = "00:00:00"
})