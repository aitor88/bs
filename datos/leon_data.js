window.gameCharacters.push({
    id: 'leon',
    name: 'Leon',
    img: 'avatares/leon.png',
    
    // Leon solo aparecerá como enemigo por ahora.
    // No tiene 'playerStats'.

    // Estadísticas cuando LEON es el ENEMIGO
    cpuStats: {
        vida: 90,  // Vida baja, es un asesino
        poder: 22, // Poder alto
    },

    // Lista de movimientos que usará la CPU
    moves: [
        {
            name: { es: 'Lanzamiento de Shuriken', eu: 'Shuriken Jaurtiketa' },
            description: { es: 'Un ataque rápido y preciso.', eu: 'Eraso azkar eta zehatza.' },
            damage: 18,
            cost: 0,
            effects: {}
        },
        {
            name: { es: 'Bomba de Humo (Táctico)', eu: 'Ke-Bonba (Taktikoa)' },
            description: { es: 'Leon se reposiciona, aumentando su Poder.', eu: 'Leon birkokatzen da, bere Indarra handituz.' },
            damage: 0,
            cost: 0,
            effects: { self: { poder: 10 } }
        }
    ],
    
    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Invisibilidad', eu: 'Ikusezintasuna' },
        description: { es: 'Leon desaparece y prepara un ataque sorpresa devastador.', eu: 'Leon desagertu eta ezusteko eraso suntsitzaile bat prestatzen du.'},
        damage: 30, // Representa el ataque sorpresa al reaparecer
        effects: { self: { poder: 15 } }
    }
});
