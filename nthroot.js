let opr1 =27; 
let opr2=3; 
let randomNumber = Math.random() % 10; 
let margin = 0.001;  
let maximumRange = 2147483647;
let root = 0.0;
while (maximumRange > margin){
    root = ((opr2 - 1.0) * randomNumber + opr1 / Math.pow(randomNumber, opr2 - 1)) / opr2;
    maximumRange = Math.abs(root - randomNumber);
    randomNumber = root;
} 
let answer = Math.round(root*1000.0)/1000.0
for(let i = 0; i<root ; i++){
 answer *=  num}
document.querySelector('#header').innerHTML = answer
console.log(message)