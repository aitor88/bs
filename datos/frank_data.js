window.gameCharacters.push({
    id: 'frank',
    name: 'Frank',
    img: 'avatares/frank.png',
    
    // Frank solo aparecerá como enemigo por ahora.
    // No tiene 'playerStats'.
    
    // Estadísticas cuando FRANK es el ENEMIGO
    cpuStats: {
        vida: 160, // Vida muy alta, es un tanque
        poder: 14,
    },

    // Lista de movimientos que usará la CPU
    moves: [
        {
            name: { es: 'Martillazo', eu: 'Mailukada' },
            description: { es: 'Un golpe fuerte y lento.', eu: 'Kolpe indartsu eta motela.' },
            damage: 15,
            cost: 0,
            effects: {}
        },
        {
            name: { es: 'Aguantar el Golpe', eu: 'Kolpeari Eutsi' },
            description: { es: 'Frank recupera un poco de vida.', eu: 'Frankek bizitza pixka bat berreskuratzen du.' },
            damage: 0,
            cost: 0,
            effects: { self: { vida: 15 } }
        }
    ],
    
    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Machaque Estelar', eu: 'Izar Txikizioa' },
        description: { es: 'Un golpe devastador que aturde.', eu: 'Zorabiatzen duen kolpe suntsitzailea.'},
        damage: 35,
        effects: { } // El efecto de aturdir se manejaría en la lógica de combate
    }
});
