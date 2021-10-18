let laptop;

let spacing = 150;




function preload() {
  laptop = loadModel('laptopmodel.obj', true);
}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background('white');
  // ortho();




  //Laptop Model options
  // fill('skyblue')
  noStroke();
  push();
  // //Material and light sources
  // normalMaterial()
  // ambientLight(180)
  //move your mouse to change light position
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  // pointLight(250, 250, 250, locX, locY, 50);
  // ambientMaterial(70, 130, 200)
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // rotation();
  // scale(.5);
  // model(laptop);
  // pop();


rotateX(45);
rotateY(50);

  for (x = 0; x <= width; x+= spacing) {
      for (y = 0; y <= width; y+= spacing) {
  //array
        ambientMaterial(70, 130, 200)
    push();
        // to set the light position,
        // think of the world's coordinate as:
        // -width/2,-height/2 -------- width/2,-height/2
        //                |            |
        //                |     0,0    |
        //                |            |
        // -width/2,height/2--------width/2,height/2
        pointLight(250, 250, 250, locX, locY, 50);
    translate(-400 + x, -400 + y);
    rotateX(frameCount * 0.01 + x);
    rotateY(frameCount * 0.01 + y);
    rotateZ(frameCount * 0.01 + y);
    scale(.5);
    model(laptop);
    pop();
  }
}

//   for (y = 0; y <= width; y+= spacing) {
//   //array
//   fill('red')
//   push();
//   translate(0, -400 + y);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   rotateZ(frameCount * 0.01);
//   scale(.5);
//   model(laptop);
//   pop();
// }


  // //rect01
  // fill('red')
  // rect(50, 50, 50, 50);
  // ellipse(0, 0, 10);
  // sphere(50);
  //
  // //box01
  // fill('blue')
  // push();
  // translate(150, 0);
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // box(20);
  // pop();
  //
  // //box02
  // fill('orange')
  // push();
  // translate(150, 0);
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // torus(50);
  // pop();


//can write function that means same as writing rotateX and rotateY
function rotation() {
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}


}
