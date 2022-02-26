let btn = document.getElementById('submitBtn')
btn.addEventListener('click',submitBtn)

function submitForm(){
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let email = document.getElementById('email')

    alert(firstName.value + " " + lastName.value + " " + email.value)
    // firstName.value =""
    // lastName.value=""
    // email.value=""
}