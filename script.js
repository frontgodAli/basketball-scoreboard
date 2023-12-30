let homeCount=0;
let guestCount=0;

let homeEl=document.getElementById("home");
let guestEl=document.getElementById("guest");
homeEl.textContent=homeCount;
guestEl.textContent=guestCount;

function add(side,num){
    if(side==="home"){
        if(num===1){
            homeCount+=1
            homeEl.textContent=homeCount
        }else if(num===2){
            homeCount+=2
            homeEl.textContent=homeCount
        }else if(num===3){
            homeCount+=3
            homeEl.textContent=homeCount
        }
    }else if(side==="guest"){
        if(num===1){
            guestCount+=1
            guestEl.textContent=guestCount
        }else if(num===2){
            guestCount+=2
            guestEl.textContent=guestCount
        }else if(num===3){
            guestCount+=3
            guestEl.textContent=guestCount
        }
    }
    
}

function reset(){
    homeCount=0
    guestCount=0
    homeEl.textContent=homeCount
    guestEl.textContent=guestCount
}
