let homeCount=0;
let guestCount=0;

let homeEl=document.getElementById("home");
let guestEl=document.getElementById("guest");
homeEl.textContent=homeCount;
guestEl.textContent=guestCount;

function addOne(side){
    if(side==="home"){
        homeCount+=1
        homeEl.textContent=homeCount
    }else if(side==="guest"){
        guestCount+=1
        guestEl.textContent=guestCount
    }
    
}
function addTwo(side){
    if(side==="home"){
        homeCount+=2
        homeEl.textContent=homeCount
    }else if(side==="guest"){
        guestCount+=2
        guestEl.textContent=guestCount
    }
}
function addThree(side){
    if(side==="home"){
        homeCount+=3
        homeEl.textContent=homeCount
    }else if(side==="guest"){
        guestCount+=3
        guestEl.textContent=guestCount
    }
}
function reset(){
    homeCount=0
    guestCount=0
    homeEl.textContent=homeCount
    guestEl.textContent=guestCount
}
