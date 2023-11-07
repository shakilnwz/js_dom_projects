let inputs = document.querySelectorAll('.inputs input')
function varUpdate() {
    document.documentElement.style.setProperty(`--${this.id}`, this.value + (this.dataset.size || ''))
}
inputs.forEach(elem => {
    elem.addEventListener('change', varUpdate)
    elem.addEventListener('mousemove', varUpdate)
})