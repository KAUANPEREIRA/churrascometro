//Carne 400 gr por pessoa +6 ==650gr
//cerveja 1200 ml por pessoa + 6horas ==2000
//refrigerante/agua- 1000 ml por pessoa + 6 horas 1500ml


let adultos= document.querySelector('#adultos')
let criancas=document.querySelector('#criancas')
let duracao=document.querySelector('#horarios')
let res=document.querySelector('.res')
let carne ;
let fcarne;


function calcular(){
    let a = adultos.value
    let c= criancas.value
    let quantidadeCarne= carnePP(duracao)* a + (carnePP(duracao) / c)
    let quantidadeCerveja= cervejaPP(duracao)* a 
    let quantidadeBebidas= bebidas(duracao)* a + (bebidas(duracao) / c)
    
    carne=res.innerHTML=`<p>${(quantidadeCarne/1000).toFixed(2)} Kg de carne</p>`
    
    res.innerHTML+=`<p>${Math.ceil(quantidadeCerveja/355)} latas de cerveja</p>`
    res.innerHTML+=`<p>${Math.ceil(quantidadeBebidas/2000)} garrafas de refri e suco</p>`
}

function carnePP(duracao){
    if(duracao>=6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao>=6){
        return 2000
    }else{
        return 1200
    }
}
function bebidas(duracao){
    if(duracao>=6){
        return 1500
    }else{
        return 1000
    }
}