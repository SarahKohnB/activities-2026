//exemplo 01
// let idade = 17;

// if (idade >= 18){
//     console.log("Você é maior de idade!")
// } else {
//     console.log("Você é menor de idade")
// }

//exemplo 02

// let nota = 8

// if (nota >= 7){
//     console.log("Aprovado! 🤩")
// } else {
//     console.log("Reprovado... 😢")
// }

//exemplo 3 
//let senha = prompt("Digite sua senhaaa: ")

// let senha = "0205"

// if (senha === "0204"){
//     console.log("Acesso autorizado! 🐼")
// } else {
//     console.log("Acesso negado! 😶 ")
// }

//###################### Exercícios #####################

//1
let numero = -5

if(numero >= 0){
    console.log("Número positivo")
}else{
    console.log("Número negativo")
}

//2
let idade = 17;

if (idade >= 18){
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade")
}

//3
let number = 12
if (number % 2 === 0){
    console.log("Seu número é par")
}else{
    console.log("Seu número é ímpar")
}

//4
let nota = 8

if (nota >= 7){
   console.log("Aprovado! 🤩")
 } else {
    console.log("Reprovado... 😢")
}

//5
let votar = 12;

if (votar >= 16){
    console.log("Você pode votar!")
} else {
    console.log("Você ainda não pode votar")
}

//6
let senha = "1234"
if (senha === "1234"){
    console.log("acesso permitido")
}else{
    console.log("acesso negado")
}

//7
let temp = 32
if (temp >= 25){
    console.log("O dia está quente")
}else {
    console.log("Hoje está frio")
}

//8
let altura = 1.62

if (altura >= 1.40){
    console.log("Você tem a altura válida")
} else{
    console.log("Você não tem a altura mínima")
}

//9
let num = 1

if(num > 0){
    console.log("Número positivo")
} else if (number === 0){
    console.log("Seu número é 0")
} else {
    console.log("Número negativo")
}

//10
let nota1 = 3

if (nota1 >= 9){
    console.log("Nota excelente")

} else if (nota1 >= 7){
    console.log("Nota Boa")

} else if (nota1 === 6){
    console.log("Nota regular")
} else {
    console.log("Reprovado")
}
//11
let idade3 = 20
let temCNH = true

if (idade >= 18 && temCNH){
    console.log("Pode dirigir")

} else{
    console.log("Não pode dirigir")
}

//12
let compras = 250 

if(compras > 100){
    console.log("Você ganhou desconto na sua compra de " + compras + " reais")
} else{
    console.log("Sem descontos disponiveis")
}

//13
let usuario = "admin"
let senhaUsuario = "1234"

if (usuario === "admin" && senhaUsuario === "123"){
    console.log("Login realizado com sucesso")
} else {
    console.log("Erro de login")
}

//14
let filme = 12
if(filme >= 16){
    console.log("Você pode assistir esse filme")
} else {
    console.log("Você ainda não tem idade o suficiente para assistir esse filme")
}

//15
let cor = "amarelo"
if (cor === "verde"){
    console.log("Sinal verde, pode passar")
} else if (cor === "amarelo"){
    console.log("Sinal amarelo, atenção !")
} else {
    console.log ("Sinal vermelho, pare")
}