window.gameCharacters.push({
    id: 'el_primo',
    name: 'El Primo',
    img: 'avatares/el_primo.png',
    
    // Estadísticas cuando el JUGADOR usa a El Primo
    playerStats: {
        vida: 150,
        poder: 15,
        recursos: 4,
    },
    
    // Estadísticas cuando EL PRIMO es el ENEMIGO
    cpuStats: {
        vida: 150,
        poder: 15,
    }, // <-- Coma revisada
    
    // Lista de movimientos disponibles en combate
    moves: [
        {
            name: { es: 'Puños de Furia', eu: 'Amorruaren Ukabilak' },
            description: { es: 'Golpea sin coste. Carga mucho el Súper.', eu: 'Kosturik gabe kolpatzen du. Superra asko kargatzen du.' },
            cost: 0,
            damage: 12,
            effects: { self: { superpoder: 20 } }
        },
        {
            name: { es: 'Plancha Corporal', eu: 'Gorputz-plantxa' },
            description: { es: 'Un golpe más fuerte que se acerca al rival.', eu: 'Aurkariari hurbiltzen zaion kolpe indartsuagoa.' },
            cost: 2,
            damage: 20,
            effects: { self: { superpoder: 10 } }
        },
        {
            name: { es: 'Flexionar Músculos', eu: 'Giharrak tenkatu' },
            description: { es: 'Aumenta tu Poder para el próximo turno.', eu: 'Zure Indarra handitzen du hurrengo txandarako.' },
            cost: 1,
            damage: 0,
            effects: { self: { poder: 5 } }
        }
    ], // <-- Coma revisada

    // Habilidad Súper
    superAbility: {
        name: { es: 'Salto del Tigre', eu: 'Tigrearen Jauzia' },
        description: { es: '¡Un salto devastador que causa 50 de daño!', eu: '50eko kaltea eragiten duen jauzi suntsitzailea!' },
        cost: 100,
        damage: 50,
        effects: { }
    }
});
