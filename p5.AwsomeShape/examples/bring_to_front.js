function hightlight() {
    this.strokeWeight = 5;
}
function unHightlight() {
    this.strokeWeight = 1;
}

function setup() {
    createCanvas(800, 400);

    AwsomeShape.init(this);

    /* 
        + Mặc định shape nào được tạo TRƯỚC thì sẽ ở DƯỚI các shape tạo SAU 
            (trong ví dụ này: hình tròn sẽ ở trên hình polygon do hình tròn đc tạo trước)
        + KÉO shape để đưa shape đó LÊN TRÊN các shape khác
            (kéo hình tròn sẽ đưa hình tròn lên trên hình polygon)
    */

    AwsomeShape.create({
        shape: "circle",
        fillColor: "red",
        x: 350,
        y: 200,
        onHover: hightlight,
        onOut: unHightlight
    });

    AwsomeShape.create({
        shape: "polygon",
        nPoint: 7,
        fillColor: "green",
        x: 300,
        y: 200,
        onHover: hightlight,
        onOut: unHightlight
    });
}

function draw() {
    background(240);

    fill(0);
    text("Drag the shapes", width / 2, 20);

    AwsomeShape.runShapes();
}