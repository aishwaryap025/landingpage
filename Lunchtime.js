let model;

function preload() {
  // Load the 3D model file
  model = loadModel('path/to/your/model.obj', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01); // Rotate the model over time
  rotateY(frameCount * 0.01);
  scale(50); // Scale the model

  // Render the 3D model
  normalMaterial(); // Apply basic lighting to the model
  model(model);
}
