var bubble;
var lana,lana1;
var bgimage;
var gameState = 1;
var button1, greeting, input;
var inp1;
var number;
var button4;
function preload()
{
	bgimage = loadImage("bg5.jpg");
  lana = loadImage("robot.jpg");
  bubble = loadImage("box.png");
}

function setup() {

	createCanvas(1024,768);
  //creating the login /register form 
  //display input box 
  input = createInput();
  input.hide();

  button1 = createButton('Submit');
  button1.hide();

  button2 = createButton('Next');
  button2.hide();

  button3 = createButton('Next');
  button3.hide();
  
  button4 = createButton('Next');
  button4.hide();

  button5 = createButton('Yes');
  button5.hide();

  button6 = createButton('No');
  button6.hide();

  greeting = createElement('h2', 'What is your name?');
  greeting.hide();
 
  greetPlayer=createElement('h3');
  greetPlayer.hide();

}


function draw() {
  //background color
  background('white');
  //code of 1st state
 if(gameState == 1)
 {
   
   image (bgimage,900,70,100,50);
   image (lana,200,320,110,300);
   image (bubble, 100,150,700,200);
  
    input.show();
    input.position(365, 600);
    inp1=input.value();
    
  
    button1.show();
    button1.position(input.x + input.width, 600);

    greeting.show();
    greeting.position(360, 550);
      
    fill(255, 153, 0);
    textSize(25);
    textFont('Georgia');
    text('Hi! Im Lana!', 300, 210);

    fill(255, 153, 0);
    textSize(25);
    textFont('Georgia');
    text(' Ill be leading you on your journey of eye testing!', 115, 240);
  
    fill(255, 153, 0);
    textSize(25);
    textFont('Georgia');
    text('Please enter your username so we know what to call you.', 120, 270);
   
 }
  //enters second gamestate if button is pressed
 button1.mousePressed(()=>{
   gameState=2;
  
 })
 //code of 2nd gamestate
 if(gameState == 2){
  input.hide();
  button1.hide();
  greeting.hide();
  button2.show();
  button2.position(250,565);
  greetPlayer.show();
  greetPlayer.style('font-size','25px');
  greetPlayer.html("   Hello   " + inp1 + "  ,  ");
  greetPlayer.position(200,100);

  textSize(20);
  fill(255,153,0);
  text('Kindly follow the instructions further:',200,200);
  text('1. Please stand as per the distance required, away from your phone',200,250);
  text('2. Make sure to be present in a well lit room',200,300);
  text('3. Answer all the questions in the next step',200,350);
 }
  
  //enters 3rd state if button is pressed
 button2.mousePressed(()=>{
   gameState=3;

 })
//3rd gamestate code
 if(gameState==3){
  greetPlayer.hide(); 
  button2.hide();
  button3.hide();
  button4.show();
  button4.position(400,565);
  button5.show();
  button5.position(250,565);
  button6.show();
  button6.position(220,565);
  fill(255,153,0);
  textSize(35);
  text('Please stand 30 metres away',200,200);

  fill(0,0,0);
  textSize(100);
  text('F      P',200,400);

  fill(0,0,0);
  textSize(20);
  text('Can you see the letters?',200,500);
 }


 button4.mousePressed(()=>{
   gameState=4;
 })
 //4th gamestate code
 if(gameState=4){
   button4.hide();
  

 
 }

  drawSprites();
 }