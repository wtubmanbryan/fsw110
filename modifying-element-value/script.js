let btn = document.getElementById('submitBtn')
btn.addEventListener('click',submitForm);


function submitForm(event){
    event.preventDefault();
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let email = document.getElementById('email')

    alert(firstName.value + "\n" + lastName.value + "\n" + email.value)
    firstName.value =""
    lastName.value=""
    email.value=""
}

