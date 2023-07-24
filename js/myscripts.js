var stone ="img/stone.png";
var scissor ="img/scissor.png";
var paper ="img/paper.png";
   
function number(){
    const x = Math.random();
    const scaledNumber = x * 3;
    const finalNumber = Math.floor(scaledNumber) + 1;

    const imageElement = document.getElementById('img');

    if(finalNumber==1){
        imageElement.src = stone;
    }
    else if(finalNumber==2){
        imageElement.src = paper;
    }
    else{
        imageElement.src = scissor;
    }

} 

function stone(){
    const imageElement = document.getElementById('imgg');
    imageElement.src = stone;
}
function paper(){
    const imageElement = document.getElementById('imgg');
    imageElement.src = paper;
}
function scissor(){
    const imageElement = document.getElementById('imgg');
    imageElement.src = scissor;
}

