document.getElementById("save").addEventListener('click', saveToDoList)
var pid = 1;
var editId = "";

function saveToDoList(e) {
  e.preventDefault();
  const mytitle = document.getElementById("title");
  const mydesc = document.getElementById("desc");
  if(editId == ""){

    var mydiv = document.createElement("div");
    mydiv.setAttribute('id', 'post_'+pid) 
    
    var title=document.createElement("h4");
    title.innerText=mytitle.value;
    var desc=document.createElement("p");
    desc.innerText=mydesc.value;
    
    var btn1 = document.createElement("button");
    btn1.setAttribute('id', 'btn_'+pid)
    btn1.setAttribute('class', 'btnSmall')
    btn1.innerText = "Delete";

    var btnEdit = document.createElement("button");
    btnEdit.setAttribute('id', 'btnEdit_'+pid)
    btnEdit.setAttribute('class', 'btnSmall')
    btnEdit.innerText = "Edit";

      btn1.addEventListener('click', function(e){
      var mytarget = e.target.parentElement.remove();
    });

  btnEdit.addEventListener('click', function(e){
       editId = e.target.parentElement.id
       mytitle.value = e.target.parentElement.getElementsByTagName("h4")[0].innerText
       mydesc.value = e.target.parentElement.getElementsByTagName("p")[0].innerText
       
    });

    mydiv.appendChild(title);
    mydiv.appendChild(desc);
    mydiv.appendChild(btn1);
    mydiv.appendChild(btnEdit);
    
    const myobj = document.getElementById("myList");
    myList.appendChild(mydiv);
    
    pid +=1;
  }
  else{
    
    document.getElementById(editId).getElementsByTagName("h4")[0].innerText = document.getElementById("title").value;
    document.getElementById(editId).getElementsByTagName("p")[0].innerText = document.getElementById("desc").value;
    editId = "";
  }
  mytitle.value="";
  mydesc.value ="";
  
}
