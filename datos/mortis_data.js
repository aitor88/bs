window.gameCharacters.push({
    id: 'mortis',
    name: 'Mortis',
    img: 'avatares/mortis.png',

    // Mortis solo aparecerá como enemigo por ahora.
    // No tiene 'playerStats'.

    // Estadísticas cuando MORTIS es el ENEMIGO
    cpuStats: {
        vida: 100, // Vida moderada
        poder: 19, // Buen poder de asesino
    },

    // Lista de movimientos que usará la CPU
    moves: [
        {
            name: { es: 'Palazo Rápido', eu: 'Palakada Azkarra' },
            description: { es: 'Un golpe veloz con su pala.', eu: 'Bere palarekin kolpe azkar bat.'},
            damage: 17,
            cost: 0,
            effects: {}
        },
        {
            name: { es: 'Ataque Vampírico', eu: 'Eraso Banpirikoa' },
            description: { es: 'Daña al rival y recupera un poco de vida.', eu: 'Aurkaria kaltetu eta bizitza pixka bat berreskuratzen du.'},
            damage: 10,
            cost: 0,
            effects: { self: { vida: 10 } }
        }
    ],

    // Habilidad Súper del enemigo
    superAbility: {
        name: { es: 'Enjambre Vital', eu: 'Bizi-Multzoa' },
        description: { es: 'Lanza una nube de murciélagos que dañan y le curan.', eu: 'Kaltetzen eta sendatzen duten saguzar-hodei bat jaurtitzen du.'},
        damage: 20,
        effects: { self: { vida: 20 } }
    }
});
