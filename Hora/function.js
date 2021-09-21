var tmp;
var interval;
var darkmode = new Date(), hor;

hor = darkmode.getHours()

function darktheme(){
    if((hor > 17 && hor < 23) || (hor > 00 && hor < 07)){
        document.getElementById("full").style.backgroundColor="rgb(82, 82, 82)";
        document.getElementById("botao1").style.color="rgb(255, 255, 255)";
        document.getElementById("botao2").style.color="rgb(255, 255, 255)";
        document.getElementById("mid").style.color="rgb(255, 255, 255)";
    }
}

function cor_da_hora(){
    var hour=document.getElementById("mid");
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);

    hour.style.backgroundColor="rgb("+r+", "+g+", "+b+")";
}

function iniciar(){
    document.getElementById("horilda").style.display="block"
    document.getElementById("mid").style.backgroundColor="transparnt";
    // Função para formatar 1 em 01
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    // Cria intervalo
    interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date();

        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

        // Exibe na tela usando a div#data-hora
        document.getElementById('horilda').innerHTML = dataHora;
    }, 1000);

    tmp = setInterval(cor_da_hora, 1000);
}

function parar(){
    clearInterval(tmp);
    clearInterval(interval);
    document.getElementById("horilda").style.display="none";
    document.getElementById("mid").style.backgroundColor="transparent";
}
        
function addEventos(){
    document.getElementById("botao1").addEventListener("click", iniciar);
    document.getElementById("botao2").addEventListener("click", parar);
}

window.addEventListener("load", addEventos);
window.addEventListener("load",  darktheme);

