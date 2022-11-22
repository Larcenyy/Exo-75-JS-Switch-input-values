

let requi = document.querySelectorAll("input");
console.log(requi);

for(let i = 0; i < requi.length; i++){
    requi[i].style.color = "red";
    requi[i].required;
    requi[i].setAttribute("required", "true");

}



let btn = document.getElementById("switch");
btn.setAttribute("type", "submit");

