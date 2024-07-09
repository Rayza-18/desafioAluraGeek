//crie uma função para ligar ao api
async function listaProdutosCentral(){
    const conexao = await fetch("http://localhost:3000/projetos"); //depois de fazer aquele processo do console e criar a api, esse deve ligar tudo
    const conexaoConvertida = await conexao.json(); // é preciso converter paara entender
    //console.log(conexaoConvertida) PARA VER SE DAR CERTO ESCREVER ANTES
    return conexaoConvertida;
}

async function criarProdutoCentral(nome,valor,imagem){
    const conexao = await fetch("http://localhost:3000/projetos", {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor:valor,
            imagem:imagem
        })
    });

    const conexaoConvertida = await conexao.json(); 
    return conexaoConvertida;
}
//produtos() //chama a função


export const conectaApi = { // para exportar
listaProdutosCentral,
criarProdutoCentral
}