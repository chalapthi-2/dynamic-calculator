 // used to halt the js file to run until the dom fully charged to run 
window.onload= function(){
const display = document.getElementById("display");
const container = document.getElementById("button-container");


const buttons = [
  "C", "/", "*", "-",
  "7", "8", "9", "+",
  "4", "5", "6", "=",
  "1", "2", "3", "0",
  "."
];

buttons.forEach(function(btn){
        const button = document.createElement("button");
        button.innerHTML = btn;
        button.addEventListener("click",function(){
             resultshow(btn);
        });
        container.appendChild(button);
});


function resultshow(value){
    if(value === "C"){
        display.value="";
    }else if (value === "="){
       try{
        // tofixed(2) used parseFloat to remove trailing zero
        const result = eval(display.value)
        display.value = parseFloat(result.toFixed(2));
       }catch {
        display.value = "error";
       }
    }
    else {
        display.value +=value;
    }
}
}
