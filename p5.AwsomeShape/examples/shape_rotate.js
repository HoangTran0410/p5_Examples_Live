let shape;
let shape2;

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();

    // dùng angleMode(DEGREES) để nhập giá trị angle dễ hơn
    angleMode(DEGREES);

    // góc tĩnh
    shape = new AwsomeRect({
        x: 500,
        y: 200,
        width: 150,
        height: 75,
        angle: 60 // radians(60) nếu không dùng angleMode(DEGREES)
    });

    // xoay
    shape2 = new AwsomeRect({
        x: 200,
        y: 200,
        angle: 60,
        rotateSpeed: 2 // radians(2) nếu không dùng angleMode(DEGREES)
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