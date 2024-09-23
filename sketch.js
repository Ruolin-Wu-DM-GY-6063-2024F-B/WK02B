function setup() {
  createCanvas(800, 800);
   background(255,255,255);
  seed = int(random(1000));
 
}

function draw() {
  
  //line on the top
  
  push();
  
  randomSeed(seed); 

  for (let i = 0; i < 3000; i++) {

    let x = random(width);
    let y = random(height);

    let pointSize = random(1,10); 
    
    let colors = ['red', 'blue', 'orange']; 
    stroke(random(colors));
    strokeWeight(pointSize); 
    
    point(x, y);
  }

pop();
  
  background(223, 216, 185,5);
  
  push();
  randomSeed(seed);

  for (let i = 0; i < 1100; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
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

  
  //curve on the bottom
 push();
  
  randomSeed(seed);
  
  let xMin_2 = 500, xMax_2 = 900;
  let yMin_2 = 500, yMax_2 = 750;
  
  for (let i = 0; i < 30; i++) {
    let x1 = random(2*width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(2*height);
    let cx1 = random(width);
    let cy1 = random(height/2);
    let cx2 = random(width);
    let cy2 = random(height/2);

    stroke(0,0,0,10); 
    strokeWeight(random(10, 12)); 
    noFill();
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);
  }
  pop();
  
}

function mousePressed() {
  seed = int(random(1000));
  
   let numPoints = 50;
  let radius = 100;
  
 let centerX = mouseX;
  let centerY = mouseY;
  
  for (let i = 0; i < numPoints; i++) {
    let angle = TWO_PI / numPoints * i;  
    let x = centerX + radius * cos(angle);  
    let y = centerY + radius * sin(angle);  
    
    
    fill('yellow');  
    noStroke();
    ellipse(x, y, 20);  
  }
}