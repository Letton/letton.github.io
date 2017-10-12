function moveleft(){
   if (index>1) {
       index--;
       x+=800;
       line.style.left=x+"px";
       right.style.borderLeftColor="#fff";
   } 
   if (index==1) {
       left.style.borderRightColor="#cecece";
   } 
}
function moveright(){
    if (index<3) {
       index++;
       x-=800;
       line.style.left=x+"px";
       left.style.borderRightColor="#fff"; 
    }
   if (index==3) {
       right.style.borderLeftColor="#cecece";
   } 
}
let x = 0;
let index= 1;
let line = document.getElementById("line");
let left = document.getElementById("left");
let right = document.getElementById("right");
left.addEventListener("click", moveleft);
right.addEventListener("click", moveright);