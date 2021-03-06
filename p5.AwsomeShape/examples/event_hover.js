function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    new AwsomeRect({
        text: "Hover me",
        x: 400,
        y: 200,
        onHover: function() {
            this.strokeWeight = 5;

            // https://p5js.org/reference/#/p5/cursor
            cursor(HAND);
        },
        onOut: function() {
            this.strokeWeight = 1;

            cursor(ARROW);
        }
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}