
//função para somar produtos no icone do carrinho
$(document).ready(function(){
    carrinhoIndex.innerHTML = 0;
  })
  
  var count = 0;
  
  function acrescentar() { 
    count++;
    carrinhoIndex.innerHTML = count;
  }