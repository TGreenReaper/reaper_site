//main shit//

function load(){
    var cmd = document.getElementById("cmd")
    cmd.focus()
}

function hello(){

    setTimeout(function(){
        cmd.value = "Hello"
    
    } , 1000)
    
    setTimeout(function(){
        cmd.value += " , and welcome to VX or 15. "
    
    } , 1800)
    
    setTimeout(function(){
        cmd.value += "This is a console"
    } , 2600)
    
    setTimeout(function(){
        cmd.value += " where you can do"
    } , 2900)
    
    
    setTimeout(function(){
        cmd.value += " cool stuff!"
    } , 3200)
    
    
    setTimeout(function(){
        cmd.value = "You will be taken to the main page."
    } , 3500)
    
    
    
    setTimeout(function(){
        cmd.value = ""
    } , 5500)
}


document.addEventListener("DOMContentLoaded" , load )
document.addEventListener("DOMContentLoaded" , hello )




setTimeout(function(){
    location.href = "index.html"
} , 6000)