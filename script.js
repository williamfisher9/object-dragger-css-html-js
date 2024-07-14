const item = document.getElementById("item");

let mousePressed = false;
let itemGrabXVal = 0;
let itemGrabYVal = 0;

item.addEventListener("mousedown", () => {
    mousePressed = true;
    
    itemGrabXVal = event.offsetX;
    itemGrabYVal = event.offsetY;
    
    console.log(`down ${mousePressed}`)
});

item.addEventListener("mousemove", (event) => {
    if(!mousePressed){
        return;
    }
    else {
        console.log(`moving ${mousePressed}`)

        let xVal = event.clientX;
        let yVal = event.clientY;

        item.style.left = `${xVal-itemGrabXVal}px`;
        item.style.top = `${yVal-itemGrabYVal}px`;
    }
});

item.addEventListener("mouseup", () => {
    mousePressed = false;
    itemGrabXVal = 0;
    itemGrabYVal = 0;
    console.log(`up ${mousePressed}`)
});