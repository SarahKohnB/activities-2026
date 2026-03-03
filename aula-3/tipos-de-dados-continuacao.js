//Um arry é uma lista que pode armazenar vários valores

let fruta = ["Maçã", "Uva", "Abacaxi"]
console.log(fruta[0])
console.table(fruta)

//adiciona uma fruta
fruta.push("Melancia")
console.log(fruta)
console.table(fruta)

//remove a ultima posição
//fruta.pop(0)
//console.table(frutas)

//remover a posição indicada(splice)
//fruta.splice(1)
//console.table(fruta)

let animal = ["Gato", "Tigre", "Tartaruga"]
console.table(animal)

//exercícios
//1
let cores = ["Rosa", "Amarelo", "Azul"]
console.log(cores[1])

//2
let numeros = [1, 2, 3, 4, 5]
console.log(numeros[0])
console.log(numeros[4])

//3
let frutas = ["Laranja", "Melão"]
console.table(frutas)
frutas.push("Kiwi")
console.table(frutas)

//4
let nomes = ["Sarah", "Cristian", "Danilo", "Maria"]
console.table(nomes)
nomes.pop(3)
console.table(nomes)

//5
let times = ["Corinthians", "Flamengo", "Grêmio"]
console.log("Possui " + 3 + " itens, que são: " + times)

//6
let animais = ["Passarinho", "Porco", "Cachorro", "Coelho"]
console.table(animais)

//7
let carros = ["Fusca", "Fiat", "Celta"]
console.table(carros)
carros[1]= "Ferrari"
console.table(carros)
console.log("alterei o segundo item, de Fiat para Ferrari")

//8
let linguagens=["C++", "Html", "JavaScript"]
console.log(linguagens[2]== "JavaScript")

//9
let valores = [4, 7, 8]
let soma = valores[0] + valores[1] + valores [2]
console.log("O valor da soma é: " + soma)

//10
let tarefas = []
tarefas.push("Fazer lição de casa")
tarefas.push("Dar comida pro cachorro")
tarefas.push("Fazer o jantar")
console.table(tarefas)