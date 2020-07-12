export const getBattleCards = (deck) => {
    console.log('buld battle deck from services called')
    let battleCards = [];
    let card1, card2, card3;
    while (card1 === card2 || card1 === card3 || card2 === card3) {
        card1 = Math.floor(Math.random() * deck.length) 
        card2 = Math.floor(Math.random() * deck.length) 
        card3 = Math.floor(Math.random() * deck.length) 
    }
    battleCards.push(deck[card1], deck[card2], deck[card3])
    console.log(battleCards)
    console.log('build battle deck function end')
    return battleCards;
}