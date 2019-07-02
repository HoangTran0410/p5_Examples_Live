let shape;
let bigShape;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    // create rectangle shape with 'AwsomeRect' class
    shape = new AwsomeRect({
        x: 200,
        y: 200
    });

    // Another way, use 'AwsomeShape.create' method
    bigShape = AwsomeShape.create({
        shape: "rectangle",
        width: 200, // width and height of rectangle
        height: 250,
        x: 500,
        y: 200
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    // run shapes
    shape.run();
    bigShape.run();
}