var imgs=[];
var slider;
var imgAtual;
var imgaMax;
var tmp

function preCarregar(){
    var s = 1
    for(var i=0;i<8;i++){
        imgs[i] = new Image();
        imgs[i].src="imgs/s"+s+".jpg";
        s++;
    }
}

function carregarImg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function inicia(){
    preCarregar();
    imgAtual = 0;
    imgaMax = imgs.length-1;
    slider = document.getElementById("slider");
    carregarImg(imgAtual);
    //tmp = setInterval(troca, 5000);
    //document.getElementById("btn1").addEventListener("click", troca(1));
    document.getElementById("btn2").addEventListener("click", troca(1));
}

function troca(num){
    if(num == 0){
        imgAtual--;
        if(imgAtual < 0)
            imgAtual = imgaMax-1;
        carregarImg(imgAtual);
    }
    else if(num == 1){
        imgAtual++;
        if(imgAtual > imgaMax)
            imgAtual = 0;
        carregarImg(imgAtual);
    }
}

window.addEventListener("load", inicia);