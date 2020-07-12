export const player = {
    name: '',
    deck: [
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
            name: 'Spell of Fireballs',
            type: 'Attack',
            points: 3
        },
        {
            name:'Wooden Shield',
            type: 'Defense',
            points: 1,
        },
        {
            name: 'Fuzzy Berries',
            type: 'Healing',
            points: 1
        },
    ],
    zone: 1,
    row: 1,
    space: 1,
    currentHealth: 10,
    maxHealth: 10,
    attack: 2,
    defense: 2
}