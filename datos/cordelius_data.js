window.gameCharacters.push({
    id: 'cordelius',
    name: 'Cordelius',
    img: 'avatares/cordelius.png',

    // Cordelius solo aparecerá como enemigo por ahora.
    // No tiene 'playerStats'.

    // Estadísticas cuando CORDELIUS es el ENEMIGO
    cpuStats: {
        vida: 95,
        poder: 20,
    }, // <-- Coma revisada

    // Lista de movimientos que usará la CPU
    moves: [
        {
            name: { es: 'Disparo de Seta', eu: 'Perretxiko Tiroa' },
            description: { es: 'Un ataque básico y rápido.', eu: 'Oinarrizko eraso azkar bat.'},
            damage: 16,
            cost: 0,
            effects: {}
        },
        {
            name: { es: 'Salto Venenoso', eu: 'Jauzi Pozoitsua' },
            description: { es: 'Un salto que inflige más daño.', eu: 'Kalte gehiago eragiten duen jauzia.'},
            damage: 20,
            cost: 0,
            effects: {}
        }
    ], // <-- Coma revisada

    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Reino de las Sombras', eu: 'Itzalen Erresuma' },
        description: { es: 'Un potente ataque que debilita al jugador.', eu: 'Jokalaria ahultzen duen eraso indartsua.'},
        damage: 25,
        effects: { enemy: { poder: -5 } }
    }
});
