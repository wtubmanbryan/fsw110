let btn = document.getElementById('submitBtn')
btn.addEventListener('click',submitForm)

function submitForm(){
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let age = document.getElementById('age')
    let recom = document.getElementById('recom')
    let glu = document.getElementById('glu')
    let keto = document.getElementById('keto')
    let vege = document.getElementById('vege')

    let dietary = ""
    if(glu.checked)
    {
        dietary += glu.value
    }
    if(keto.checked)
    {
        dietary += " "+keto.value
    }
    if(vege.checked)
    {
        dietary += " "+vege.value
    }


    const rbs = document.querySelectorAll('input[name=shopBefore]');
            let selectedValue="";
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }


    alert("First Name: "+firstName.value + "\n" + "Last Name: "+lastName.value + "\n" +"Age: "+ age.value+"\n"+ "Shop with us before: " + selectedValue + "\nLikely to recommend us? "+recom.value +"\nDietary Restrictions? " +dietary)
    firstName.value =""
    lastName.value=""
    age.value=""
    recom.value=""

    for (const rb of rbs) {
        if (rb.checked) {
            rb.checked = false
            break;
        }
    }

    if(glu.checked)
    {
        glu.checked = false
    }
    if(keto.checked)
    {
        keto.checked = false
    }
    if(vege.checked)
    {
        vege.checked = false
    }

}