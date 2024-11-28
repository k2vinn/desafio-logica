const emojis = [
    "🎅",
    "🎅",
    "🦌",
    "🦌",
    "🦃",
    "🦃",
    "🤶",
    "🤶",
    "🎁",
    "🎁",
    "🎮",
    "🎮",
    "⛄",
    "⛄",
    "🎄",
    "🎄",
];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2: -1));


for(let i=0; i< emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards [1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length=== emojis.length){
        alert("Você venceu!");
    }
}

const snowContainer = document.querySelector('.snow');
const numFlakes = 100; 

for (let i = 0; i < numFlakes; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.style.left = Math.random() * 100 + 'vw'; 
    flake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    flake.style.animationDelay = Math.random() * 5 + 's'; 
    flake.style.width = flake.style.height = Math.random() * 5 + 5 + 'px'; 
    snowContainer.appendChild(flake);
}