let shape;
let bigShape;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();
    
    shape = new AwsomeRect({
        x: 200,
        y: 200
    });

    bigShape = new AwsomeRect({
        x: 500,
        y: 200,
        width: 200,
        height: 250
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    // shape.run();
    // bigShape.run();
    AwsomeShape.runShapes();
}