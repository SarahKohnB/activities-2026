//Ao pressionar as teclas "r", "g", ou "b", mudar a cor de fundo da pagina

//1
document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
    } else if (e.key === "g"){
        document.body.style.backgroundColor = "green"
    } else {
        document.body.style.backgroundColor = "blue"
    }
})

//2
document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
        console.log("tecla pressionada: ", e.key)
    } else if (e.key === "g"){
        document.body.style.backgroundColor = "green"
        console.log("tecla pressionada: ", e.key)
    } else {
        document.body.style.backgroundColor = "blue"
        console.log("tecla pressionada: ", e.key)
    }
})

//3
document.addEventListener("keydown", function(e){

    let tecla = e.key.toLowerCase();

    if (tecla === "r"){
        document.body.style.backgroundColor = "red"

    } else if (tecla === "g"){
        document.body.style.backgroundColor = "green"
       
    } else {
        document.body.style.backgroundColor = "blue"
        
    }
})

//4

document.addEventListener("keydown", function(e){

    let cor = document.getElementById("cor")
    let tecla = e.key.toLowerCase();

    if (tecla === "r"){
        document.body.style.backgroundColor = "red"
        cor.innerHTML = "Vermelho"

    } else if (tecla === "g"){
        document.body.style.backgroundColor = "green"
        cor.innerHTML = "Verde"

    } else {
        document.body.style.backgroundColor = "blue"
        cor.innerHTML = "Azul"
    }
})

//5

document.addEventListener("keydown", function(e){
    let tecla = e.key.toLowerCase();

    if (tecla  === "r"){
        document.body.style.backgroundColor = "red"
        console.log("tecla pressionada: ", e.key)

    } else if (tecla  === "g"){
        document.body.style.backgroundColor = "green"
        console.log("tecla pressionada: ", e.key)

    } else if (tecla  === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log("tecla pressionada: ", e.key)

    }else if (tecla === "p"){
        document.body.style.backgroundColor = "purple"
        console.log("tecla pressionada: ", e.key)

    }else  {
        document.body.style.backgroundColor = "blue"
        console.log("tecla pressionada: ", e.key)

    }
})

//6

document.addEventListener("keydown", function(e){
    let tecla = e.key.toLowerCase();

    if (tecla  === "r"){
        document.body.style.backgroundColor = "red"
        console.log("tecla pressionada: ", e.key)

    } else if (tecla  === "g"){
        document.body.style.backgroundColor = "green"
        console.log("tecla pressionada: ", e.key)

    } else if (tecla  === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log("tecla pressionada: ", e.key)

    }else if (tecla === "p"){
        document.body.style.backgroundColor = "purple"
        console.log("tecla pressionada: ", e.key)

    }else if (tecla === "x") {
        document.body.style.backgroundColor = ""; // Remove a cor
       console.log("Cor removida") 
       cor.innerHTML = "Cor Removida"
    } else  {
        document.body.style.backgroundColor = "blue"
        console.log("tecla pressionada: ", e.key)
    }
})

//7

// Objeto que guarda teclas e cores
let cores = {
    r: "red",
    g: "green",
    y: "yellow",
    p: "purple"
};

document.addEventListener("keydown", function(e) {

    let tecla = e.key.toLowerCase();

    if (tecla === "x") {
        document.body.style.backgroundColor = "";
        console.log("Cor removida");
        return;
    }

    // Verifica se a tecla existe dentro do objeto
    if (cores[tecla]) {
        document.body.style.backgroundColor = cores[tecla];
        console.log("Tecla pressionada:", e.key);
    } else {
        document.body.style.backgroundColor = "blue";
        console.log("Tecla pressionada:", e.key);
    }

});

//8
let cor = {
    r: "red",
    g: "green",
    b: "blue",
    y: "yellow",
    p: "purple"
};
let codigos = {
    red: "#FF0000",
    green: "#008000",
    blue: "#0000FF",
    yellow: "#FFFF00",
    purple: "#800080"
};

document.addEventListener("keydown", function(e){
 if (e.key.toLowerCase() === "r"){
        document.body.style.backgroundColor = "red"
        console.log(codigos.red)

 }else if(e.key.toLowerCase() === "g"){
    document.body.style.backgroundColor = "green"
    console.log(codigos.green)

 }else if(e.key.toLowerCase() === "b"){
    document.body.style.backgroundColor = "blue"
    console.log(codigos.blue)

 }else if(e.key.toLowerCase() === "y"){
    document.body.style.backgroundColor = "yellow"
    console.log(codigos.yellow)

 }else if (e.key.toLowerCase() === "p"){
    document.body.style.backgroundColor = "purple"
    console.log(codigos.purple)
}

})

//9
// Lista de cores
// const color = ["red", "green", "yellow", "purple", "blue"];
// let contagem = 0;

// document.addEventListener("keydown", function(e){

//     // Aplica a próxima cor
//     document.body.style.backgroundColor = color[contagem];

//     // Mostra RGB no console
//     let corRGB = window.getComputedStyle(document.body).backgroundColor;
//     console.log("Tecla pressionada:", e.key);
//     console.log("Cor aplicada:", color[contagem]);
//     console.log("Cor aplicada em RGB:", corRGB);

//     // Avança para a próxima cor
//     contagem++;

//     // Se chegar ao final, volta para o início
//     if (contagem >= color.length) {
//         contagem = 0;
//     }
// });

//10
document.addEventListener("keydown", function(e){
    let tecla = e.key.toLowerCase();

    if (tecla  === "r"){
        document.body.style.backgroundColor = "red"
        console.log("tecla pressionada: ", e.key)

    } else if (tecla  === "g"){
        document.body.style.backgroundColor = "green"
        console.log("tecla pressionada: ", e.key)

    } else if (tecla  === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log("tecla pressionada: ", e.key)

    }else if (tecla === "p"){
        document.body.style.backgroundColor = "purple"
        console.log("tecla pressionada: ", e.key)

    }else if (tecla === "d") {
        document.body.style.backgroundColor = ""; // Remove a cor
        document.body.style.color = "black"
       console.log("Modo claro") 
       cor.innerHTML = "Modo claro"
    } else if (tecla === "n") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
       console.log("Modo escuro") 
       cor.innerHTML = "Modo escuro"
    }
    
    else  {
        document.body.style.backgroundColor = "blue"
        console.log("tecla pressionada: ", e.key)
    }
})