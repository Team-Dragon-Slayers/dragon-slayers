export const monsters = {
    //Zone 1
    1: {
        name: 'Troll',
        zone: 1,
        currentHealth: 4,
        maxHealth: 4,
        attack: 1,
        defense: 3
    },
    2: {
        name: 'Spider',
        zone: 1,
        currentHealth: 3,
        maxHealth: 3,
        attack: 4,
        defense: 1
    },
    3: {
        name: 'Big Rat',
        zone: 1,
        currentHealth: 5,
        maxHealth: 5,
        attack: 2,
        defense: 2
    },
    4: {
        name: 'Dire Wolf',
        zone: 1,
        currentHealth: 4,
        maxHealth: 4,
        attack: 4,
        defense: 2
    },
    //Zone 2
    5: {
        name: 'Giant Centipede',
        zone: 2,
        currentHealth: 6,
        maxHealth: 6,
        attack: 6,
        defense: 3
    },
    6: {
        name: 'Mimic',
        zone: 2,
        currentHealth: 5,
        maxHealth: 5,
        attack: 5,
        defense: 5
    },
    7: {
        name: 'Zombie',
        zone: 2,
        currentHealth: 6,
        maxHealth: 6,
        attack: 5,
        defense: 4
    },
    8: {
        name: 'Skeleton',
        zone: 2,
        currentHealth: 6,
        maxHealth: 6,
        attack: 7,
        defense: 3
    },
    //Zone 3
    9: {
        name: 'Black Viper',
        zone: 3,
        currentHealth: 9,
        maxHealth: 9,
        attack: 7,
        defense: 4
    },
    10: {
        name: 'Ogre',
        zone: 3,
        currentHealth: 8,
        maxHealth: 8,
        attack: 5,
        defense: 8
    },
    11: {
        name: 'Psychic Grey Ooze',
        zone: 3,
        currentHealth: 6,
        maxHealth: 6,
        attack: 10,
        defense: 4 
    },
    12: {
        name: 'Basilisk',
        zone: 3,
        currentHealth: 7,
        maxHealth: 7,
        attack: 8,
        defense: 5
    },
    // Zone 4
    13: {
        name: 'Swarm of Undead Snakes',
        zone: 4,
        currentHealth: 10,
        maxHealth: 10,
        attack: 10,
        defense: 5
    },
    14: {
        name: 'Shadow Demon',
        zone: 4,
        currentHealth: 8,
        maxHealth: 8,
        attack: 10,
        defense: 7
    },
    15: {
        name: 'Golem',
        zone: 4,
        currentHealth: 12,
        maxHealth: 12,
        attack: 6,
        defense: 7
    },
    16: {
        name: 'Cyclops',
        zone: 4,
        currentHealth: 11,
        maxHealth: 11,
        attack: 7,
        defense: 7
    },
    //Zone 5
    17: {
        name: 'Kraken',
        zone: 5,
        currentHealth: 13,
        maxHealth: 13,
        attack: 10,
        defense: 7
    },
    18: {
        name: 'Giant Slug',
        zone: 5,
        currentHealth: 12,
        maxHealth: 12,
        attack: 10,
        defense: 8
    },
    19: {
        name: 'Minotaur',
        zone: 5,
        currentHealth: 10,
        maxHealth: 10,
        attack: 8,
        defense: 10
    },
    20: {
        name: 'Hydra',
        zone: 5,
        currentHealth: 8,
        maxHealth: 8,
        attack: 12,
        defense: 10
    }
}

export const getRandomMonster = (zone) {
    const numOfMonsters = 20;
    const randomMonster = Math.floor(Math.random() * numOfMonsters);
    return monsters[randomMonster]
}

