async function explorar(){
    //1 buscar todas as raças
    
    //faz uma requisição para a API que lista todas as raças
    const racas = await fetch('https://dog.ceo/api/breeds/list/all')

    //quando a resposta chegar, convertemos para json
    .then(r => r.json());

    //2 contar quantas racas existem
    //object.keys pega todas as propriedades do objeto
    //cada propriedade éuma raça de cachorro

    const total = Object.keys(racas.message).length;

    //mostrar o total das raças no console
    console.log('Total de raças: ${total}');

    //3 descobrir raças que tem sub-raças
    //percorrer cada raça d objeto
    for(const raca in racas.message){
        //racas.message[raca] é um array de sub-raças
        //se o array tiver tamanho maior que 0, significa que essa raça possui sub-raças
        if(racas.message[raca].length > 0){
            //mostra no console quais são as sub-raças
            console.log('${raca} tem sub- raças', racas.message[raca]);
        }
    }

}
//chamar função
explorar();