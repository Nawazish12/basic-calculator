

function getNumber(num){ 
    var result=document.getElementById("value");
     result.value+=num; 
}
function clearInput(){
    var clear=document.getElementById("value")
    clear.value=null;
}

function getResult(){
    var result=document.getElementById("value")
    result.value=eval( result.value)
}
