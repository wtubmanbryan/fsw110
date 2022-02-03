
var myH1 = document.createElement("h1")
myH1.innerHTML = "Welcome to my JS site"
document.body.appendChild(myH1)

var myP = document.createElement("p")
myP.innerHTML ="All of this was created with JavaScript"

document.body.appendChild(myP)

var myOl = document.createElement("ol")
var newListItem1 = document.createElement("li")
var newListItem2 = document.createElement("li")
var newListItem3 = document.createElement("li")
newListItem1.textContent="Apple"
newListItem2.textContent ="Pineapple"
newListItem3.textContent ="Zucchini"
myOl.appendChild(newListItem1)
myOl.appendChild(newListItem2)
myOl.appendChild(newListItem3)
document.body.appendChild(myOl)



