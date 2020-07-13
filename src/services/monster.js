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
        currentHealth: 11,
        maxHealth: 11,
        attack: 8,
        defense: 5
    },
    10: {
        name: 'Ogre',
        zone: 3,
        currentHealth: 10,
        maxHealth: 10,
        attack: 6,
        defense: 9
    },
    11: {
        name: 'Psychic Grey Ooze',
        zone: 3,
        currentHealth: 10,
        maxHealth: 10,
        attack: 11,
        defense: 5
    },
    12: {
        name: 'Basilisk',
        zone: 3,
        currentHealth: 10,
        maxHealth: 10,
        attack: 9,
        defense: 6
    },
    // Zone 4
    13: {
        name: 'Swarm of Undead Snakes',
        zone: 4,
        currentHealth: 14,
        maxHealth: 14,
        attack: 12,
        defense: 7
    },
    14: {
        name: 'Shadow Demon',
        zone: 4,
        currentHealth: 12,
        maxHealth: 12,
        attack: 13,
        defense: 8
    },
    15: {
        name: 'Golem',
        zone: 4,
        currentHealth: 16,
        maxHealth: 16,
        attack: 9,
        defense: 9
    },
    16: {
        name: 'Cyclops',
        zone: 4,
        currentHealth: 15,
        maxHealth: 15,
        attack: 10,
        defense: 9
    },
    //Zone 5
    17: {
        name: 'Kraken',
        zone: 5,
        currentHealth: 20,
        maxHealth: 20,
        attack: 14,
        defense: 10
    },
    18: {
        name: 'Giant Slug',
        zone: 5,
        currentHealth: 21,
        maxHealth: 21,
        attack: 14,
        defense: 11
    },
    19: {
        name: 'Minotaur',
        zone: 5,
        currentHealth: 17,
        maxHealth: 17,
        attack: 13,
        defense: 13
    },
    20: {
        name: 'Hydra',
        zone: 5,
        currentHealth: 16,
        maxHealth: 16,
        attack: 17,
        defense: 13
    }
}

export const getRandomMonster = (zone) => {
    let monsterList = []
    if (zone === 1) {
        monsterList = [1, 2, 3, 4]
    } else if (zone === 2) {
        monsterList = [5, 6, 7, 8]
    } else if (zone === 3) {
        monsterList = [9, 10, 11, 12]
    } else if (zone === 4) {
        monsterList = [13, 14, 15, 16]
    } else {
        monsterList = [17, 18, 19, 20]
    }
    const randomMonster = Math.floor(Math.random() * 4);
    return monsters[monsterList[randomMonster]]
}

