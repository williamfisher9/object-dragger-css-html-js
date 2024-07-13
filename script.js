const item = document.getElementById("item");

let mousePressed = false;

item.addEventListener("mousedown", () => {
    mousePressed = true;
    console.log(`down ${mousePressed}`)
});

item.addEventListener("mousemove", (event) => {
    if(!mousePressed){
        return;
    }
    else {
        console.log(`moving ${mousePressed}`)

        let itemHalfWidth = item.getBoundingClientRect().width/2;
        let itemHalfHeight = item.getBoundingClientRect().height/2;

        let xVal = event.clientX;
        let yVal = event.clientY;

        item.style.left = `${xVal-itemHalfWidth}px`;
        item.style.top = `${yVal-itemHalfHeight}px`;

    }
});

item.addEventListener("mouseup", () => {
    mousePressed = false;
    console.log(`up ${mousePressed}`)
});