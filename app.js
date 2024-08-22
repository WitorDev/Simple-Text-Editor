const text = document.getElementById("text");

function alignLeft() {
    text.style.textAlign = "left";
}

function alignJustify() {
    text.style.textAlign = "center";
}

function alignRight() {
    text.style.textAlign = "right";
}

function italic() {
    if (text.style.fontStyle == "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
}

function bold() {
    if (text.style.fontWeight == "bold") {
        text.style.fontWeight = "100";
    } else {
        text.style.fontWeight = "bold";
    }
}