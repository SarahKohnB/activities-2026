//TIPOS DE DADOS
//No JavaScript, tudo o que armazenamos em variaveis tem um tipo. Esses tipos definem o que podemos fazer com os valores

// ### Principais tipos de dados :

// - **String** (textos)
// - **Number** (números)
// - **Boolean** (verdadeiro ou falso)
// - **Object** (objetos que agrupam informações)
// - **Array** (lista de valores)
// - **Null** (valor vazio)
// - **Undefined** (quando algo não foi definido)

//String 
//Sempre é escrita entre aspas ("" ou '')
let nome = "Sarah"
let mensagem = 'Olá mundo'

console.log(nome);
console.log(mensagem);

//O 'typeof' serve para **descobrir o tipo de um valor ou variável**
console.log(typeof nome);

//Podemos usar + para juntar strings!
let saudacao = "olá, " + nome + "!";
console.log(saudacao);

//Crie uma variavel chamada cidade e armazene o nome de uma cidade.
//Depois, exiba no console: "Eu moro em [cidade]"

let cidade = "California"
console.log("Eu moro na " + cidade + ".")

//template String (pode colocar as variavies dentro das aspas, fica mais prático)
console.log(`Eu moro na ${cidade}!`)

// - **Number** (números)
//No JavaScript, números podem ser inteiros ou decimais.
let idade = 17;
let altura = 1.75;
console.log(idade);
console.log(altura);
console.log(typeof altura);

let soma = 10 + 5;
console.log(soma);

//Crie uma variavel chamada `anoAtual` e outra chamada `anoNascimento`.
//Calcule e exiba a idade no console 

let anoAtual = 2026;
let anoNascimento = 2008;
let idadeResultado = anoAtual - anoNascimento;
console.log("Esse ano você completa/completou: " + idadeResultado + " anos");
console.log(`Sua idade é: ${idadeResultado} anos`);

//#####################################################

//camelCase ---- Mais Famosa
//Primeira palavra minúscula
//Palavras seguintes começam com maiúscula
//let idadeUsuario = 0 

//PascalCase
//Todas as palavras começam com a letra maiúscula
//usada para classes, contrutores e componentes
// class UsuarioSistema{
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

//Snake Case
//Palavras separadas por underscore _
//tudo minúsculo
//muuuuito comum no python, banco de dados e APIs
//let meu_nome_completo

//Kebab-case
//Palavras separadas por hífen -
//!!!!!!! NÃO FUNCIONA COMO NOME DE VARIAVEL EM JAVASCRIPT
//<div class = "menu-principal"> </div>
//#####################################################

// - **Boolean** (verdadeiro ou falso)
//Um Boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso)
let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade);
console.log(menorDeIdade);

//Muito utilizado para fazer comparações
let idade2 = 20;
let podeDirigir = idade2 >= 18;
console.log(podeDirigir);

// Objeto
// Um objeto agrupa várias informações 
let pessoa = {
    nome:"Jessica",
    idade: 17,
    cidade:"Mogi das Cruzes"
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

let carro = {
    marca:"Fiat",
    modelo: "Fiat Cronos",
    ano: 2018
};
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

//Exercícios ########################################################

//String (Textos):
//1
let meuNome = "Sarah "
console.log(meuNome)

//2
let meuSobrenome = "Kohn Baldoini"
console.log(meuNome + meuSobrenome)

//3
let fruta = "Abacaxi"
console.log(`Minha fruta preferida é ${fruta}!`)

//4
let escola = "SESI"
console.log("Eu estudo no " + escola + " de quarta à sexta")

//5
let feriado = "Natal"
let mes = "Dezembro"
console.log(`Meu feriado preferido é o ${feriado} que acontece no mes de ${mes}`)

//6
let nomeUsuario = "Sofia"
console.log(`Boas-Vindas ${nomeUsuario} espero que tenha uma boa experiência`)

//7
let texto = "Estou com muita fome"
console.log(texto.length)

//8
let maiusculo = "oii vou ficar em maiusculo :)"
console.log(maiusculo.toUpperCase)

//9
let minusculo = "oii vou ficar em minusculo :)"
console.log(minusculo.toLowerCase)

//10
let nome1 = "Juliana"
let cidade1 = "Belo Horizonte"
console.log(`Você se chama ${nome1} e mora em ${cidade1}`)

//Number (Números)
//1
let soma1 = 20
let soma2 = 10
console.log(soma1+soma2)

//2
let sub1 = 50
let sub2 = 27
console.log(sub1-sub2)

//3
let mult1 = 3
let mult2 = 5
console.log(mult1*mult2)

//4
let divi1 = 30
let divi2 = 5
console.log(divi1/divi2)

//Boolean (Verdadeiro ou Falso)
//1
const ativo = true
console.log(ativo)

//2
const numero = 20
console.log(numero > 10)

//3
let idadee = 10;
let maiorIdade = idadee >= 18;
console.log(maiorIdade);