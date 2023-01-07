function selecionaOpcaoPrato (item) {
    const itemSelecionadoAnt = document.querySelector ('.prato .selecionado');
    const icon = document.querySelector ('.selecionado .icone');
    

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');
        icon.classList.remove ('icone');
              
}
    item.classList.add ('selecionado');
    icon.classList.add ('icone');

    
}

function selecionaOpcaoBebida (item) {
    const itemSelecionadoAnt = document.querySelector ('.bebida .selecionado');
    const icon = document.querySelector ('.selecionado .icone');
    

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');
        icon.classList.remove ('icone');
              
}
    item.classList.add ('selecionado');
    icon.classList.add ('icone');

    
}

function selecionaOpcaoSobremesa (item) {
    const itemSelecionadoAnt = document.querySelector ('.sobremesa .selecionado');
    const icon = document.querySelector ('.selecionado .icone');
    

    if (itemSelecionadoAnt != null){
        itemSelecionadoAnt.classList.remove ('selecionado');
        icon.classList.remove ('icone');
              
}
    item.classList.add ('selecionado');
    icon.classList.add ('icone');

    
}