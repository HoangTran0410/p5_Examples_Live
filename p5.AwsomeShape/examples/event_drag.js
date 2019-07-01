function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();
    
    let shape = new AwsomeRect({
        text: "Drag me",
        x: 400,
        y: 200
    });

    shape.onDrag = function() {
        this.fillColor = random(["green", "red", "blue", "pink", "yellow"]);
    }
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}