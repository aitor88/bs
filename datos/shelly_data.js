window.gameCharacters.push({
    id: 'shelly',
    name: 'Shelly',
    img: 'avatares/shelly.png',
    
    // Estadísticas cuando el JUGADOR usa a Shelly
    playerStats: {
        vida: 100,
        poder: 20,
        recursos: 6,
    },

    // Estadísticas cuando SHELLY es el ENEMIGO
    cpuStats: {
        vida: 100,
        poder: 18,
    },

    // Lista de movimientos disponibles en combate
    moves: [
        {
            name: { es: 'Perdigonada', eu: 'Perdigoi Jaurtiketa' },
            description: { es: 'Ataque básico. Causa 15 de daño y carga el Súper.', eu: 'Oinarrizko erasoa. 15eko kaltea eragiten du eta Superra kargatzen du.' },
            cost: 0,
            damage: 15,
            effects: { self: { superpoder: 15 } }
        },
        {
            name: { es: 'Ráfaga Rápida', eu: 'Jaurtiketa Azkarra' },
            description: { es: 'Dispara una ráfaga potente que causa 25 de daño.', eu: '25eko kaltea eragiten duen jaurtiketa indartsua.' },
            cost: 2,
            damage: 25,
            effects: { self: { superpoder: 10 } }
        },
        {
            name: { es: 'Paso Atrás', eu: 'Atzerapauso' },
            description: { es: 'Aumenta tu Poder defensivo.', eu: 'Zure defentsa-Indarra handitzen du.' },
            cost: 1,
            damage: 0,
            effects: { self: { poder: 5 } }
        }
    ],

    // Habilidad Súper
    superAbility: {
        name: { es: 'Súper Shell', eu: 'Super Shell' },
        description: { es: 'Un disparo devastador que causa 40 de daño y reduce el Poder del enemigo.', eu: '40ko kaltea eragiten duen eta etsaiaren Indarra murrizten duen jaurtiketa suntsitzailea.'},
        cost: 100,
        damage: 40,
        effects: { enemy: { poder: -10 } }
    }
});
