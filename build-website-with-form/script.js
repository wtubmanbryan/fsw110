var tea = document.getElementById('tea')
var coffee = document.getElementById('coffee')
var bagel = document.getElementById('bagel')
var total = document.getElementById('total')

tea.addEventListener('keyup',sumTotal)
coffee.addEventListener('keyup',sumTotal)
bagel.addEventListener('keyup',sumTotal)

function sumTotal(){
    if(isNaN(tea.value) || tea.value == "")
    {
        teaQty = 0
    }
    else{
        teaQty = tea.value
    }
    if(isNaN(coffee.value) || coffee.value == "")
    {
        coffeeQty = 0
    }
    else{
        coffeeQty = coffee.value
    }
    if(isNaN(bagel.value) || bagel.value == "")
    {
        bagelQty = 0
    }
    else{
        bagelQty = bagel.value
    }
    total.innerText = ( (parseInt(bagelQty)*3) + (parseInt(teaQty)*7)+ (parseInt(coffeeQty)*11)) 
   
}


