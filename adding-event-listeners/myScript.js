function bindEventsToSameHandler(element, events, handler) {
    for(var i = 0; i < events.length; i++) {
        element.addEventListener(events[i], handler);
    }
}


// implementation
var element = document.getElementById('square'); // select the element on which to handle mouse events
element.style.background="black"
var events = ['click', 'mouseup', 'keydown','mousedown','mouseover','mouseout','dblclick'];    // add mouse events you want to handle
bindEventsToSameHandler(element, events, function(e) {

   //Change shape color based on mouse event
    if(e.type == 'click'){
        element.style.background = "blue"
    }
    else if(e.type == 'mouseover')
    {
        element.style.background = "green"
    }
    else if(e.type == 'mousedown')
    {
        element.style.background = "yellow"
    }
    else if(e.type == 'dblclick')
    {
        element.style.background = "red"
    }
});

//change shape color when users press a key
document.addEventListener("keydown", function(event) {
    if(event.key == 'r')
    {
        element.style.background = "red"
    }else if(event.key == 'p')
    {
        element.style.background = "purple"
    }
    else if(event.key == 'g')
    {
        element.style.background = "green"
    }
    else if(event.key == 'b')
    {
        element.style.background = "blue"
    }
    else if(event.key == 'w')
    {
        element.style.background = "white"
    }
  })

  //execute an event on mouse scroll (anywhere on the page)
  document.addEventListener("wheel", function(w) {
    if(w.type == 'wheel')
    {
        element.style.background = "purple"
    } 
  })
