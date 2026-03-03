//Funções em JS 

//Uma função é um bloco de código reutilizável, criado para executar uma tarefa específica

//function nomeDaFuncao (parametro1, parametro2)
    //código que será executado
//return idadeResultado;
//}

//Exemplo 01 - Somar dois números

// function somar(a, b){
//     return a + b;
// }
// somar(2,3)
// console.log(somar(2,3)); //5

// function realParaDolar(valorReal, cotacao){
//     return valorReal/cotacao
// }
// console.log(realParaDolar(20,5.17).toFixed(2)) //o to.fixed (2) reduz o numero de casas pós virgula para duas

// //Calcular aumneto de salário
// function calcularAumento(salario){
//     return salario + (salario * 0.25)
// }
// console.log(calcularAumento(10000))

//Atividade #########################

//1
function dobro (valor){
    return valor*2;
}
dobro(3);
console.log(dobro(3));

//2
function triplo (numero){
    return numero*3;
}
triplo(5);
console.log(triplo(5));

//3
function soma (a, b){
    return a + b;
}
soma(6,8);
console.log(soma(6,8));

//4
function multi (c, d){
    return c*d;
}
multi(3,9);
console.log(multi(3,9));

//5
function realParaDolar(valorReal, cotacao1){
    return valorReal/cotacao1
 }
console.log(realParaDolar(20,5.17).toFixed(2))

//6
function realParaDolar(valorDolar, cotacao2){
    return valorDolar/cotacao2
 }
console.log(realParaDolar(25,0.19).toFixed(2))

//7
function aumento (salario){
    return salario + (salario*0.10);
}
aumento(2000);
console.log(aumento(2000));

//8
function par (number){
    return number % 2 === 0
}
console.log(par(4))
console.log(par(7))

//######### FOR #########
//O for é usado quando queremos repetir um trecho de código várias vezes, geralmente sabendo *** QUANTAS VEZES *** ele deve se repetir
//for (inicio, condição, incremento){
    //código que será repetido
//}
//início ---> onde começa
//condição ---> até onde repete
//incremento ---> o valor muda a cada volta

//9
function contar(){
    for (let i=1; i <=10; i++){
        console.log(i)
    }
}
contar()

//10
function limite(){
    for (let i=0; i <=7; i++){
        console.log(i)
    }
}
limite()

//11
function somarDez(){
    let somarr = 0;
    for(let i=1; i <=10; i++){
        somarr +=i;
    }
    return somarr;
}
console.log(somarDez())

//12
function quantosPares (){
    let contador = 0;
    for (let i = 0; i <= 10; i++){
        if ( i % 2 === 0){
            
            contador ++;
        }
    }
   return (contador)
}
console.log("De 0 a 10 tem: " + quantosPares()+ " números pares");

//13
function tabuada(num){
    for (let i = 1; i <=10; i++){
       
        console.log(num + " x " + i + " = " + (num * i));
    }
}
tabuada(9)

//14
function contagemRegressiva(){
    for (let i = 10; i >=1; i--){
        console.log(i)
    }
}
contagemRegressiva()


//15
function encontrar27() {
    for (let i = 0; i <= 30; i++) {
        if (i === 27) {
            console.log("encontrei o número escolhido:", i);
        }
    }
}

encontrar27();

//16
function somaPares(limite) {
    let soma = 0;

    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            soma = soma + i;
        }
    }

    console.log("Soma dos pares:", soma);
}

somaPares(10);


//17
function contarImpares(limite) {
    let contador = 0;

    for (let i = 0; i <= limite; i++) {
        if (i % 2 != 0) {
            contador++;
        }
    }

    console.log("quantidade de ímpares:", contador);
}

contarImpares(10);


//18
function media(a, b) {
    let resultado = (a + b) / 2;
    return resultado;
}

console.log("média:", media(8, 6));


//19
function quadrado(numero) {
    let resultado = numero * numero;
    return resultado;
}

console.log("quadrado:", quadrado(4));