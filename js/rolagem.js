var _AlturaDocumento = $(window).height(); //pega altura da janela

function AlturaSecao() {
  $('.secao').height(_AlturaDocumento); //atribui o valor da variável a todas as divs com a classe secao
}

function ScrollSecao() {
  console.log('entrou');
  var body = $('html, body');
  if($(this).parent('.secao').is('#secao-01')) {
    //verifica se está na primeira seção e rola para a segunda
    body.animate({scrollTop: _AlturaDocumento}, '500');
  } else if ($(this).parent('.secao').is('#secao-02')) {
    //verifica se está na segunda seção e rola para a terceira
    body.animate({scrollTop: _AlturaDocumento*2}, '500');
  } else if ($(this).parent('.secao').is('#secao-03')) {
    //verifica se está na terceira seção e rola para a quarta
    body.animate({scrollTop: _AlturaDocumento*0}, '500');
  } 
}

$('.icone-scroll').click(ScrollSecao); //chama a função na ação de click no ícone

$(AlturaSecao); //chama a nossa função só depois que o documento estiver completamente carregado
