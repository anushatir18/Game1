var stone ="img/stone.png";
var scissor ="img/scissor.png";
var paper ="img/paper.png";

    var x = Math.random();
    var scaledNumber = x * 3;
    var finalNumber = Math.floor(scaledNumber) + 1;
var user;

function number(){
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

    result();

} 

function result(){
if(finalNumber==user ){
    document.getElementById('result').innerHTML = "SAME";
}
else if(finalNumber==1 && user==2 ){
    document.getElementById('result').innerHTML = "WIN";
}
else if(finalNumber==1 && user==3 ){
    document.getElementById('result').innerHTML = "LOOSE";
}
else if(finalNumber==2 && user==1 ){
    document.getElementById('result').innerHTML = "LOOSE";
}
else if(finalNumber==2 && user==3 ){
    document.getElementById('result').innerHTML = "WIN";
}
else if(finalNumber==3 && user==1 ){
    document.getElementById('result').innerHTML = "WIN";
}
else if(finalNumber==3 && user==2 ){
    document.getElementById('result').innerHTML = "LOOSE";
}
}

function updateOutput() {
  document.getElementById('test').innerText = user;
  
}

function stonee() {
    user = 1;
    const imageElement = document.getElementById('imgg');
    document.getElementById('test').innerHTML= user;
    imageElement.src = stone;
    updateOutput();
    
}

function paperr() {
    user = 2;
    const imageElement = document.getElementById('imgg');
    document.getElementById('test').innerHTML= user;
    imageElement.src = paper;
    updateOutput();
    
}

function scissorr() {
    user = 3;
    const imageElement = document.getElementById('imgg');
    document.getElementById('test').innerHTML= user;
    imageElement.src =scissor;
    updateOutput();
    
}


