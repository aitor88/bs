window.gameCharacters.push({
    id: 'spike',
    name: 'Spike',
    img: 'avatares/spike.png',

    // Spike solo aparecerá como enemigo por ahora.
    // No tiene 'playerStats'.

    // Estadísticas cuando SPIKE es el ENEMIGO
    cpuStats: {
        vida: 80, // Vida frágil
        poder: 25, // Mucho daño
    }, // <-- Coma revisada

    // Lista de movimientos que usará la CPU
    moves: [
        {
            name: { es: 'Granada de Espinas', eu: 'Arantza-Granada' },
            description: { es: 'Un ataque con área de efecto.', eu: 'Eremu-efektuko erasoa.' },
            damage: 20,
            cost: 0,
            effects: {}
        },
        {
            name: { es: 'Tiro Curvo', eu: 'Tiro Kurbatua' },
            description: { es: 'Un ataque difícil de esquivar.', eu: 'Saihesteko zaila den erasoa.' },
            damage: 25,
            cost: 0,
            effects: {}
        }
    ], // <-- Coma revisada

    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Campo de Espinas', eu: 'Arantza-Zelaia' },
        description: { es: 'Crea un área que daña y reduce el Poder del jugador.', eu: 'Jokalaria kaltetu eta Indarra murrizten dion eremu bat sortzen du.' },
        damage: 15,
        effects: { enemy: { poder: -10 } }
    }
});
