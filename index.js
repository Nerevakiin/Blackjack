// Molis mathw ligo kalitera na valw ena save functionality pou na kanei sum ta lefta kathe fora pou patas save


let player = {
    name: "malakas: ",
    chips: 0
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message =  " " 


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + "$" + player.chips




let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard > 10) {return 10}
    else if (randomCard === 1) {return 11}
    else {return randomCard}

}


function startGame() { 
    isAlive = true
    hasBlackjack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
 
    renderGame()
}


function renderGame() {
    
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " + "
    }
    
    if (sum <= 20) 
        {
        message = "do you want to draw a new card?"
        player.chips = 50
        } 
        else if (sum === 21) 
            {
            hasBlackjack = true
            message = "wohoo! Blackjack! ^_^"
            player.chips = 100
        } 
        else 
            {
            isAlive = false
            message = "you're out of the game :("
            player.chips = 0
        }

    messageEl.textContent = message 
    sumEl.textContent = "Sum: " + sum
    playerEl.textContent = player.name + "$" + player.chips

}



function newCard() {
    
    if (isAlive && hasBlackjack === false) {
    
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        
        renderGame()
    }
}

function stop() {
    cardsEl.textContent = "Cards: " 
    sumEl.textContent = "Sum: "

}

