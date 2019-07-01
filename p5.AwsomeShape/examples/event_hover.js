function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    let shape = new AwsomeRect({
        text: "Hover me",
        x: 400,
        y: 200
    });

    shape.onHover = function() {
        this.strokeWeight = 5;
    }

    shape.onOut = function() {
        this.strokeWeight = 1;
    }
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}