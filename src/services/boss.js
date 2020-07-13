export const bosses = {
    //zone 1
    1: {
        name: 'Parasitic Ice Worm',
        zone: 1,
        currentHealth: 7,
        maxHealth: 7,
        attack: 5,
        defense: 4
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
        attack: 7,
        defense: 6
    },
    //zone 3
    5: {
        name: 'Giant Cyclops',
        zone: 3,
        currentHealth: 16,
        maxHealth: 16,
        attack: 9,
        defense: 6
    },
    6: {
        name: 'Enraged Hydra',
        zone: 3,
        currentHealth: 12,
        maxHealth: 12,
        attack: 13,
        defense: 9
    },
    //zone 4
    7: {
        name: 'Manticore',
        zone: 4,
        currentHealth: 19,
        maxHealth: 19,
        attack: 13,
        defense: 10
    },
    8: {
        name: 'Cerberus',
        zone: 4,
        currentHealth: 22,
        maxHealth: 22,
        attack: 10,
        defense: 10
    },
    //zone 5
    9: {
        name: 'Phoenix',
        zone: 5,
        currentHealth: 30,
        maxHealth: 30,
        attack: 15,
        defense: 12
    },
    10: {
        name: 'Dragon',
        zone: 5,
        currentHealth: 20,
        maxHealth: 20,
        attack: 25,
        defense: 12
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

