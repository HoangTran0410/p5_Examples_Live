function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    // just create shapes with variable
    let shape = new AwsomeRect({
        x: 200,
        y: 200
    });

    // or without variable
    new AwsomeRect({
        x: 500,
        y: 200
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    // ============ CODE OF AUTORUN HERE ============
    // Then call this, and all shapes you have created will be run
    AwsomeShape.runShapes();
}