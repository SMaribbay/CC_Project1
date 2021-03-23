function setup(){
  createCanvas(500,500);
  background("#1C193E");  
}
function draw(){
  fill("#D7D5ED");
  rect(-5,340,320,162);
  fill("#66556C");
  quad(10, 475,75,375,80,375,15,475); 
  quad(40, 430,45, 430,75,460,70,460);
   noStroke();
   quad(75,375,190,375,195,380,73,380);
    quad(190,375,195,375,255,475,250,475);
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
}
