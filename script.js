$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let userAP = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.arcane-sceptre').on('click', handleArcaneSceptre)
    $('.entangle').on('click', handleEntangle)
    $('.dragon-blade').on('click', handleDragonBlade)
    $('.star-fire').on('click', handleStarFire)
    handleFungus();
    handleAP();


    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function renderHP(){
    $('.hp-text').empty()
    $('.hp-text').append(`<span id ="HP">${fungusHP} HP </span>`)
}

function renderAP(){
    $('.ap-text').empty()
    $('.ap-text').append(`<span id ="AP">${userAP} AP </span>`)
}

function handleArcaneSceptre(){
    fungusHP -= 14
    userAP -= 12
    
    if (fungusHP <= 0) {
        fungusHP = 0
    } 
    if (userAP <= 12) {
        userAP = 0
    }

    renderHP();
    renderAP();
    handleFungus();
    handleAP();

}

function handleEntangle(){
    fungusHP -= 9
    userAP -= 23
    
    if (fungusHP <= 0) {
        fungusHP = 0
    } 
    if (userAP <= 23) {
        userAP = 0
    }
    renderHP();
    renderAP();
    handleFungus();
    handleAP();

}

function handleDragonBlade(){
    fungusHP -= 47
    userAP -= 38
    
    if (fungusHP <= 0) {
        fungusHP = 0
    } 
    if (userAP <= 38) {
        userAP = 0
    }
    
    renderHP();
    renderAP();
    handleFungus();
    handleAP();

}

function handleStarFire(){
    fungusHP -= 25
    userAP -= 33

    if (fungusHP <= 0) {
        fungusHP = 0
    } 
    if (userAP <= 33) {
        userAP = 0
    }
    
    renderHP();
    renderAP();
    handleFungus();
    handleAP();

}

function handleFungus(){
    if(fungusHP <= 0){
    console.log('he dead')
    fungusHP = 0;
    $('.walk').replaceWith('<div class="freaky-fungus dead"></div>')
}

}

function handleAP(){
    if( userAP <= 0) {
    console.log('out of mana');
    userAP = 0;
    $('.walk').replaceWith('<div class="freaky-fungus jump"></div>')
    $('.attack-btn').attr('disabled', true);
}
}