function setup() {
  createCanvas(800, 800);
   background(223, 216, 185);
  seed = int(random(1000));
}

function draw() {
  
  push();
   noFill();
  stroke(209,208,184);
  strokeWeight(100);
  bezier(0, 650, 700, 700, 400, 650, 800, 650);
  
   noFill();
  stroke(202,205,185);
  strokeWeight(140);
  bezier(0, 550, 700, 650, 400, 520, 850, 550);
  pop();
  
  fill(202,205,185);
  noStroke()
  ellipse(320, 300, 570,150 );
  
  fill(202,205,185);
  noStroke()
  quad( 300,0,650,300,1250,300, 800,0, );
  
  fill(222,207,183);
  triangle(0, 75, 80, 0, 150, 75);
  triangle(155, 75, 225, 0, 295, 75);
  triangle(165, 85, 350, 200, 495, 85);
  triangle(0, 85, 50, 200, 165, 85);
  triangle(50, 220,175, 90, 305, 220);
  
    fill(146,139,114);
  triangle(0, 700, 300, 400, 0, 720);
  triangle(0, 560, 250, 400, 0, 570);
  triangle(0, 500, 220, 395, 0, 505);
  triangle(0, 450, 200, 395, 0, 453);
  triangle(175, 800, 350, 395, 195, 800);
  triangle(500, 800, 400, 395, 520, 800);
  triangle(800, 800, 450, 395, 800, 780);
  triangle(800, 590, 550, 395, 800, 600);
  triangle(800, 470, 600, 395, 800, 478);
  triangle(800, 430, 650, 380, 800, 425);
  
   noFill();
  stroke(49,54,37);
  strokeWeight(4);
  quad( -10,730,150,790,350,780, -10,680,);
  quad( 30,250,100,250,70,200, -10,200,);
  quad( 110,250,190,250,180,200, 80,200,);
  quad( 205,250,285,250,290,200, 205,202,);
  quad( 295,250,345,250,400,200, 300,202,);
  
  fill(202,227,235);
  noStroke();
  quad(600,550,670,550,580,200,560,200,);
  
  //line on the top
  push();
  randomSeed(21);
  let xMin_1 = -200, xMax_1 = 800;
  let yMin_1 = -200, yMax_1 = 350;

  for (let i = 0; i < 200; i++) {
    let x1 = random(xMin_1, xMax_1);
    let y1 = random(yMin_1, yMax_1);
    let x2 = random(xMin_1, xMax_1);
    let y2 = random(yMin_1, yMax_1);
    
    let length_1;
    if (random() < 0.5) {
      length_1 = random(1, 5); 
    } else {
      length_1 = random(10, 50);
    }
    
    stroke(0);
    strokeWeight(random(0, 0.25));
    line(x1, y1, x2, y2);
    }
   pop();
  
  //curve on the top
  randomSeed(99);

  let xMin_4 = -100, xMax_4 = 800;
  let yMin_4 = -100, yMax_4 = 200;

  let maxLength = 30;

  for (let i = 0; i < 300; i++) {
    let x1 = random(xMin_4, xMax_4);
    let y1 = random(yMin_4, yMax_4);
    let x2 = random(xMin_4, xMax_4);
    let y2 = random(yMin_4, yMax_4);
    let cx1 = random(xMin_4, xMax_4);
    let cy1 = random(yMin_4, yMax_4);
    let cx2 = random(xMin_4, xMax_4);
    let cy2 = random(yMin_4, yMax_4);

    let d1 = dist(x1, y1, cx1, cy1);
    let d2 = dist(x1, y1, cx2, cy2);
    let d3 = dist(x1, y1, x2, y2);

    if (d1 > maxLength) {
      let scale1 = maxLength / d1;
      cx1 = x1 + (cx1 - x1) * scale1;
      cy1 = y1 + (cy1 - y1) * scale1;
    }

    if (d2 > maxLength) {
      let scale2 = maxLength / d2;
      cx2 = x1 + (cx2 - x1) * scale2;
      cy2 = y1 + (cy2 - y1) * scale2;
    }

    if (d3 > maxLength) {
      let scale3 = maxLength / d3;
      x2 = x1 + (x2 - x1) * scale3;
      y2 = y1 + (y2 - y1) * scale3;
    }

    stroke(0);
    strokeWeight(random(0, 0.5));
    noFill();
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
  }
  
  //curve on the bottom
 push();
  
  randomSeed(21);
  
  let xMin_2 = 500, xMax_2 = 900;
  let yMin_2 = 500, yMax_2 = 750;
  
  for (let i = 0; i < 30; i++) {
    let x1 = random(xMin_2, xMax_2);
    let y1 = random(yMin_2, yMax_2);
    let x2 = random(xMin_2, xMax_2);
    let y2 = random(yMin_2, yMax_2);
    let cx1 = random(xMin_2, xMax_2);
    let cy1 = random(yMin_2, yMax_2);
    let cx2 = random(xMin_2, xMax_2);
    let cy2 = random(yMin_2, yMax_2);

    stroke(0); 
    strokeWeight(random(0, 0.5)); 
    noFill();
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
  }
  pop();
  
  //line on the bottom
  randomSeed(99);
  let xMin_3 = 500, xMax_3 = 900;
  let yMin_3 = 300, yMax_3 = 700;
  let maxLength_1 = 20;

  for (let i = 0; i < 200; i++) {

    let x1 = random(xMin_3, xMax_3);
    let y1 = random(yMin_3, yMax_3);

    let x2 = random(xMin_3, xMax_3);
    let y2 = random(yMin_3, yMax_3);

    let d = dist(x1, y1, x2, y2);

    if (d > maxLength_1) {
      let dx = x2 - x1;
      let dy = y2 - y1;

      let scale = maxLength_1 / d;
      x2 = x1 + dx * scale;
      y2 = y1 + dy * scale;
    }

    strokeWeight(random(0.5, 5)); 
    line(x1, y1, x2, y2);
  }
  
  //dot on the middle_left
  push();
  
  randomSeed(40); 

  let xMin = -10, xMax = 150;
  let yMin = 300, yMax = 400;

  for (let i = 0; i < 600; i++) {

    let x = random(xMin, xMax);
    let y = random(yMin, yMax);

    let pointSize = random(0, 2); 

    stroke(0); 
    strokeWeight(pointSize); 

    point(x, y);
  }
  pop();
  
    //dot on the middle_left
  push();
  
  randomSeed(90); 

  let xMin_mid = 300, xMax_mid = 500;
  let yMin_mid = 300, yMax_mid = 400;

  for (let i = 0; i < 1000; i++) {

    let x = random(xMin_mid, xMax_mid);
    let y = random(yMin_mid, yMax_mid);

    let pointSize = random(0, 2); 

    stroke(0); 
    strokeWeight(pointSize); 

    point(x, y);
  }
  pop();
  
  
  //dots and lines in the canvas
  push();
  
    randomSeed(75); 

  let xMin_red = 200, xMax_red = 900;
  let yMin_red = -100, yMax_red = 300;

  for (let i = 0; i < 20; i++) {

    let x = random(xMin_red, xMax_red);
    let y = random(yMin_red, yMax_red);

    let pointSize = random(9,20); 

    stroke(180,47,45); 
    strokeWeight(pointSize); 
    
    point(x, y);
  }
  
      randomSeed(30); 

  let xMin_blu = -100, xMax_blu = 900;
  let yMin_blu = -100, yMax_blu = 400;

  for (let i = 0; i < 80; i++) {

    let x = random(xMin_blu, xMax_blu);
    let y = random(yMin_blu, yMax_blu);

    let pointSize = random(3,15); 

    stroke(42,74,133); 
    strokeWeight(pointSize); 
    
    point(x, y);
  }
  
  noFill();
  stroke(78,77,72)
  strokeWeight(3)
  bezier(80,0,90,80,200,150,550,150)
  bezier(0,30,90,100,200,150,450,250);
  bezier(0,70,90,100,200,150,400,160);
  bezier(700,470,320,600,499,250,770,730);
 
   noFill();
  stroke(49,54,37);
  strokeWeight(5)
  line(20,650,800,600)
  line(750,705,800,700)
  
    noFill();
  stroke(199,119,36);
  strokeWeight(3)
  line(0,472,350,493)

  
    noFill();
  stroke(56,72,116);
  strokeWeight(5);
  bezier(300, 425, 100, 600, 400, 800, 800, 750);
  bezier(200, 150, 0, 300, 400, 400, 800, 500);
  
   noFill();
  stroke(177,43,49);
  strokeWeight(5);
  bezier(0, 150, 190,220,200,250, 725, 350);
  pop();
  
   fill(240,180,0);
  noStroke()
  ellipse(400,570, 200,80 );
  ellipse(400,470, 120,40 );
  ellipse(400,420, 60,10 );
  quad(47,603,0,594,0,530,73,544,);
  quad(669,428,668,438,701,437,703,429);
  quad(713,428,707,438,784,437,784,429);
  quad(791,428,790,438,800,437,800,429);
  
    noFill();
  stroke(49,54,37);
  strokeWeight(2)
  line(350,760,800,625)
  line(33,531,173,430)
  line(31,380,173,430)
  line(204,385,800,355)
  line(404,303,257,385)
  line(439,616,385,369)
  
  fill(105,149,133);
  noStroke()
  bezier(212, 294, 80,400,100,200,212, 294);
}