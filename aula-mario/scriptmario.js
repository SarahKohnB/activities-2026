//Criação de variáveis para encontrar as classes

//====================================================
//Jogo do mario
//===================================================

let mario = document.querySelector('.mario')
let cano = document.querySelector('.cano')
let nuvem = document.querySelector('.nuvem')
let telaFim = document.querySelector('.fim')
let botaoReiniciar = document.querySelector('.reiniciar')

console.log('=== PARADA 01 ===')
console.log('Mario:', mario)
console.log('Cano:', cano)
console.log('Nuvem:', nuvem)
console.log('Tela de Fim:', telaFim)
console.log('Botão:', botaoReiniciar)

function pular(){
    mario.classList.add('pular')

    //setimeout = espera um tempo e depois executa algo
    setTimeout(function(){
        //desta forma o mario volta ao normal depois do pulo
        mario.classList.remove('pular')
    }, 500) //500 milissegundos = 0,5 segundos
}

document.addEventListener('keydown', function(){
    //Mostra que pode ver no console quando a tecla é pressionada
    console.log('Tecla pressionada! chamando função pular()')

    //Chamar a função pular
    pular();
})

//Faça funcionar com um clique do mouse na tela
document.addEventListener('click', function(){
    console.log('Click do Mouse! chamando função pular ()')
    pular();
})

console.log('====== INICIANDO O LOOP DO JOGO ======');
console.log ('Agora o jogo vai começar a verificar colisão....')

let loopDoJogo = setInterval(function(){

    //offsetLeft: Distância do elemento até a borda esquerda da tela
    let posicaoCano = cano.offsetLeft

    //getComputeStyle = pega o estilo atual do elemento
    //replace tira o 'px' do valor e o + na frente transforma em número
    //---> +window.getComputedStyle(mario)
    //---> .bottom
    //---> Pega a distância do Mario (em pixels)
    //---> .replace
    //---> Tira o px, deixando só o numero : "120"
    //---> +window, só o +
    //---> Transforma o texto "120" no número 120, para o JS fazer contas
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log('cano:', posicaoCano, 'Mario: ', posicaoMario)
})