export const getBattleCards = (deck) => {
    let battleCards = [];
    let card1, card2, card3;
    while (card1 === card2 || card1 === card3 || card2 === card3) {
        card1 = Math.floor(Math.random() * deck.length) 
        card2 = Math.floor(Math.random() * deck.length) 
        card3 = Math.floor(Math.random() * deck.length) 
    }
    battleCards.push(deck[card1], deck[card2], deck[card3])
    return battleCards;
}