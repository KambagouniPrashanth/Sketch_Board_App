console.log("hello")
const pencil=document.querySelector('.pencil');
const pencil_tools_cont=document.querySelector('.pencil-tools-cont')

const earser=document.querySelector('.eraser')
const earser_tools_cont=document.querySelector('.eraser-tools-cont')

const sticky_notes=document.querySelector('.sticky_notes')
// const sticky_tools_cont=document.querySelector('.sticky-tool-cont')

let isPencilOpen=false;
let isEraserOpen=false;


pencil.addEventListener("click",()=>{
    isPencilOpen=!isPencilOpen;
    if(isPencilOpen){
        pencil_tools_cont.style.display="block";
        earser_tools_cont.style.display="none";
        
        isEraserOpen=false;
       



    }
    else{
        pencil_tools_cont.style.display="none"

    }
})

earser.addEventListener("click",()=>{

    isEraserOpen=!isEraserOpen;
    if(isEraserOpen){
        earser_tools_cont.style.display="block"
        pencil_tools_cont.style.display="none"
        isPencilOpen=false;
       




    }
    else{
        earser_tools_cont.style.display="none"

    }
    

})

sticky_notes.addEventListener("click",()=>{
    const stickyElement=` <div class="header-cont">
    <div class="minimize"></div>
    <div class="remove"></div>
    </div>
    <div class="notes-cont">
        <textarea name="" id="" cols="20" rows="10"></textarea>
    </div>`
let sticky_cont=document.createElement("div");
sticky_cont.setAttribute("class","sticky-cont")
sticky_cont.innerHTML=stickyElement;
document.body.appendChild(sticky_cont)
let minimize=document.querySelector('.minimize');
let remove=document.querySelector('.remove');
remove.addEventListener("click",()=>{
    console.log("remove")
    sticky_cont.remove();
})
minimize.addEventListener("click",()=>{
    console.log("minimize")
    let notes_cont=document.querySelector('.notes-cont');
    if(notes_cont.style.display==='none'){
        notes_cont.style.display='block'

    }
    else{
        notes_cont.style.display='none';

    }

})

sticky_cont.onmousedown = function(event) {
    // (1) prepare to moving: make absolute and on top by z-index
    sticky_cont.style.position = 'absolute';
    sticky_cont.style.zIndex = 1000;
  
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(sticky_cont);
  
    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        sticky_cont.style.left = pageX - sticky_cont.offsetWidth / 2 + 'px';
        sticky_cont.style.top = pageY - sticky_cont.offsetHeight / 2 + 'px';
    }
  
    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
    sticky_cont.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        sticky_cont.onmouseup = null;
      };

    //   sticky_cont.dragstart=function(){
    //     return false;
    //   }
}


   
})