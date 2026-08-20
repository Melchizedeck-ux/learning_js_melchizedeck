function showInputs() {

    let shape = document.getElementById("shape").value;
    let inputs = document.getElementById("inputs");

    inputs.innerHTML = "";

    if (shape == "triangle") {

        inputs.innerHTML =
            '<input type="number" id="base" placeholder="Enter base">' +
            '<input type="number" id="height" placeholder="Enter height">';

    } else if (shape == "circle") {

        inputs.innerHTML =
            '<input type="number" id="radius" placeholder="Enter radius">';

    } else if (shape == "square") {

        inputs.innerHTML =
            '<input type="number" id="side" placeholder="Enter side">';

    } else if (shape == "rectangle") {

        inputs.innerHTML =
            '<input type="number" id="length" placeholder="Enter length">' +
            '<input type="number" id="width" placeholder="Enter width">';

    } else if (shape == "ellipse") {

        inputs.innerHTML =
            '<input type="number" id="a" placeholder="Enter major radius">' +
            '<input type="number" id="b" placeholder="Enter minor radius">';

    }
}


function calculateArea() {

    let shape = document.getElementById("shape").value;
    let area = 0;

    if (shape == "triangle") {

        let base = Number(document.getElementById("base").value);
        let height = Number(document.getElementById("height").value);

        area = (base * height) / 2;
    } else if (shape == "circle") {

        let radius = Number(document.getElementById("radius").value);

        area = Math.PI * radius * radius;
    } else if (shape == "square") {

        let side = Number(document.getElementById("side").value);

        area = side * side;
    } else if (shape == "rectangle") {

        let length = Number(document.getElementById("length").value);
        let width = Number(document.getElementById("width").value);

        area = length * width;
    } else if (shape == "ellipse") {

        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);

        area = Math.PI * a * b;
    } else {

        document.getElementById("result").innerHTML =
            "Please select a shape.";

        return;
    }

    document.getElementById("result").innerHTML =
        "Area = " + area.toFixed(2);
}