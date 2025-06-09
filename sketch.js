let jardineiro;
let plantas = [];
let temperatura = 10;
let totalArvores = 0;

function setup() {
  createCanvas(600, 400);
  jardineiro = new Jardineiro(width / 2, height - 50);
}

function draw() {
  let corFundo = lerpColor(color(217, 112, 26), color(219, 239, 208),map(totalArvores, 0, 100, 0, 1));
  background(corFundo);
  mostrarInformacoes();
  
  temperatura += 0.1;
  jardineiro.atualizar();
  jardineiro.mostrar();
  
  plantas.map((arvore) => arvore.mostrar());
  
}

function mostrarInformacoes(){
  textSize(16);
  fill(0);
  text("Temperatura: "+ temperatura.toFixed(2), 10, 30);
  text("Árvores plantadas: "+ totalArvores, 10, 50 );
  text("Para movimentar o personagem use as setas do teclado.", 10, 70);
}

//Classe que cria o jardineiro
class Jardineiro{
 constructor(x, y) {
   this.x = x;
   this.y = y;
   this.emoji = '👨‍🌾';
   this.velocidade = 3;
 }

atualizar(){
  if(keyIsDown(LEFT_ARROW)){
    this.x -= this.velocidade;
  }
  if(keyIsDown(RIGHT_ARROW)){
    this.x += this.velocidade;
  }
  if(keyIsDown(UP_ARROW)){
    this.y -= this.velocidade;
  }
  if(keyIsDown(DOWN_ARROW)){
    this.y += this.velocidade;
  }
}
  mostrar(){
    textSize(32);
    text(this.emoji, this.x, this.y);
  }
}

//função para criar e plantar a árvore
function keyPressed(){
  if (key === ' ' || key === 'p'){
    let arvore = new Arvore(jardineiro.x, jardineiro.y);
    plantas.push(arvore);
    totalArvores++;
    temperatura -= 3;
    if(temperatura < 0) temperatura = 0;
  }
}

//Classe que cria a árvore
class Arvore{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.emoji = '🌳';
  }
  mostrar(){
    textSize(32);
    text(this.emoji, this.x, this.y);
  }
}













