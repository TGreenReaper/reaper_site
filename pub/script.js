

document.addEventListener("DOMContentLoaded" , main)

function main(){
    document.getElementById("f-btn").addEventListener("click" , function(){
        fetch("releases/REAPERFW_0.1.tgz").then(response => response.blob()).then(blob =>{
            let lin = document.createElement("a");
            lin.href = URL.createObjectURL(blob);
            lin.download = "REAPERFW_0.1.tgz"
            document.body.appendChild(lin)
            lin.click()
            lin.remove()
        })

        
    })

    document.getElementById("ti-btn").addEventListener("click" , function(){
        location.href = "clock.html";
    })

    document.getElementById("yt-btn").addEventListener("click" , function(){
       window.open("https://www.youtube.com/channel/UCm20SYVS9nLwwh8XNQMeyxg")
    })

    document.getElementById("act-btn").addEventListener("click" , function(){
        location.href = "activity.html";
     })

}