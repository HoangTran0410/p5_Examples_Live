let pic, circlePic;

function hightlight() {
    this.strokeWeight = 5;
}

function unHightlight() {
    this.strokeWeight = 1;
}

function preload() {
    pic = loadImage('examples/assets/subscribe.png');
    circlePic = loadImage('examples/assets/youtube_play_btn.png');
}

function setup() {
    createCanvas(800, 600);

    AwsomeShape.init(this);

    AwsomeShape.create({
        shape: "rectangle",
        text: 'textFill: "#f0f"',
        x: 87,
        y: 66,
        width: 140,
        height: 50,
        textFill: "#f0f"
    })
    AwsomeShape.create({
        shape: "rectangle",
        text: "textSize: 25",
        x: 678,
        y: 70,
        width: 140,
        height: 50,
        textSize: 25
    })
    AwsomeShape.create({
        shape: "rectangle",
        text: "textRotate: 45",
        x: 247,
        y: 71,
        width: 50,
        height: 100,
        rotateSpeed: radians(random(1, 2) * random([-1, 1])),
        textRotate: radians(45)
    })
    AwsomeShape.create({
        shape: "rectangle",
        text: "textRotate:false",
        x: 386,
        y: 76,
        width: 100,
        height: 50,
        rotateSpeed: radians(random(1, 2) * random([-1, 1])),
        textRotate: false
    })
    AwsomeShape.create({
        shape: "rectangle",
        text: "textRotate:true",
        x: 518,
        y: 68,
        width: 120,
        height: 50,
        rotateSpeed: radians(random(1, 2) * random([-1, 1])),
        textRotate: true
    })

    AwsomeShape.create({
        shape: "rectangle",
        text: "strokeColor",
        x: 84,
        y: 220,
        width: 140,
        height: 50,
        strokeColor: randHexColor(),
        strokeWeight: 5
    })
    AwsomeShape.create({
        shape: "rectangle",
        text: "fillColor",
        x: 251,
        y: 218,
        width: 140,
        height: 50,
        fillColor: randHexColor()
    })

    AwsomeShape.create({
        shape: "rectangle",
        text: "rotateSpeed",
        x: 416,
        y: 222,
        width: 100,
        height: 50,
        rotateSpeed: radians(1)
    })
    AwsomeShape.create({
        shape: "rectangle",
        text: "angle:60",
        x: 558,
        y: 224,
        width: 100,
        height: 70,
        angle: radians(60),
        fillColor: "#abf"
    })

    AwsomeShape.create({
        shape: "rectangle",
        text: "cornerRadius",
        x: 700,
        y: 218,
        width: 140,
        height: 50,
        cornerRadius: random(50, 100)
    })
    AwsomeShape.create({
        shape: "rectangle",
        picture: pic,
        x: 150,
        y: 318,
        width: 170,
        height: 50,
        strokeWeight: 0,
        cornerRadius: 5,
        onHover: function () {
            this.strokeWeight = 3;
        },
        onOut: function () {
            this.strokeWeight = 0;
        },
        onPress: function () {
            this.y += 5;
        },
        onRelease: function () {
            this.y -= 5;
        }
    })

    AwsomeShape.create({
        text: "Event",
        x: 412,
        y: 348,
        width: 140,
        height: 50,
        draggable: false,
        onHover: function () {
            this.text = "Hover";
        },
        onOut: function () {
            this.text = "Outside";
        },
        onPress: function () {
            this.text = "Press";
            this.width -= 10;
            this.height -= 10;
        },
        onRelease: function () {
            this.text = "Release";
            this.width += 10;
            this.height += 10;
            this.fillColor = randHexColor();
            this.textFill = AwsomeShape.Tools.invertColor(this.fillColor, true);
        },
        onDrag: function () {
            this.text = "Drag";
        }
    })

    AwsomeShape.create({
        shape: "rectangle",
        text: "draggable: false",
        x: 693,
        y: 350,
        width: 140,
        height: 50,
        draggable: false
    })
    AwsomeShape.create({
        shape: "circle",
        x: 150,
        y: 500,
        radius: 50,
        picture: circlePic,
        rotateSpeed: radians(1),
        onHover: hightlight,
        onOut: unHightlight
    })
    AwsomeShape.create({
        shape: "star",
        text: "Star",
        size: 50,
        x: 300,
        y: 500,
        fillColor: randHexColor(),
        rotateSpeed: radians(0.2),
        onHover: hightlight,
        onOut: unHightlight
    })
    AwsomeShape.create({
        shape: "poly",
        x: 500,
        y: 500,
        text: "Poly",
        fillColor: randHexColor(),
        rotateSpeed: radians(-1),
        vertices: [
            { x: -50, y: -20 },
            { x: -20, y: -40 },
            { x: 50, y: -20 },
            { x: 100, y: 10 },
            { x: 50, y: 70 }
        ],
        onHover: hightlight,
        onOut: unHightlight
    })
    AwsomeShape.create({
        shape: "polygon",
        nPoint: 5,
        x: 700,
        y: 500,
        text: "Polygon",
        fillColor: randHexColor(),
        rotateSpeed: radians(-0.2),
        onHover: hightlight,
        onOut: unHightlight
    })
}

function draw() {
    background(240);

    fill(100);
    rect(width / 2, height - 100, width, 200);
    fill(255);
    textSize(20);
    text("Other Shapes: ", 100, height - 180);

    AwsomeShape.runShapes();

    showFrameRate(10, 10);
}

// ============= OTHER FUNCTIONS ==============
function showFrameRate(x, y) {
    fill(0);
    noStroke();
    text(~~frameRate(), x, y);
}

function randHexColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];

    return color;
}