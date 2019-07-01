function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();
    
    let shape = new AwsomeRect({
        text: "Press me",
        x: 400,
        y: 200
    });

    shape.onPress = function() {
        this.strokeWeight = 5;
        this.fillColor = "pink";
    }

    shape.onRelease = function() {
        this.strokeWeight = 1;
        this.fillColor = "#0000"; // transparent color
    }
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}