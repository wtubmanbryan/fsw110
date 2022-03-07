// make the box disapear when the user clicks it

// select our box by class name and assign it to the variable, "box"
const redBox = document.getElementsByClassName("red-box")


redBox[0].addEventListener('click', hideMe)

function hideMe(){ // we pass an entire function as the second argument. 
    redBox[0].style.display = "none"
    
}