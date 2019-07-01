let shape;
let bigShape;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    shape = new AwsomeRect({
        text: "You can't drag me!!",
        x: 200,
        y: 200,
        width: 200,
        draggable: false
    });

    shape2 = new AwsomeRect({
        text: "Drag here!",
        x: 500,
        y: 200,
        // draggable: true // default is true
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}