import { conectaApi} from "./central.js" //importa o arquivo json

const lista = document.querySelector("[data-lista]") // pega aquela div e tem q colcara datalista nela (a div PAI)

function constroiCard(nome, valor, imagem) {
    //construido o elemento em java script
    const produtos = document.createElement("div"); //criou um elemento tipo div
    produtos.className = "card_produtos" //adicionar uma class
    // pega os elementos do hrml que tiver dentro do data 
    produtos.innerHTML = `<img src="${imagem}" class="produtoImg" alt=""> 
    <div class="card_produtosInfo"> 
    <p class="produtoNome">${nome}</p> 
    <div class="card_produtosValor"> 
    <strong>$ ${valor}</strong> 
    <img src="./img/icons8-lixeira-32.png" class="produtoImgLogo delete-button"  alt="icon Compras"> 
    </div>
     </div>`
// o innerHTMl bota o html dentro do elemento

    return produtos;
}

async function listaProdutos(){
    const listaApi = await conectaApi.listaProdutosCentral();
    // nota que estou colocando os valores da Api aqui
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.valor, elemento.imagem)))
}

listaProdutos();
