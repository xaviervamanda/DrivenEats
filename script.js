let nomePrato;
let precoPrato;

function selecionaOpcaoPrato (itemP) {
    const itemSelecionadoAnt = document.querySelector ('.prato .selecionado');
    
    const prato = itemP.querySelector('.nome');
    nomePrato = prato.innerHTML;
    

    const preco = itemP.querySelector('.preco');
    precoPrato = preco.innerHTML;
    

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');             
}
    itemP.classList.add ('selecionado');
    
    verificaTodosItensSelecionados ();
}

let nomeBebida;
let precoBebida;

function selecionaOpcaoBebida (itemB) {
    const itemSelecionadoAnt = document.querySelector ('.bebida .selecionado');
    
    const bebida = itemB.querySelector('.nome');
    nomeBebida = bebida.innerHTML;
    

    const preco = itemB.querySelector('.preco');
    precoBebida = preco.innerHTML;

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');
        
              
}
    itemB.classList.add ('selecionado');
    
    verificaTodosItensSelecionados ();
}

let nomeSobremesa;
let precoSobremesa;

function selecionaOpcaoSobremesa (itemS) {
    const itemSelecionadoAnt = document.querySelector ('.sobremesa .selecionado');
    
    const sobremesa = itemS.querySelector('.nome');
    nomeSobremesa = sobremesa.innerHTML;
    

    const preco = itemS.querySelector('.preco');
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
                let botaoFecharPedido = document.querySelector('.botao-fechar-pedido');
                botaoFecharPedido.disabled = false;
                botaoFecharPedido.classList.remove ('cor-fundo-antes');
                botaoFecharPedido.classList.add ('cor-fundo-depois');
                botaoFecharPedido.innerHTML = "Fechar pedido";
            }
        }
    }
}

function transformaPrecoEmNumero (preco) {
    const arr = preco.split ('');
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];
    const arrFinal = [];
    for (let i=0; i < arr.length; i++){
        if (numeros.includes(arr[i]) === true){
            arrFinal.push(arr[i]);
        }
        if (arr[i] === ","){
            arrFinal.push(".");
        }
    }
    let str = arrFinal.join("");
    return Number(str)
}


let totalFinal;

function calculaPrecoTotal (){
    const valorPrato = transformaPrecoEmNumero (precoPrato);
    const valorBebida = transformaPrecoEmNumero (precoBebida);
    const valorSobremesa = transformaPrecoEmNumero (precoSobremesa);
    const total = valorPrato + valorBebida + valorSobremesa;
    const numeroCasasDecimais = 2;
    const totalArred = total.toFixed(numeroCasasDecimais);
    const arry = totalArred.split ('');
    const arrVazio = [];
    for (i=0; i < arry.length; i++) {
        arrVazio.push (arry[i]);
    }
    totalFinal = "R$" + arrVazio.join("");
    document.querySelector('.preco-total').innerHTML = totalFinal;
    
}
function fecharPedido () {
    const fechaPedido = document.querySelector ('.container-fechar-pedido');
    fechaPedido.classList.remove ('escondido');
    document.querySelector('.nome-prato').innerHTML = nomePrato;
    document.querySelector('.preco-prato').innerHTML = precoPrato;
    document.querySelector('.nome-bebida').innerHTML = nomeBebida;
    document.querySelector('.preco-bebida').innerHTML = precoBebida;
    document.querySelector('.nome-sobremesa').innerHTML = nomeSobremesa;
    document.querySelector('.preco-sobremesa').innerHTML = precoSobremesa;
    calculaPrecoTotal ();
    document.querySelector('.preco-total').innerHTML = totalFinal;
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
    let pedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa ${nomeSobremesa}
    Total: ${totalFinal}
    
    Nome: ${nome}
    Endereço: ${endereco}`;

    pedido = window.encodeURIComponent(pedido);
    window.open("https://wa.me/5521994797262?text=" + pedido);
}





