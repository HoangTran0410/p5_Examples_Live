function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    new AwsomeRect({
        text: "Press me",
        x: 400,
        y: 200,
        onPress: function() {
            this.strokeWeight = 5;
            this.fillColor = "pink";
        },
        onRelease: function() {
            this.strokeWeight = 1;
            this.fillColor = "#0000"; // transparent color
        }
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}