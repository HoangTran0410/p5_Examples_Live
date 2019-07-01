let shape, shape2, shape3;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    shape = new AwsomeRect({
        text: "Awsome",
        textSize: 30,
        textFill: "green",
        textRotate: radians(20),

        x: 100,
        y: 200,
        width: 150,
        height: 75
    });

    shape2 = new AwsomeRect({
        text: "Awsome",
        textSize: 20,
        textFill: "red",
        textRotate: true,

        rotateSpeed: radians(1),

        x: 300,
        y: 200,
        width: 150,
        height: 70
    })

    shape3 = new AwsomeRect({
        text: "Awsome",
        textSize: 25,
        textFill: "blue",
        textRotate: false,

        rotateSpeed: radians(1),

        x: 500,
        y: 200,
        width: 150,
        height: 70
    })
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    // shape.run();
    // shape2.run();
    // shape3.run();
    AwsomeShape.runShapes();
}