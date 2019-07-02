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
        + Những shape trong cùng 1 group không thể được chọn cùng lúc (hover, press, drag ...)
        + 2 shape khác group thì có thể được chọn cùng lúc 
            ~ hãy thử để hình sao và hình tròn đè lên nhau, rồi kéo cả 2 cùng lúc
        + Hiệu ứng Drag shape để đưa shape đó lên trên các shape khác (bring to front) chỉ có tác dụng trong cùng 1 group
    */
    
    // Group 1
    AwsomeShape.create({
        shape: "rectangle",
        group: "Group 1", // any name u want 
        text: "Group 1",
        fillColor: "pink",
        x: 300,
        y: 200,
        onHover: hightlight,
        onOut: unHightlight
    });

    AwsomeShape.create({
        shape: "circle",
        group: "Group 1",
        text: "Group 1",
        fillColor: "red",
        x: 450,
        y: 200,
        onHover: hightlight,
        onOut: unHightlight
    });

    // Group 2
    AwsomeShape.create({
        shape: "star",
        group: "abc",
        text: "Group 2",
        fillColor: "blue",
        x: 200,
        y: 300,
        onHover: hightlight,
        onOut: unHightlight
    });

    AwsomeShape.create({
        shape: "polygon",
        group: "abc",
        text: "Group 2",
        fillColor: "green",
        x: 400,
        y: 300,
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