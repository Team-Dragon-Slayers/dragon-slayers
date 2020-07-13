export const cards = [
    // attack cards
    {
        name: 'Dagger',
        type: 'Attack',
        points: 1,
    },
    {
        name:'Sword',
        type: 'Attack',
        points: 2
    },
    {
        name: 'Bow and Arrows',
        type: 'Attack',
        points: 2
    },
    {
        name: 'Spell of Fireballs',
        type: 'Attack',
        points: 3
    },
    {
        name: 'Swarm of bees',
        type: 'Attack',
        points: 2
    },
    {
        name: 'Bag of Big Rocks',
        type: 'Attack',
        points: 1
    },
    {
        name: 'Mjolnir',
        type: 'Attack',
        points: 5
    },
    {
        name: 'Catapult of Frozen Dung',
        type: 'Attack',
        points: 4
    },
    {
        name: 'Staff of Unparalleled Carnage',
        type: 'Attack',
        points: 7
    },
    // defense cards
    {
        name:'Wooden Shield',
        type: 'Defense',
        points: 1,
    },
    {
        name: 'Chainmail Body Armor',
        type: 'Defense',
        points: 2
    },
    {
        name: 'Vibranium Shield',
        type: 'Defense',
        points: 3
    },
    // healing cards
    {
        name: 'Fuzzy Berries',
        type: 'Healing',
        points: 1
    },
    {
        name: 'Sparkling Blue Potion',
        type: 'Healing',
        points: 2
    },
    {
        name: 'Hot Chocolate',
        type: 'Healing',
        points: 2
    },
    {
        name: 'Barrel of Mead',
        type: 'Healing',
        points: 3
    },
    {
        name: 'Gem of the Divine',
        type: 'Healing',
        points: 4
    },
    {
        name: 'Nectar of Eternal Life',
        type: 'Healing',
        points: 5
    }
]

export const drawCard = () => {
    let cardNum = Math.floor(Math.random() * cards.length);
    return cards[cardNum];
}