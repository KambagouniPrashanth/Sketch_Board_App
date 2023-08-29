let canvas = document.querySelector('canvas')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let penTools = canvas.getContext("2d");
const black=document.querySelector('.black')
const red=document.querySelector('.red')

const blue=document.querySelector('.blue')
const sizeOfPencil=document.querySelector('.pencil-width')
const sizeOfEraser=document.querySelector('.eraser-width')

sizeOfPencil.addEventListener("click",()=>{
    let currentVal = sizeOfPencil.value;
    penTools.lineWidth=currentVal;

    console.log(currentVal)
})

sizeOfEraser.addEventListener("click",()=>{
    let currentVal = sizeOfEraser.value;
    penTools.lineWidth=currentVal;

    console.log(currentVal)
})
black.addEventListener("click",()=>{
    penTools.strokeStyle="black";
})
red.addEventListener("click",()=>{
    penTools.strokeStyle="red";
})
blue.addEventListener("click",()=>{
    penTools.strokeStyle="blue";
})

earser.addEventListener("click",()=>{
    penTools.strokeStyle="white"
    penTools.lineWidth=10;
})



penTools.lineWidth=5;

// penTools.moveTo(0, 0);
// penTools.lineTo(200, 100);
// penTools.lineTo(300, 100);
// penTools.moveTo(0, 0);
// penTools.lineTo(400, 100);
// penTools.moveTo(0, 0);
// penTools.lineTo(500, 100);


// penTools.stroke();

let isMouseDown=false;
canvas.addEventListener("mousedown",(e)=>{
    isMouseDown=true;
    let x=e.clientX;
    let y=e.clientY;
    console.log(x,y)
    penTools.beginPath();
    penTools.moveTo(x,y);
})


canvas.addEventListener("mousemove",(e)=>{
    if(isMouseDown){
        penTools.lineTo(e.clientX,e.clientY);
        penTools.stroke();
    }
})

canvas.addEventListener("mouseup",()=>{
    isMouseDown=false;
})