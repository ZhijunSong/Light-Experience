//stations
let group1 = [];
let group2 = [];
let group3 = [];
let group4 = [];

let buttoneffect = [];
let r = 30;
//color
var r1, g1, b1;
var r2, b2, g2;
var r3, g3, b3;
var r4, b4, g4;
////////////////////////////
var cols, rows;
var scl = 12;
var zoff = 0;
var flowfield;
var inc = 0.3;

//boolean 
var show1 = false;
var show2 = false;
var show3 = false;
var show4 = false;
var buttonState = false;

let colorarray = [
  [212, 235, 255], //b1 2
  [203, 64, 66], //r2 18
  [152, 109, 178], //p2 7
  [241, 124, 103], //og2 9
  [225, 186, 132], //br2 11
  [241, 148, 131], //og1 8
];
/////////////FOUR PINWHEELS

let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;



///////////if no one
let numBalls = 80;
let spring = 0.03;
let gravity = 0.0;
let friction = -0.9;
let balls = [];
let colorarray1 = [
  [212, 235, 255], //b1 2
  [0, 92, 175], //b2  15
  [123, 144, 210], //b3  16
  [110, 117, 164], //b2 6
  [145, 173, 112], //gr3 13
  [145, 173, 112], //gr3 13
  [110, 117, 164], //b2 6
  [241, 148, 131], //og1 8
  [203, 64, 66], //r2 18



];
let colliderarray = [
  [116, 103, 199], //p1 3
  [225, 186, 132], //br2 11
  [225, 186, 132], //br2 11
  [152, 109, 178], //p2 7
  [134, 166, 151], //gr4 14
  [235, 180, 113], //br1 4
  [152, 109, 178], //p2 7
  [235, 180, 113], //br1 4
  [251, 153, 102] //r3 19
];


/////timer

var num = 0;
var num2 = 0;
let t = 0;
let count = 10; /// use to count if noone shows

let sketch = function(p) {
  let x1 = 25;
  let x2 = 75;
  let x3 = 125;
  let x4 = 175;
  let y = 25;


  p.setup = function() {
    p.createCanvas(200, 50);
  };

  p.draw = function() {
    p.background(0);
    p.rectMode(CENTER);
    p.stroke(1);
    p.fill(c1);
    p.rect(x1, y, 50, 50);
    p.fill(c2);

    p.rect(x2, y, 50, 50);
    p.fill(c3);

    p.rect(x3, y, 50, 50);
    p.fill(c4);

    p.rect(x4, y, 50, 50);

  };

};
let myp5 = new p5(sketch,"c1");

function setup() {
  createCanvas(384, 72);
  rows = floor(height / scl);
  cols = floor(width / scl);
  flowfield = new Array(cols * rows);
  /////initializer for no one sketch
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      20,
      i,
      balls, num2
    );
  }

}

function draw() {
  background(0);

  // var wind = createVector(10, 10);
  let vx = random(-2, 1);
  let vy = random(-10, -2);
  var F = createVector(0, 0);

  var F1 = createVector(10, 0);
  var F2 = createVector(-3, 0);
  if (buttonState === true) {
    for (let i = 0; i < 5; i++) {
      let b = new Particle(random(width), random(height), 255, 15, vx, vy);
      buttoneffect.push(b);
    }
  }

  for (let i = buttoneffect.length - 1; i >= 0; i--) {
    buttoneffect[i].show();
    buttoneffect[i].update();
    buttoneffect[i].edges();
    buttoneffect[i].applyForce(F2);
    buttoneffect[i].follow(flowfield);
    if (buttoneffect[i].finished()) {
      buttoneffect.splice(i, 1);
    }
  }



  if (show1 === true) {

    for (let i = 0; i < 40; i++) {
      let p1 = new Particle(width / 8, height - 5, colorarray[0], r, vx, vy);
      group1.push(p1);
    }
  }

  for (let i = group1.length - 1; i >= 0; i--) {

    group1[i].show();
    group1[i].update();
    // group1[i].edges();
    group1[i].applyForce(F1);
    group1[i].follow(flowfield);
    if (group1[i].finished()) {
      group1.splice(i, 1);
    }
  }

  if (show2 === true) {
    for (let i = 0; i < 40; i++) {
      let p2 = new Particle(width / 8 * 3, height - 5, colorarray[1], r, vx, vy);
      group2.push(p2);
    }
  }


  for (let i = group2.length - 1; i >= 0; i--) {
    group2[i].show();
    group2[i].update();
    // group2[i].edges();
    group2[i].applyForce(F1);
    group2[i].follow(flowfield);

    if (group2[i].finished()) {
      group2.splice(i, 1);
    }
  }


  if (show3 === true) {
    for (let i = 0; i < 40; i++) {
      let p3 = new Particle(width / 8 * 5, height - 5, colorarray[2], r, vx, vy);
      group3.push(p3);
    }
  }

  for (let i = group3.length - 1; i >= 0; i--) {
    group3[i].show();
    group3[i].update();
    // group3[i].edges();
    group3[i].applyForce(F1);
    group3[i].follow(flowfield);
    if (group3[i].finished()) {
      group3.splice(i, 1);
    }
  }
  if (show4 === true) {
    for (let i = 0; i < 40; i++) {
      let p4 = new Particle(width / 8 * 7, height - 5, colorarray[3], r, vx, vy);
      group4.push(p4);

    }
  }


  for (let i = group4.length - 1; i >= 0; i--) {
    group4[i].show();
    group4[i].update();
    //group4[i].edges();
    group4[i].applyForce(F1);
    group4[i].follow(flowfield);
    if (group4[i].finished()) {
      group4.splice(i, 1);
    }

  }

  ////////////////flow field//////////////
  var yoff = PI / 2;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {

      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      flowfield[index] = v;
      v.setMag(10);
      xoff += inc;
      //fill(r);
      // rect(x * scl, y * scl, scl, scl);
      stroke(0);
      push();
      translate(x * scl + scl, y * scl + scl);
      //rotate(v.heading());
      rotate(PI / 2 + v.heading());
      stroke(255, 50);
      strokeWeight(2);
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
    zoff += 0.001;

  }
  ////control boolean no one  timer start

  //////group boolean logic
  var noshow = false;
  var statechange = false;
  if (show1 === false && show2 === false && show3 === false && show4 === false && buttonState === false) {
    countdown();

  } else {

    count = 10;
  }
  if (count === 0) {
    noshow = true;
  } else {
    noshow = false;
  }
  if (noshow === true) {
    timer();
  }

  ////// no one shows up sketch
  if (t === 0) {
    F = createVector(random(-2, 2), random(-2, 2));
    gravity = random(-0.03, 0.03);
  } else {
    F = createVector(0, 0);
    gravity = 0.0;
  }
  if (noshow === true) {
    balls.forEach(ball => {
      ball.collide(colorarray1[num2], colliderarray[num2]);
      ball.move();
      ball.display();

      ball.follow(flowfield);
      ball.applyForce(F);

    });
  }
}

function mousePressed() {
  num = num + 1;
  num2 = num % 9;
}

function countdown() {
  if (frameCount % 60 === 0 && count > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    count--;
  }
  if (count === 0) {
    count = 0;

  }
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  textSize(20);
  text(count, 20, 50);
}

function timer() {
  if (frameCount % 60 === 0 && t < 11) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    t++;
  }
  if (t === 10) {
    num = num + 1;

    t = 0;
  }

  num2 = num % 9;
  textAlign(CENTER, CENTER);
  fill(255, 255, 255);
  textSize(20);
  text(t + "," + num2, 20, 30);
}


function keyPressed() {
  if (key == 'a' || key == 'A') {
    show1 = true;
    c1 = colorarray[0];

  }
  if (key == 's' || key == 'S') {
    show2 = true;
    c2 = colorarray[1];
  }
  if (key == 'd' || key == 'D') {
    show3 = true;
    c3 = colorarray[2];

  }
  if (key == 'f' || key == 'F') {
    show4 = true;
    c4 = colorarray[3];

  }
  if (key == 'g' || key == 'G') {
    buttonState = true;
    c1 = 255;
    c2 = 255;
    c3 = 255;
    c4 = 255;
  }

}

function keyReleased() {

  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  buttonState = false;
  c1 = 0;
  c2 = 0;
  c3 = 0;
  c4 = 0;
}


class Particle {
  constructor(x, y, c, r, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.pos = createVector(this.x, this.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.maxspeed = 2;

    this.vx = vx;
    this.vy = vy;
    this.alpha = random(255);
    this.c = c;
    this.color = color(this.c, this.alpha);
  }
  show() {
    noStroke();
    // stroke(255);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r);


  }



  update() {
    this.vel.x += this.vx;
    this.vel.y += this.vy;
    this.alpha -= 2;
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);

    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  finished() {
      return this.alpha < 0;
    }
    /////////////////////////////
  applyForce(force) {
    this.acc.add(force);
  }
  edges() {
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);

  }

}


class Ball {
  constructor(xin, yin, din, idin, oin, c) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;

    this.pos = createVector(this.x, this.y);
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.maxspeed = 2;
    this.c = [255, 255, 255, 50];
  }

  collide(a, b) {
    var colorchange = false;

    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
        colorchange = !colorchange;

      }

    }
    if (colorchange === true) {

      this.c = b;

    } else if (colorchange === false) {
      this.c = a;


    }

  }


  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.position = createVector(this.x, this.y);
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);

    this.pos.add(this.vel);
    this.acc.mult(0);
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);

  }

}