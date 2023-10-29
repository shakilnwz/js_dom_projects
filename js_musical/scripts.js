const drumkit = {
    E: './sounds/drumkit/boom.wav',
    Y: './sounds/drumkit/clap.wav',
    I: './sounds/drumkit/hihat.wav',
    S: './sounds/drumkit/kick.wav',
    F: './sounds/drumkit/openhat.wav',
    J: './sounds/drumkit/ride.wav',
    L: './sounds/drumkit/snare.wav',
    V: './sounds/drumkit/tink.wav',
    N: './sounds/drumkit/tom.wav',
}
let audios = document.querySelector('.audios')
audios.innerHTML += Object.keys(drumkit).map(elem => `<audio id='${elem}' src="${drumkit[elem]}"></audio>`).join('').replace(',', '')
let lightbar = document.querySelector('.lightbar')

function play(e) {
    let audioplay = document.querySelector(`audio[id='${(e.type == 'keypress') ? e.key.toUpperCase() : e.target.innerText}']`)
    let key = document.querySelector(`#${(e.type == 'keypress') ? e.key.toUpperCase() : e.target.innerText}`)
    //console.log(key)
    if (audioplay !== null) {
        audioplay.currentTime = 0
        audioplay.play()
        key.classList.add('playing')
        lightbar.style.animation = 'disco 0.5s'
    }
}
//for removing the shaking and lightbar animation
function removeShake(e) {
    if (e.propertyName == 'transform') return
    this.classList.remove('playing')
    lightbar.style.animation = 'none'
}
//remove the shake animation from the keys
let keys = document.querySelectorAll('.key')
keys.forEach((elem) => elem.addEventListener('transitionend', removeShake))
//to play chord according to keypress
window.addEventListener('keypress', play)

//for enabling mouse click play
let mouseOp = document.querySelectorAll('.key')
mouseOp.forEach(element => {
    element.addEventListener('click', play)
})