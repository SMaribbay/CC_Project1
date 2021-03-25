let xPos;
let increment;
let fr=20;
let droplet;
let droplet2;
let droplet3;
let droplet4;

function setup(){
  createCanvas(500,500);
  background("#1C193E");  
  xPos= 40;
  frameRate(fr);
  increment=1;
  droplet = new Rain();
  droplet2= new Rain();
  droplet3=new Rain();
  droplet4=new Rain();
}
function draw(){
  

  fill("#E0DB42")
  noStroke();
  ellipse(20,40,40);
  fill("#D7D5ED");
  noStroke();
  rect(-5,340,320,160,20);//gray-ish rectangle
  fill("#FFFFFF");
  noStroke();
  rect(13,400,240,90,100);//white rounded rectangle
  fill("#66556C");
  quad(13, 465,75,375,80,375,18,465);//left leg of swing set
  quad(40, 430,45, 430,75,460,70,460);//smaller left leg of swing set
   noStroke();
   quad(75,375,190,375,195,380,73,380);//bar on top
    quad(190,375,195,375,255,475,245,475);// right leg of swingset
    quad(228,430, 223,430,190,460,195,460);//smaller right leg of swing set
    stroke("#8438A2");
    line(113.33,375, xPos, 440);
    fr=20;
    xPos=xPos+increment;
    if(xPos<=40){
      increment=1;
    }
      if(xPos>=190){
        increment=-1;
      }
    line(151.66,375, xPos+38.33, 440);
    xPos=xPos+increment;
    if(xPos<=70){
      increment=1;
    }
    if(xPos>=220){
      increment=-1;
    }
    quad(xPos,440,xPos+5,445,xPos+38.333,445,xPos+43.333,440);
    if(xPos<=40){
      increment=1;
    }
    if(xPos>=190){
      increment=-1;
    }
    fill("#220DA0");
    circle(xPos+19.165,407.5, 25);//head
    line(xPos+20,419.5,xPos+20,440);//body
    line(xPos+20,438,xPos+2,438);//leg 1
    line(xPos+20,438,xPos+2,438);//leg 2
    line(xPos+20,428.5,xPos,430.5);//right arm
    line(xPos+20,428.5,xPos+38.33,430.5);//left arm
    fill("#FFFFFF");
    circle(xPos+14, 407.5, 4);//eye
    circle(xPos+23, 407.5,4);//eye
  line(xPos+14, 413.5,xPos+24, 413.5);
    //pink flowers
    push();
    translate(145,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
    
    push();
    translate(160,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
   
    push();
    translate(175,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
    
    push();
    translate(190,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
    
    push();
    translate(205,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
    
    push();
    translate(220,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
    
    push();
    translate(235,480);
    for(let i = 0; i<6; i++){
      noStroke();
      fill("#C3A9E5");
    ellipse(0,5,8,8);
    rotate(radians(70));
    fill("#6326B4");
    ellipse(0,0,8,8);
    }
    pop();
    // blue flowers
    push();
    translate(130,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }
    pop();
    
    push();
    translate(100,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }
    pop();
    
    push();
    translate(115,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }pop();
    
        push();
    translate(85,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }pop();
    
    push();
    translate(70,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }pop();
    
    push();
    translate(55,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }pop();
    
    push();
    translate(40,480);
    for(let i=0;i<6; i++){
      noStroke();
      fill("#0B45D3");
    ellipse(0,5, 8,8);
    fill("#3664D6");
      ellipse(0,0,8,8);
      rotate(radians(70));
    }pop();
  
  
  noStroke();
  fill("#534E55")
  ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);
  
  ellipse(185,50,60,50);
  ellipse(215,40,60,50);
  ellipse(265,50,60,50);
  ellipse(205,70,60,50);
  ellipse(245,65,60,50);
  
  ellipse(150,100,60,50);
  ellipse(180,90,60,50);
  ellipse(230,100,60,50);
  ellipse(170,120,60,50);
  ellipse(210,115,60,50);
  
   ellipse(250,150,60,50);
  ellipse(280,140,60,50);
  ellipse(330,150,60,50);
  ellipse(270,170,60,50);
  ellipse(310,165,60,50);
  
  ellipse(345,40,60,50);
  ellipse(375,30,60,50);
  ellipse(425,40,60,50);
  ellipse(365,60,60,50);
  ellipse(405,55,60,50);
  
  ellipse(410,150,60,50);
  ellipse(440,140,60,50);
  ellipse(490,150,60,50);
  ellipse(430,170,60,50);
  ellipse(470,165,60,50);
  
   ellipse(370,100,60,50);
  ellipse(410,90,60,50);
  ellipse(460,100,60,50);
  ellipse(400,120,60,50);
  ellipse(440,115,60,50);
  
  ellipse(50,150,60,50);
  ellipse(80,140,60,50);
  ellipse(130,150,60,50);
  ellipse(70,170,60,50);
  ellipse(110,165,60,50);
  
  fill("#000000");
  ellipse(415,450,200,190);
  
  fill("#1B2DE0");
  rect(-5,320,355,40,20);
  rect(320,320,40,150,20);
  rect(510,320,-60,40,20);
  rect(450,320,40,150,20);
  
  fill("#3B0C5A");
  rect(280,360,5,200);
  rect(250,400,70,5)
  
  /*if(key == "k" || key == "k") {
    if(mouseX > 180) {
      if(mouseIsPressed) {
          strokeWeight(10);
          stroke(229, 170, 20, 10);
          for(i = mouseY; i < 100; i += 1) {
          line(mouseX, i, pmouseX, i + 1);
        }
      }
    }
  }
  */
  droplet.move();
  droplet.display();
  droplet2.move();
  droplet2.display();
  droplet3.move();
  droplet3.display();
  droplet4.move();
  droplet4.display();
  
   if(key == "T" || key == "t") {
    for(var y = 0; y <= height; y += 90) {
      for(var x = 0; x <= width; x += 90) {
        fill("#5F5F4E");
        ellipse(x, y, 3, 3);
      }
    }

    for(var y = 30; y <= height; y += 90) {
      for(var x = 30; x <= width; x += 90) {
        fill("#BCBBA3");
        ellipse(x, y, 3, 3);
      }
    }
  }
  if(mouseX<380 &&mouseY<320&&mouseY>170){
fill("#3A0D5A");
  if(mouseIsPressed)
    fill("#7904CE")
    for (let i = 0; i <10; i ++) {
    ellipse(mouseX,mouseY, 5, 15);
    rotate(radians(70));
    }
  }
}
class Rain{
  constructor(){
    this.x=random(365,445);
    this.y=(150);
   this.size=random(2,8);
    this.speed=1;
  }
  move(){
    this.x+=random(-this.speed,this.speed)
    this.y+=random(this.speed,this.speed)
  }
  display(){
    fill("#3C72DB")
    rect(this.x,this.y,this.size,30,20)
  }
  }