const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite;
//usamos as variaveis para guardas os metodos do matter
var rabbit,background,mute,Ground;
var rabbitImg,backgroundImg,muteImg;
//usa uma var para carregar dois tipos de variaveis diferentes(sprite,imagens);
let engine,world;

function preload(){
rabbitImg=loadImage("imagens/Rabbit-01.png");
backgroundImg=loadImage("imagens/background.png");
muteImg=loadImage("imagens/mute.png");
//carregando as imagens com suas vars de imagem
 
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();//atribui a var engine a criação da mecanica de fisica;
  world=engine.world;   //atribui a engine ao world;

  Ground = new ground(0,height - 100,height-500,width);









}

function draw() {
  background(0);
  ground.displayGround();

  
 
 
}
