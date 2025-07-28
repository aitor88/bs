window.gameCharacters.push({
    id: 'cordelius',
    name: 'Cordelius',
    img: 'avatares/cordelius.png',

    // Este Brawler no tiene 'playerStats' porque de momento solo es un enemigo.
    
    // Estadísticas cuando CORDELIUS es el ENEMIGO
    cpuStats: {
        vida: 95,
        poder: 20,
    },

    // Lista de movimientos que usará la CPU cuando te enfrentes a él
    moves: [
        {
            name: { es: 'Disparo de Seta', eu: 'Perretxiko Tiroa' },
            damage: 16,
            cost: 0,
            effects: {}
        },
        {
            name: { es: 'Salto Venenoso', eu: 'Jauzi Pozoitsua' },
            damage: 20,
            cost: 0, // El coste de recursos es más para el jugador, lo simplificamos para la CPU
            effects: {}
        }
    ],

    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Reino de las Sombras', eu: 'Itzalen Erresuma' },
        damage: 25,
        effects: { enemy: { poder: -5 } } // El "enemy" desde el punto de vista de Cordelius, es decir, el jugador.
    }
});
