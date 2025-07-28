window.gameCharacters.push({
    id: 'poco',
    name: 'Poco',
    img: 'avatares/poco.png',
    
    // Estadísticas cuando el JUGADOR usa a Poco
    playerStats: {
        vida: 110,
        poder: 10,
        recursos: 8,
    },

    // Estadísticas cuando POCO es el ENEMIGO
    cpuStats: {
        vida: 110,
        poder: 10,
    },

    // Lista de movimientos disponibles en combate
    moves: [
        {
            name: { es: 'Acorde Mayor', eu: 'Akorde Nagusia' },
            description: { es: 'Ataque básico. Causa 10 de daño.', eu: 'Oinarrizko erasoa. 10eko kaltea.' },
            cost: 0,
            damage: 10,
            effects: { self: { superpoder: 15 } } // Efecto sobre uno mismo
        },
        {
            name: { es: 'Vibrato Sanador', eu: 'Bibrato Sendatzailea' },
            description: { es: 'No hace daño, pero recuperas 20 de Vida.', eu: 'Ez du kalterik egiten, baina 20 Bizitza berreskuratzen duzu.' },
            cost: 2,
            damage: 0,
            effects: { self: { vida: 20, superpoder: 10 } }
        },
        {
            name: { es: 'Balada Triste', eu: 'Balada Tristea' },
            description: { es: 'Reduce el Poder del enemigo.', eu: 'Etsaiaren Indarra murrizten du.' },
            cost: 3,
            damage: 5,
            effects: { enemy: { poder: -5 } } // Efecto sobre el enemigo
        }
    ],

    // Habilidad Súper
    superAbility: {
        name: { es: 'Da Capo!', eu: 'Da Capo!' },
        description: { es: '¡Una potente ola de sonido que te cura 50 de Vida!', eu: '50 Bizitza sendatzen dizun soinu-uhin indartsua!' },
        cost: 100, // Cuesta el 100% de la barra de Súper
        damage: 0,
        effects: { self: { vida: 50 } }
    }
});
