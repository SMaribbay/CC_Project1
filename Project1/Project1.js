let xPos;
let increment;

function setup(){
  createCanvas(500,500);
  background("#1C193E");  
  xPos= 40;
  increment=1;
}
function draw(){
  fill("#D7D5ED");
  rect(-5,340,320,162);
  fill("#66556C");
  quad(13, 465,75,375,80,375,18,465); 
  quad(40, 430,45, 430,75,460,70,460);
   noStroke();
   quad(75,375,190,375,195,380,73,380);
    quad(190,375,195,375,255,475,245,475);
    quad(228,430, 223,430,190,460,195,460);
    stroke("#8438A2");
    line(113.33,375, xPos, 440);
    //frameRate()(20);
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
    circle(xPos+19.165,407.5, 25);
    line(xPos+20,419.5,xPos+20,440);
    line(xPos+20,438,xPos+2,438);
    line(xPos+20,438,xPos+2,438);
    line(xPos+20,428.5,xPos,430.5);
    line(xPos+20,428.5,xPos+38.33,430.5);
    fill("#FFFFFF");
    circle(xPos+14, 407.5, 4);
    circle(xPos+23, 407.5,4);
    
}
