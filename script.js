function appliqueNumber(){
    let number =document.querySelector('#number').value;
    let area=document.querySelector('#area');
    area.style.fontSize = `${number}px`; 
}

function appliqueColor(){
    let Color =document.querySelector('#color').value;
    let area=document.querySelector('#area');
    area.style.color = Color; 
}

function appliqueFont(){
    let Font =document.querySelector('#font').value;
    let area=document.querySelector('#area');
    area.style.fontFamily = Font; 
}