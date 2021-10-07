const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var archer ;


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(1000,1000);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  angleMode(DEGREES);

  var option = {
    isStatic:true
  };

  playerBase = bodies.rectangle(200,350,180,150,options);
World.add(world,playerBase) ;

player = bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
World.add(world,player)
  //create player body



}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image (baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image (playerimage,player.position.x,player.position.y,50,180)
  //show the player image using image() function
archer.loadImage(playerArcher.png)
  //show the playerbase image using image() function


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  drawSprites()
}
