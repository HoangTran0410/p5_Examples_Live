function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();
    
    new AwsomeRect({
        text: "AwsomeShape",
        textSize: 40,

        fillColor: "purple",
        strokeWeight: 0,
        x: 400,
        y: 100,
        width: 300,
        height: 70
    });

    new AwsomeRect({
        text: "Awsome Small",
        textSize: 20,

        fillColor: "orange",
        strokeWeight: 0,    
        x: 400,
        y: 200,
        width: 180,
        height: 70
    });

    new AwsomeRect({
        text: "Awsome Extra Small",
        textSize: 10,

        fillColor: "#990",
        strokeWeight: 0,    
        x: 400,
        y: 300
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}