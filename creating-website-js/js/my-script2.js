//A navbar with links
var myNavigator= document.writeln("Info")
var myNav= document.createElement("a")
myNav.innerHTML="www.w3schools.com| www.pluralsight.com| www.casinoroyalclub.com| health.usnews.com"
document.body.prepend(myNav)

// Site must have An h1 tag
var myH1=document.createElement("h1")
myH1.innerHTML = "Hello! Welcome to my JS Basic Site"
document.body.appendChild(myH1)

// Site must have A p tag
var myP =document.createElement("p")
myP.innerHTML ="All of this was created with JavaScript"
document.body.appendChild(myP)

// Site must have A list
var myOl = document.createElement("ol")
var newListItem1 = document.createElement("li")
var newListItem2 = document.createElement("li")
var newListItem3 = document.createElement("li")
newListItem1.textContent="Apple"
newListItem2.textContent ="Celary"
newListItem3.textContent ="Zucchini"
myOl.appendChild(newListItem1)
myOl.appendChild(newListItem2)
myOl.appendChild(newListItem3)
document.body.appendChild(myOl)

// Site must have A footer
var myFooter = document.createElement("Footer")
myFooter.innerHTML=("Author: Jackson Smith")
document.body.appendChild(myFooter)
