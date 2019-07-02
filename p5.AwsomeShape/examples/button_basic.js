let pic;
let bgColor = "white";

function changeBg() {
    if(bgColor == "white") {
        bgColor = "gray";
    } else {
        bgColor = "white";
    }
}

function preload() {
    pic = loadImage('examples/assets/subscribe.png');
}

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    AwsomeShape.create({
        shape: "rectangle",
        picture: pic,
        cornerRadius: 5,
        strokeWeight: 0,
        x: 400,
        y: 200,
        width: 150,
        height: 50,
        draggable: false,
        onHover: function() {
            this.strokeWeight = 3;
        },
        onOut: function() {
            this.strokeWeight = 0;
        },
        onPress: function() {
            this.y += 5;
        },
        onRelease: function() {
            this.y -= 5;
            changeBg();
        }
    });
}

function draw() {
    background(bgColor);

    fill(0);
    text("Click the button", width / 2, 20);

    AwsomeShape.runShapes();
}