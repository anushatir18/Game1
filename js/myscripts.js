function number(){
    const x = Math.random();
    const scaledNumber = x * 3;
    const finalNumber = Math.floor(scaledNumber) + 1;

    const imageElement = document.getElementById('img');
    const stone ="img/stone.png";
    const paper ="img/paper.png";
    const scissor ="img/scissor.png";


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

