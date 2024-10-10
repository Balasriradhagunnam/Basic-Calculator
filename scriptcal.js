//calculator project
const display = document.getElementById("display");
function appendItem(input){
    display.value += input;
}
function clearItem(){
    display.value="";
}
function calculateItems(){
    try{
        display.value=eval(display.value); //eval() does mathematical calculations
    }
    catch(error){
        display.value="Error";
    }
}
