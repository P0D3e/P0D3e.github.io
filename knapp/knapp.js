let siffra = 0;





function plusClick(){
    siffra = siffra + 1;
   console.log("click")
    document.getElementById("svar").innerHTML = siffra
}
const minusKnapp = document.getElementById("minusClick")
minusKnapp.addEventListener("click", minusClick)

function minusClick(){
    console.log("minusClick")
siffra = siffra-1;
document.getElementById("svar").innerHTML = siffra
}