const input  = document.querySelector('.login_name')
const button = document.querySelector('.button_login')
const form   = document.querySelector('.form_login')

const getTextInput = ({target}) =>{
    if(target.value.length > 2){
        button.removeAttribute('disabled')
        return
    }

    button.setAttribute('disabled', '')
}

const handleSubmit = (event) =>{
    event.preventDefault();
    localStorage.setItem('name', input.value)
    window.location = 'pages/newPage.html'
} 

input.addEventListener('input', getTextInput)
form.addEventListener('submit',handleSubmit)