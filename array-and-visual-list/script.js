var header1 = document.createElement("h1")
header1.innerHTML = "Hello World"
header1.setAttribute("id","me")
document.body.appendChild(header1)

for(i = 0; i < 10; i++){
    var myHeader = document.createElement("h1")
    myHeader.innerHTML = "Hello World"
    myHeader.setAttribute("id","myh"+i)
    document.body.appendChild(myHeader)
    document.getElementById("myh"+i).style.color = "#ff0000";
}

document.getElementById("myh2").style.fontStyle = "italic"
document.getElementById("myh4").style.fontStyle = "italic"
document.getElementById("myh6").style.fontStyle = "italic"

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

var ol = document.createElement("ol")
for(j = 0; j < names.length; j++){
    var li = document.createElement("li")
    li.textContent = names[j]
    ol.appendChild(li)

}

document.body.appendChild(ol)

