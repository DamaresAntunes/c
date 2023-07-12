function mostraPreco(e,elemento,tipo){

    var p1=  $('input[name=preco_sabor]');
    var p2=  $('input[name=preco_tamanho]');

    $(e).siblings().removeClass("selected");
    if(e.classList.contains("selected")){
        e.classList.remove("selected");

    }else{
        e.classList.add("selected");

    }

    if (tipo == 1){
      //  $('.e1 .preco').css('display','none');
        p1.val(parseInt(document.querySelector("#"+elemento).innerHTML));
    } else {
      //  $('.e2 .preco').css('display','none');
        p2.val(parseInt(document.querySelector("#"+elemento).innerHTML));
    }
   // $('#'+ elemento).css('display','block');

        
    $('#resultado').text(parseInt(p1.val()) + parseInt(p2.val()));
   
}
