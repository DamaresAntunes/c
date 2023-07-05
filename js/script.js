function mostraPreco(elemento,preco){
    $('.preco').css('display','none');
    $('#'+ elemento).css('display','block');
    $('input[name=preco_sabor]').val(preco);

}

function fazConta(){
    p1= document.querySelector("input[name=preco_sabor]").value;
    p2= document.querySelector("input[name=preco_tamanho]").value;

    $('#resultado').text(p1 * p2);
}