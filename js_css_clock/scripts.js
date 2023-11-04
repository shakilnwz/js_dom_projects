let second = document.querySelector('.second')
let minute = document.querySelector('.minute')
let hour = document.querySelector('.hour')
function handPlace() {
    let tick = document.querySelector('#tick')
    let date = new Date()
    second.style.transform = `rotate(${(date.getSeconds() / 60) * 360 + 90}deg)`
    minute.style.transform = `rotate(${(date.getMinutes() / 60) * 360 + 90}deg)`
    hour.style.transform = `rotate(${(date.getHours() / 12) * 360 + 90}deg)`
    tick.currentTime = '0.4'
    tick.play()
}

setInterval(handPlace, 1000)