function hightlight() {
    this.strokeWeight = 3;
    this.fillColor = "pink";
}

function unHightlight() {
    this.strokeWeight = 1;
    this.fillColor = "#0000";
}

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);

    /* Rectangle:
        + width: width of rectangle
        + height: height of rectangle
    */
    AwsomeShape.create({
        shape: "rectangle",
        width: 100,
        height: 50,
        x: 75,
        y: 100,
        onHover: hightlight,
        onOut: unHightlight
    })

    /* Circle:
        + radius: radius of circle
    */
    AwsomeShape.create({
        shape: "circle",
        radius: 55,
        x: 200,
        y: 120,
        onHover: hightlight,
        onOut: unHightlight
    })

    /* Triangle:
        + size: diameter of triangle
    */
    AwsomeShape.create({
        shape: "triangle",
        size: 50,
        x: 300,
        y: 140,
        onHover: hightlight,
        onOut: unHightlight
    })

    /* Poly:
        + vertices: array of points
    */
    AwsomeShape.create({
        shape: "poly",
        vertices: [
            { x: -30, y: -30 },
            { x: -15, y: -60 },
            { x: 10, y: -45 },
            { x: 30, y: -15 },
            { x: 0, y: 60 }
        ],
        x: 400,
        y: 160,
        onHover: hightlight,
        onOut: unHightlight
    })

    /* Polygon:
        + nPoint: number of vertices count
        + size: diameter of polygon
    */
    AwsomeShape.create({
        shape: "polygon",
        nPoint: 7,
        size: 50,
        x: 500,
        y: 180,
        onHover: hightlight,
        onOut: unHightlight
    })

    /* Star:
        + size: diameter of star
    */
    AwsomeShape.create({
        shape: "star",
        size: 50,
        x: 600,
        y: 200,
        onHover: hightlight,
        onOut: unHightlight
    })
}

function draw() {
    background(240);

    AwsomeShape.runShapes();
}