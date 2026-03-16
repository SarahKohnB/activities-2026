async function buscarHusky() {
    try {
        const resposta = await fetch("https://dog.ceo/api/breed/husky/images/random");
        const dados = await resposta.json();
        console.log("🐺 Husky:", dados.message);

    } catch (erro) {
        console.error("Erro ao buscar imagem:", erro);
    }
}

buscarHusky();