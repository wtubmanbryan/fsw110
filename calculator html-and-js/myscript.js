//Addition
let addBtn = document.getElementById('add')
addBtn.addEventListener('click', addition)

function addition(){
    let addFirstNum = document.getElementById('addFirstNum').value
    let addSecondNum = document.getElementById('addSecondNum').value
    let addResult = document.getElementById('addResult')

     addResult.innerText = (parseInt(addFirstNum) + parseInt(addSecondNum))
}


//Suntraction
let subBtn = document.getElementById('sub')
subBtn.addEventListener('click', subtraction)

function subtraction(){
    let subFirstNum = document.getElementById('subFirstNum').value
    let subSecondNum = document.getElementById('subSecondNum').value
    let subResult = document.getElementById('subResult')

     subResult.innerText = (parseInt(subFirstNum) - parseInt(subSecondNum))

}

//Multiplication
let mulBtn = document.getElementById('mul')
mulBtn.addEventListener('click', multiplication)

function multiplication(){
    let mulFirstNum = document.getElementById('mulFirstNum').value
    let mulSecondNum = document.getElementById('mulSecondNum').value
    let mulResult = document.getElementById('mulResult')

     mulResult.innerText = (parseInt(mulFirstNum) * parseInt(mulSecondNum))

}


//Division
let divBtn = document.getElementById('div')
divBtn.addEventListener('click', division)

function division(){
    let divFirstNum = document.getElementById('divFirstNum').value
    let divSecondNum = document.getElementById('divSecondNum').value
    let divResult = document.getElementById('divResult')

     divResult.innerText = (parseInt(divFirstNum) / parseInt(divSecondNum))

}