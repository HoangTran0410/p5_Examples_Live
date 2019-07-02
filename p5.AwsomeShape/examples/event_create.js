function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);
    
    // create shape
    let shape = new AwsomeRect({
        text: "Hover me!!",
        x: 300,
        y: 200
    });
    shape.onHover = function() {
        this.fillColor = "blue";
    }
    shape.onOut = function() {
        this.fillColor = "pink";
    }

    // Another way, put event into config
    new AwsomeRect({
        text: "Hover me too",
        x: 500,
        y: 200,
        onHover: function() {
            this.strokeWeight = 5;
        },
        onOut: function() {
            this.strokeWeight = 1;
        }
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}