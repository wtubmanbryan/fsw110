let result = document.getElementById('result')
//Addition
let addBtn = document.getElementById('add')
addBtn.addEventListener('click', addition)

function addition(){
    let addFirstNum = document.getElementById('addFirstNum').value
    let addSecondNum = document.getElementById('addSecondNum').value
    result.innerText = (parseInt(addFirstNum) + parseInt(addSecondNum))
}


//Suntraction
let subBtn = document.getElementById('sub')
subBtn.addEventListener('click', subtraction)

function subtraction(){
    let subFirstNum = document.getElementById('subFirstNum').value
    let subSecondNum = document.getElementById('subSecondNum').value
    result.innerText = (parseInt(subFirstNum) - parseInt(subSecondNum))

}

//Multiplication
let mulBtn = document.getElementById('mul')
mulBtn.addEventListener('click', multiplication)

function multiplication(){
    let mulFirstNum = document.getElementById('mulFirstNum').value
    let mulSecondNum = document.getElementById('mulSecondNum').value
     result.innerText = (parseInt(mulFirstNum) * parseInt(mulSecondNum))

}

//Division
let divBtn = document.getElementById('div')
divBtn.addEventListener('click', division)

function division(){
    let divFirstNum = document.getElementById('divFirstNum').value
    let divSecondNum = document.getElementById('divSecondNum').value
    result.innerText = (parseInt(divFirstNum) / parseInt(divSecondNum))

}

//Clear All
let clrBtn = document.getElementById('clear')
clrBtn.addEventListener('click', clearAll)

function clearAll(){
    document.getElementById('addFirstNum').value = ""
    document.getElementById('addSecondNum').value = ""
    document.getElementById('subFirstNum').value = ""
    document.getElementById('subSecondNum').value = ""
    document.getElementById('mulFirstNum').value = ""
    document.getElementById('mulSecondNum').value = ""
    document.getElementById('divFirstNum').value = ""
    document.getElementById('divSecondNum').value = ""
    result.innerText = 0

}
