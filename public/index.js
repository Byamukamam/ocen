let ison = false;
let mobion = false;
function dropDown(){
    if (!ison){
        document.getElementById("dropDown").classList.add("hidden-links");
        ison = true;
    } else {
        document.getElementById("dropDown").classList.remove("hidden-links");
        ison = false;
    } 
}

function mobileDrop(){
    if(!mobion){
        document.getElementById("mobileDrop").classList.add("mobdevice");
        mobion = true;
    } else {
        document.getElementById("mobileDrop").classList.remove("mobdevice");
        mobion = false;
    }
}