function sim() {
  //alert("Você aceitou namorar comigo! :)");
  // redireciona para um URL após clicar no SIM
  location.href ="https://usagif.com/wp-content/uploads/gifs/rainbow-6.gif";
  // "https://i.gifer.com/J8gE.gif";
  //"https://www.imagensanimadas.com/data/media/526/coracao-e-seta-imagem-animada-0044.gif";
  //
}

function desvia(btn) {
  // btn declarado na função
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}