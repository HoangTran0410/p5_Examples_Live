let shape;

function setup() {
    createCanvas(800, 400);

    // Setting up AwsomeShape - REQUIRED
    AwsomeShape.init(this);
    
    // create rectangle shapes
    shape = new AwsomeRect();

    // set position
    shape.locate(400, 200);
}

function draw() {
    background(240);

    // run shapes
    shape.run();
}