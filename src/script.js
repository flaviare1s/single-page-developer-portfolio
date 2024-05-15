const form = document.querySelector('#form')
const errorBox = document.querySelector('#errorBox')
const errorAlert = document.querySelector('#errorAlert')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const btnSubmit = document.querySelector('#btnSubmit')

function formValidation(event) {
    event.preventDefault()
    if(!form.checkValidity()) {
        if(!nameInput.checkValidity()) {
            nameInput.classList.add('active-red')
        } else {
            nameInput.classList.add('active-green')
        }
        if(!emailInput.checkValidity()) {
            emailInput.classList.add('active-red')
            errorAlert.style.display = 'flex'
            errorBox.innerText = 'Sorry, ivalid format here'
        } else {
            emailInput.classList.add('active-green')
        }
    }
    
}

btnSubmit.addEventListener('click', formValidation)