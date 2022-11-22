

let requi = document.querySelectorAll("input");
console.log(requi);

for(let i = 0; i < requi.length; i++){
    requi[i].style.color = "red";
    requi[i].required;
    requi[i].setAttribute("required", "true");

}

let btn = document.getElementById("switch");


function myFunc3() {
    let text1 = document.getElementById("input1").value;
    document.getElementById("input1").value = document.getElementById("input2").value;
    document.getElementById("input2").value = text1;
}

btn.addEventListener("click", function (){
    myFunc3()
})
