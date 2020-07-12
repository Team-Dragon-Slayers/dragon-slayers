export const bosses = {
    //zone 1
    1: {
        name: 'Parasitic Ice Worm',
        zone: 1,
        currentHealth: 7,
        maxHealth: 7,
        attack: 3,
        defense: 6
    },
    2: {
        name: 'Banshee',
        zone: 1,
        currentHealth: 4,
        maxHealth: 4,
        attack: 7,
        defense: 3
    },
    //zone 2
    3: {
        name: 'Goblin King',
        zone: 2,
        currentHealth: 9,
        maxHealth: 9,
        attack: 6,
        defense: 5
    },
    4: {
        name: 'Vampire',
        zone: 2,
        currentHealth: 10,
        maxHealth: 10,
        attack: 4,
        defense: 7
    },
    //zone 3
    5: {
        name: 'Giant Cyclops',
        zone: 3,
        currentHealth: 14,
        maxHealth: 14,
        attack: 7,
        defense: 4
    },
    6: {
        name: 'Enraged Hydra',
        zone: 3,
        currentHealth: 7,
        maxHealth: 7,
        attack: 11,
        defense: 6
    },
    //zone 4
    7: {
        name: 'Manticore',
        zone: 4,
        currentHealth: 11,
        maxHealth: 11,
        attack: 9,
        defense: 8
    },
    8: {
        name: 'Cerberus',
        zone: 4,
        currentHealth: 15,
        maxHealth: 15,
        attack: 7,
        defense: 9
    },
    //zone 5
    9: {
        name: 'Phoenix',
        zone: 5,
        currentHealth: 16,
        maxHealth: 16,
        attack: 9,
        defense: 12
    },
    10: {
        name: 'Dragon',
        zone: 5,
        currentHealth: 12,
        maxHealth: 12,
        attack: 17,
        defense: 10
    },
    
}


export const getRandomBosses = (zone) => {
    let bossList = []
    if (zone === 1) {
        bossList = [1, 2]
    } else if (zone === 2) {
        bossList = [3, 4]
    } else if (zone === 3) {
        bossList = [5, 6]
    } else if (zone === 4) {
        bossList = [7, 8]
    } else {
        bossList = [9, 10]
    }
    const randomBosses = Math.floor(Math.random() * 2);
    return bosses[bossList[randomBosses]]
}

