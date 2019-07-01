let pic;

function preload() {
    pic = loadImage('examples/assets/subscribe.png');
}

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init();

    
    let shape = new AwsomeRect({
        
        picture: pic,
        // Default value of picture's size is it's shape container's size
        pictureWidth: 140,
        pictureHeight: 40,

        x: 400,
        y: 200,
        width: 150,
        height: 50
    });

    // hover effect
    shape.onHover = function() {
        this.strokeWeight = 2;
    }
    shape.onOut = function() {
        this.strokeWeight = 0;
    }
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}