// A navbar with link
var navbar = document.createElement('nav')

var a = document.createElement('a');
var linkText= document.createTextNode('Home |')
a.appendChild(linkText);
a.title= 'my Home';
a.href = 'http://example.com';

var a2 = document.createElement('a');
var linkText2= document.createTextNode('About |')
a2.appendChild(linkText2);
a2.title= 'my About us';
a2.href = 'http://about.com';

var a3 = document.createElement('a');
var linkText3= document.createTextNode('Products |')
a3.appendChild(linkText3);
a3.title= 'my Products';
a3.href = 'http://product.com';

var a5 = document.createElement('a');
var linkText5= document.createTextNode('Our Team |')
a5.appendChild(linkText5);
a5.title= 'Our Team';
a5.href = 'http://our-team.com';

var a4 = document.createElement('a');
var linkText4= document.createTextNode('Contact us')
a4.appendChild(linkText4);
a4.title= 'Contact us';
a4.href = 'http://Contact.com';

navbar.append(a)
navbar.append(a2)
navbar.append(a3)
navbar.append(a5)
navbar.append(a4)

document.body.appendChild(navbar);

// Site must have An h1 tag
var myH1=document.createElement("h1")
myH1.innerHTML = "Hello! Welcome to my JS Basic Site."
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
myFooter.innerHTML=("Author: Jack Smith")
document.body.appendChild(myFooter)