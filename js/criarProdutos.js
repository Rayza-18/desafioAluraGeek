import { conectaApi} from "./central.js" 

const formulario = document.querySelector("[data-formulario]");

try{

 async function criarProdutos(evento){
    evento.preventDefault();
    
    const imagem = document.querySelector("[data-imagem]").value;
    const valor = document.querySelector("[data-valor]").value;
    const nome =document.querySelector ("[data-nome]").value;

    await conectaApi.criarProdutoCentral(nome,valor,imagem)

    alert('envio concluido')
    console.log('criar produto')
 }
formulario.addEventListener("submit", evento => criarProdutos(evento));
}catch{
    console.log('não funciona')
}
