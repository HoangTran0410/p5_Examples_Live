let shape;
let shape2;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    shape = new AwsomeRect({
        x: 200,
        y: 200,
        fillColor: "#ff0",
        cornerRadius: 30
    });

    shape2 = new AwsomeRect({
        x: 500,
        y: 200,
        width: 100,
        height: 100,
        rotateSpeed: radians(-1.5),
        fillColor: "blue",
        strokeColor: "gray",
        strokeWeight: 5,
        cornerRadius: 20
    })
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    // shape.run();
    // shape2.run();
    AwsomeShape.runShapes();
}