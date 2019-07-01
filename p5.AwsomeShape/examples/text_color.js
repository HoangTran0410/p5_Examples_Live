function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();

    new AwsomeRect({
        text: "Nice",
        textFill: "green",

        fillColor: "yellow",
        x: 300,
        y: 200
    });
    
    new AwsomeRect({
        text: "Awsome",
        textFill: "#f00",
        textStroke: "orange",
        textStrokeWeight: 2,

        fillColor: "pink",
        strokeWeight: 0,
        x: 500,
        y: 200
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}