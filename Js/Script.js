
//Variaveis:
var btn_do_slider_1 = document.getElementById("btn-slider-1");
var btn_do_slider_2 = document.getElementById("btn-slider-2");
var btn_do_slider_3 = document.getElementById("btn-slider-3");
var Primeira_div_do_slider = document.getElementById("div-img-painel-publicitario-1");
var Segunda_div_do_slider = document.getElementById("div-img-painel-publicitario-2");
var Terceira_div_do_slider = document.getElementById("div-img-painel-publicitario-3");


//No click deste btn-1 do slider, esta função traz a Div número 1 do nosso slider:
btn_do_slider_1.addEventListener('click', 
    function(){
        document.querySelector(".div-img-painel-publicitario-1").style.transform = "translateX(0%)";
        document.querySelector(".div-img-painel-publicitario-2").style.transform = "translateX(100%)";
        document.querySelector(".div-img-painel-publicitario-3").style.transform = "translateX(200%)";
    }
) 

//No click deste btn-2 do slider, esta função traz a Div número 2 do nosso slider:
btn_do_slider_2.addEventListener('click', 
    function(){
        var Primeira_div_do_slider = document.querySelector(".div-img-painel-publicitario-2").style.transform;
        var Segunda_div_do_slider = document.querySelector(".div-img-painel-publicitario-2").style.transform;
   
        if(Primeira_div_do_slider == "translateX(100%)" && Segunda_div_do_slider == "translateX(100%)" ){
            document.querySelector(".div-img-painel-publicitario-1").style.transform = "translateX(-100%)";
            document.querySelector(".div-img-painel-publicitario-2").style.transform = "translateX(0%)";
            document.querySelector(".div-img-painel-publicitario-3").style.transform = "translateX(100%)";
        }
    }
) 

//No click deste btn-3 do slider, esta função traz a Div número 3 do nosso slider:
btn_do_slider_3.addEventListener('click',     
    function(){
        document.querySelector(".div-img-painel-publicitario-1").style.transform = "translateX(-200%)";
        document.querySelector(".div-img-painel-publicitario-2").style.transform = "translateX(-100%)";
        document.querySelector(".div-img-painel-publicitario-3").style.transform = "translateX(0%)";
    }
) 

var btn_seta_direita = document.querySelector("#btn-tipo-seta-direita");
var btn_seta_esquerda = document.querySelector("#btn-tipo-seta-esquerda");

//No click deste btn-3 do slider, esta função traz a Div número 3 do nosso slider:
btn_seta_direita.addEventListener('click',     
    function(){
    
        document.querySelector(".img-produto-1").style.transform = "translateX(-200%)";
        document.querySelector(".img-produto-2").style.transform = "translateX(0%)";
        document.querySelector("#div-dados-da-oferta-semanal").style.transform = "translateX(-140%)";
        document.querySelector("#div-dados-da-oferta-semanal-2").style.transform = "translateX(0%)";
    }
) 

btn_seta_esquerda.addEventListener('click',     
    function(){
        document.querySelector(".img-produto-1").style.transform = "translateX(0%)";
        document.querySelector(".img-produto-2").style.transform = "translateX(200%)";
        document.querySelector("#div-dados-da-oferta-semanal").style.transform = "translateX(0%)";
        document.querySelector("#div-dados-da-oferta-semanal-2").style.transform = "translateX(140%)";
    
    }
) 




var btn_abrir_menu_dropdown = document.getElementById("btn-menu");

btn_abrir_menu_dropdown.onclick = function(){

        document.getElementById("ul-menu").style.transform = "translateX(0%)";
        document.getElementById("ul-menu").style.transition = "01s 0s ease-in-out";
        document.getElementById("span-icon-fechar-menu-dropdown").style.display = "flex";
        document.getElementById("btn-menu").style.display = "none";
        document.getElementById("li-menu").style.transform = "translateX(0%)";
}


var btn_fechar_menu_dropdown = document.getElementById("span-icon-fechar-menu-dropdown");

btn_fechar_menu_dropdown.onclick = function(){

        document.getElementById("ul-menu").style.transform = "translateX(-100%)";
        document.getElementById("ul-menu").style.transition = "01s 0s ease-in-out";
        document.getElementById("span-icon-fechar-menu-dropdown").style.display = "none";
        document.getElementById("btn-menu").style.display = "flex";
}











