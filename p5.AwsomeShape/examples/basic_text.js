let shape;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();
    
    shape = new AwsomeRect({
        text: "Awsome",
        textSize: 30,
        textFill: "orange",
        textStroke: "black",
        textStrokeWeight: 2,

        x: 200,
        y: 200,
        width: 150,
        height: 75
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    // shape.run();
    AwsomeShape.runShapes();
}