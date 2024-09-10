const canvas=document.querySelector('canvas'),
toolBtns=document.querySelectorAll('.shapes'),
ctx=canvas.getContext('2d');


let isDrawing=false;
brushWidth=3;

window.addEventListener('load', () =>{
    canvas.width = canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
});

const startDraw=(e)=> {
    isDrawing=true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    
}

const drawing = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
}

toolBtns.forEach(btn=>{
    btn.addEventListener('click',() =>{
        console.log(btn.id);
    });
});

canvas.addEventListener('mousedown',startDraw);
canvas.addEventListener('mousemove',drawing);
canvas.addEventListener('mouseup',() => isDrawing=false);



