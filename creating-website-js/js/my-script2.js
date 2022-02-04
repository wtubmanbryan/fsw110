// Site must have a navbar with links
var myNav= document.createElement("a")
myNav.innerHTML="W3chools| Plural Sight| Casino Royal| Healthy Dieting"
document.body.prepend(myNav)

// Site must have An h1 tag
var myH1=document.createElement("h1")
myH1.innerHTML = ""
document.body.appendChild(myH1)

// Site must have A p tag
var myP = document.createElement("p")
myP.innerHTML =""
document.body.appendChild(myP)

// Site must have A list
var myOl = document.createElement("ul")
var newListItem1 = document.createElement("li")
var newListItem2 = document.createElement("li")
var newListItem3 = document.createElement("li")
newListItem1.textContent=""
newListItem2.textContent =""
newListItem3.textContent =""
myOl.appendChild(newListItem1)
myOl.appendChild(newListItem2)
myOl.appendChild(newListItem3)
document.body.appendChild(myOl)

// Site must have A footer
var myFooter= document.createElement("p")
myFooter.innerHTML=" © 2018 Gandalf"
document.body.appendChild(myFooter)