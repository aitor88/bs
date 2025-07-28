window.gameCharacters.push({
    id: 'poco',
    name: 'Poco',
    img: 'avatares/poco.png',
    
    // Poco solo aparecerá como enemigo por ahora.
    // No tiene 'playerStats'.

    // Estadísticas cuando POCO es el ENEMIGO
    cpuStats: {
        vida: 110,
        poder: 10,
    }, // <-- Coma revisada

    // Lista de movimientos que usará la CPU
    moves: [
        {
            name: { es: 'Acorde Mayor', eu: 'Akorde Nagusia' },
            description: { es: 'Ataque básico que daña al rival.', eu: 'Aurkaria kaltetzen duen oinarrizko erasoa.' },
            damage: 10,
            cost: 0,
            effects: { self: { superpoder: 15 } }
        },
        {
            name: { es: 'Vibrato Sanador', eu: 'Bibrato Sendatzailea' },
            description: { es: 'No hace daño, pero recupera 20 de Vida.', eu: 'Ez du kalterik egiten, baina 20 Bizitza berreskuratzen du.' },
            damage: 0,
            cost: 0,
            effects: { self: { vida: 20 } }
        }
    ], // <-- Coma revisada

    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Da Capo!', eu: 'Da Capo!' },
        description: { es: '¡Una potente ola de sonido que le cura 50 de Vida!', eu: '50 Bizitza sendatzen dion soinu-uhin indartsua!' },
        damage: 0,
        effects: { self: { vida: 50 } }
    }
});
