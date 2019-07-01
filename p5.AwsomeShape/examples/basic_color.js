let shape;
let shape2;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();
    
    shape = new AwsomeRect({
        x: 200,
        y: 200,
        fillColor: "#ff0"
    });

    shape2 = new AwsomeRect({
        x: 500,
        y: 200,
        fillColor: "orange",
        strokeColor: "green",
        strokeWeight: 5
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