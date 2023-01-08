
let nomePrato;
let precoPrato;

function selecionaOpcaoPrato (itemP) {
    const itemSelecionadoAnt = document.querySelector ('.prato .selecionado');
    
    let prato = itemP.querySelector('.nome');
    nomePrato = prato.innerHTML;
    

    let preco = itemP.querySelector('.preco');
    precoPrato = preco.innerHTML;
    

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');             
}
    itemP.classList.add ('selecionado');
    
    verificaTodosItensSelecionados ();
}


let nomeBebida
let precoBebida;

function selecionaOpcaoBebida (itemB) {
    const itemSelecionadoAnt = document.querySelector ('.bebida .selecionado');
    
    let bebida = itemB.querySelector('.nome');
    nomeBebida = bebida.innerHTML;
    

    let preco = itemB.querySelector('.preco');
    precoBebida = preco.innerHTML;

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');
        
              
}
    itemB.classList.add ('selecionado');
    
    verificaTodosItensSelecionados ()
}


let nomeSobremesa;
let precoSobremesa;

function selecionaOpcaoSobremesa (itemS) {
    const itemSelecionadoAnt = document.querySelector ('.sobremesa .selecionado');
    
    let sobremesa = itemS.querySelector('.nome');
    nomeSobremesa = sobremesa.innerHTML;
    

    let preco = itemS.querySelector('.preco');
    precoSobremesa = preco.innerHTML;

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');             
}
    itemS.classList.add ('selecionado'); 
    
    verificaTodosItensSelecionados ()
}



function verificaTodosItensSelecionados () {
    if (nomePrato !== undefined){
        if (nomeBebida !== undefined){
            if (nomeSobremesa !== undefined){
                botaoFecharPedido = document.querySelector('.botao-fechar-pedido');
                botaoFecharPedido.disabled = false;
                botaoFecharPedido.classList.remove ('cor-fundo-antes');
                botaoFecharPedido.classList.add ('cor-fundo-depois');
                botaoFecharPedido.innerHTML = "Fechar pedido";
            }
        }
    }
}

function transformaPrecoEmNumero (preco) {
    let arr = preco.split ('');
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    let arrFinal = [];
    for (i=0; i < arr.length; i++){
        if (numeros.includes(arr[i]) === true){
            arrFinal.push(arr[i]);
        }
        if (arr[i] === ","){
            arrFinal.push(".");
        }
    }
    let str = arrFinal.join("");
    let valor = Number(str);
    return valor
}


let totalFinal;

function calculaPrecoTotal (){
    let valorPrato = transformaPrecoEmNumero (precoPrato);
    let valorBebida = transformaPrecoEmNumero (precoBebida);
    let valorSobremesa = transformaPrecoEmNumero (precoSobremesa);
    let total = valorPrato + valorBebida + valorSobremesa;
    let totalArred = total.toFixed(2)
    let arry = totalArred.split ('');
    let arrVazio = [];
    for (i=0; i < arry.length; i++) {
        if (arry[i] === "."){
            arrVazio.push (",");
        } else {
            arrVazio.push (arry[i]);
        }
    }
    totalFinal = "R$" + arrVazio.join("");
    document.querySelector('.preco-total').innerHTML = totalFinal
    
}
function fecharPedido () {
    const fechaPedido = document.querySelector ('.container-fechar-pedido');
    fechaPedido.classList.remove ('escondido');
    document.querySelector('.nome-prato').innerHTML = nomePrato
    document.querySelector('.preco-prato').innerHTML = precoPrato
    document.querySelector('.nome-bebida').innerHTML = nomeBebida
    document.querySelector('.preco-bebida').innerHTML = precoBebida
    document.querySelector('.nome-sobremesa').innerHTML = nomeSobremesa
    document.querySelector('.preco-sobremesa').innerHTML = precoSobremesa
    calculaPrecoTotal ();
    document.querySelector('.preco-total').innerHTML = totalFinal
}

let nome;
let endereco;

function nomeEndereco (){
    nome = prompt("Digite seu nome abaixo:");
    endereco = prompt ("Digite seu endereço abaixo (nome da rua e número):");
}

function executaDuasFuncoes (){
    nomeEndereco ();
    fecharPedido ();
}

function cancelarPedido () {
    const fechaPedido = document.querySelector ('.container-fechar-pedido');
    fechaPedido.classList.add ('escondido');
}

function mandaPedidoWpp () {
    let pedido = 
    `Olá, gostaria de fazer o pedido:
    
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa ${nomeSobremesa}
    Total: ${totalFinal}
    
    Nome: ${nome}
    Endereço: ${endereco}`;

    pedido = window.encodeURIComponent(pedido);
    window.open("https://wa.me/5521994797262?text=" + pedido);
}





