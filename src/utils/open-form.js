const modal = document.getElementById("modal")
const newSchedule = document.getElementById("button-scheduling")
const closeSchedule = document.getElementById("button-cancel")

newSchedule.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.remove('close')
})

closeSchedule.addEventListener("click", (event) => {
    event.preventDefault()

    modal.classList.add('close')
})