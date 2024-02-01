// funcion para que de replay al video
function replayVideo(){
    let video = document.getElementById('myVideo');
    video.currentTime = 0; // Reinicia la posicion del video al inicio
    video.play(); // Inicia la reproduccion del video nuevamente
};
