const buttons = document.querySelectorAll('.modal-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
const hideModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

buttons.forEach(item => item.addEventListener('click', (e) => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}))

closeButton.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') hideModal()
})