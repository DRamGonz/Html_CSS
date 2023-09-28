var estadoLicuadora="apagada";
var sonidoLicuadora=document.getElementById("blender-sound");
var botonLicuadora=document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

/*Parte Visual*/
function controlarLicuadora(){
if (estadoLicuadora == "apagada"){
estadoLicuadora="encendido";
hacerRuido();
licuadora.classList.add("active");

}else{
    estadoLicuadora="apagada";
    hacerRuido();
    licuadora.classList.remove("active");
}
}
/*Parte sonido*/
function hacerRuido(){
if(sonidoLicuadora.paused){
    botonLicuadora.play();
    sonidoLicuadora.play();
}else{
botonLicuadora.play();
sonidoLicuadora.pause();
/*para que empiece de 0 si le dan de nuevo a encender*/
sonidoLicuadora.currentTime= 0;
}
}