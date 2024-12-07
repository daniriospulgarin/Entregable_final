let video = document.querySelector("#miVideo");
let btn = document.querySelector("#reproducir");
let e = 1;

function reproducir(){
    btn.style.display = "none";

    video.play();
    
    let intervalo = setInterval(function(){
        console.log('txt')
        if(video.currentTime >= 11 && e == 1){
            video.pause()
            clearInterval(intervalo)
            e = 2
        }else if(video.currentTime >= 18 && e == 2){
            video.pause()
            clearInterval(intervalo)
            e = 3
        }else if(video.currentTime >= 28 && e == 3){
            video.pause()
            clearInterval(intervalo)
            e = 4
        }
    },1000)
}

function mostrarBoton() {
    btn.style.display = "block";
}
video.addEventListener("ended", mostrarBoton)

video.addEventListener("pause", mostrarBoton)

btn.addEventListener("click", reproducir)