function clicked() {
    if (player==0 && this.innerHTML!="0" && this.innerHTML!="X") {
        this.innerHTML="X";
        player++;
    } else if (player==1 && this.innerHTML!="0" && this.innerHTML!="X") {
        this.innerHTML="0";
        player=0;
    }
}
function replays(){
    for (let i=0;i<9;i++) {
        arr[i].innerHTML="";
    }
    player=0;
} 
let player=0;
document.getElementById("replay").addEventListener("click", replays);
let arr = document.getElementsByClassName("block");
for (let i=0; i<9; i++){
   arr[i].addEventListener("click", clicked);  
}
