function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    new AwsomeRect({
        text: "Awsome",

        fillColor: "purple",
        strokeWeight: 0,
        x: 400,
        y: 200
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}