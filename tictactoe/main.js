function clicked() {
    if (game==0) {
    if (player==0 && this.innerHTML!="0" && this.innerHTML!="X") {
        this.innerHTML="X";
        player++;
    } else if (player==1 && this.innerHTML!="0" && this.innerHTML!="X") {
        this.innerHTML="0";
        player=0;
    }
    }
    if (arr[0].innerHTML=="X" && arr[1].innerHTML=="X" && arr[2].innerHTML=="X" || arr[3].innerHTML=="X" && arr[4].innerHTML=="X" && arr[5].innerHTML=="X" || arr[6].innerHTML=="X" && arr[7].innerHTML=="X" && arr[8].innerHTML=="X" || arr[0].innerHTML=="X" && arr[3].innerHTML=="X" && arr[6].innerHTML=="X" || arr[1].innerHTML=="X" && arr[4].innerHTML=="X" && arr[7].innerHTML=="X" || arr[2].innerHTML=="X" && arr[5].innerHTML=="X" && arr[8].innerHTML=="X" || arr[0].innerHTML=="X" && arr[4].innerHTML=="X" && arr[8].innerHTML=="X" || arr[2].innerHTML=="X" && arr[4].innerHTML=="X" && arr[6].innerHTML=="X") {
      game++;   
        document.getElementById("h").innerHTML="First player win";
    }
    if (arr[0].innerHTML=="0" && arr[1].innerHTML=="0" && arr[2].innerHTML=="0" || arr[3].innerHTML=="0" && arr[4].innerHTML=="0" && arr[5].innerHTML=="0" || arr[6].innerHTML=="0" && arr[7].innerHTML=="0" && arr[8].innerHTML=="0" || arr[0].innerHTML=="0" && arr[3].innerHTML=="0" && arr[6].innerHTML=="0" || arr[1].innerHTML=="0" && arr[4].innerHTML=="0" && arr[7].innerHTML=="0" || arr[2].innerHTML=="0" && arr[5].innerHTML=="0" && arr[8].innerHTML=="0" || arr[0].innerHTML=="0" && arr[4].innerHTML=="0" && arr[8].innerHTML=="0" || arr[2].innerHTML=="0" && arr[4].innerHTML=="0" && arr[6].innerHTML=="0") {
      game++;   
        document.getElementById("h").innerHTML="Second player win";
    }
}
function replays(){
    for (let i=0;i<9;i++) {
        arr[i].innerHTML="";
    }
    player=0;
    game=0;
    document.getElementById("h").innerHTML="";
} 
let player=0;
let game = 0;
document.getElementById("replay").addEventListener("click", replays);
let arr = document.getElementsByClassName("block");
for (let i=0; i<9; i++){
   arr[i].addEventListener("click", clicked);  
}
