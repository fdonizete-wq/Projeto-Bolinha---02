// Bolinha 02
let yBolinha =200;
let xBolinha =200;
let raio =15;
let yVelocidade =3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
}

//------------ Função mostra Bolinha ------
function mostraBolinha (){
  circle(xBolinha,yBolinha, raio);
}


//-------------função movimenta Bolinha-----
function movimentaBolinha(){
  yBolinha +=yVelocidade;
}


//--------- Verifica Colisao ------
function verificaColisao(){
  if(yBolinha > height || yBolinha < 0){
    yVelocidade *=-1;
  }
}