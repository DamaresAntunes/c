function mostraPreco(e,elemento,tipo){

    var p1=  $('input[name=preco_sabor]');
    var p2=  $('input[name=preco_tamanho]');
	var p3=  $('input[name=preco_recheio]'); 
  var p4=  $('input[name=preco_especial]');
	var p5=  $('input[name=recheio_selecionado]');

    //$(e).siblings().removeClass("selected");
	//$(e).parent().siblings().removeClass("selected");
	
	var allParents = $(e).parent().siblings();
	for(var i=0; i < allParents.length; i++) {
		console.log(allParents[i].querySelector('.alinhamento'));
		allParents[i].querySelector('.alinhamento').classList.remove("selected");
	}
	
    if(e.classList.contains("selected")){
        e.classList.remove("selected");

    }else{
        e.classList.add("selected");
    }

    if (tipo == 1){
      //  $('.e1 .preco').css('display','none');
        p1.val(parseInt(document.querySelector("#"+elemento).innerHTML));
    } else if (tipo == 2){
      //  $('.e2 .preco').css('display','none');
        p2.val(parseInt(document.querySelector("#"+elemento).innerHTML));
	} else if (tipo == 3){
		p3.val(parseInt(document.querySelector("#"+elemento).innerHTML));
    } else if (tipo == 4){
    p4.val(parseInt(document.querySelector("#"+elemento).innerHTML));
    }else {
		p5.val(parseInt(document.querySelector("#"+elemento).innerHTML));
	}
   // $('#'+ elemento).css('display','block');

        
    $('#resultado').text(parseInt(p1.val()) + parseInt(p2.val()) + parseInt(p3.val()) + parseInt(p4.val()) + parseInt(p5.val()) + ' €');
}
