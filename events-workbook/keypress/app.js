/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */

var doc = document.body

doc.addEventListener("keydown", function(e){ // we pass an entire function as the second argument. 
    document.getElementById("output").textContent = e.keyCode
    
    // select the div, and change the "textContent" property to the value of the events target (the input box)
})
