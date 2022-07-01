
var resultado;



function inserirNum(numero)
{
   
     resultado = document.getElementById("resultado");
    
     resultado.innerHTML += numero
    
}
function calcular(){

    resultado = document.getElementById("resultado").innerHTML;

    if(resultado) // se for digitado numero ele usa a função eval para realizar os calculos da calculadora
    {
    
        document.getElementById("resultado").innerHTML = eval(resultado); 
    }
    else{ //caso o usurario não tenha digitado nenhum numero ele retorna essa mensagem
        alert("Erro, Digite um Numero para Calcular")
    }
}

function limpar(){ //Função que faz limpar os dados da calculadora 
    resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
}

function apagar() //Função que faz apagar numero por numero
{
    resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
}