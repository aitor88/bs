// Contenido para spike_data.js

// Añadimos los datos de Spike al array global de personajes
window.gameCharacters.push({
    name: 'Spike',
    img: 'avatares/spike.png', // Asegúrate de tener una imagen spike.png en la carpeta avatares
    dilemmas: [
        {
            description: 'Hay un grupo de enemigos muy juntos. Puedo lanzar mi Súper para <span class="text-green-400">ralentizarlos a todos</span> en un campo de espinas.',
            options: [
                { text: '¡Crea el campo de espinas!', narrative: 'El campo de espinas atrapa a los enemigos, dándote una gran ventaja de poder.', effects: { poder: 25, superpoder: -100 } },
                { text: 'Guarda el Súper', narrative: 'Prefieres guardar el Súper para una emergencia y te preparas para defender.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Un enemigo se esconde detrás de una pared. Puedo gastar <span class="text-sky-400">1 Recurso</span> para lanzar un <span class="text-yellow-300">cactus con efecto</span> y alcanzarle.',
            options: [
                { text: '¡Tiro con efecto!', cost: 1, narrative: '¡El cactus hace una curva perfecta y golpea al enemigo! Ganas mucho poder.', effects: { poder: 20 } },
                { text: 'Busca otro ángulo', narrative: 'Prefieres no gastar recursos y buscas una forma más tradicional de atacar.', effects: { poder: 5 } }
            ]
        },
        {
            description: 'Estoy herido. Si uso mi Súper sobre mí mismo, las espinas me <span class="text-green-400">curarán</span> poco a poco.',
            options: [
                { text: '¡Cúrate con el Súper!', narrative: 'Usas el poder de las espinas para curarte. Gastas el Súper pero recuperas mucha vida.', effects: { vida: 30, superpoder: -100 } },
                { text: 'Aguanta el dolor', narrative: 'Prefieres guardar el Súper para atacar. El dolor te hace más fuerte.', effects: { vida: -5, superpoder: 15 } }
            ]
        },
        {
            description: 'Los enemigos no nos han visto. Puedo <span class="text-gray-400">acercarme en silencio</span> y lanzar una granada de cactus en medio de ellos.',
            options: [
                { text: '¡Ataque silencioso!', narrative: 'El ataque por sorpresa es devastador, pero te expones mucho al contraataque.', effects: { poder: 25, vida: -15 } },
                { text: 'Ataca desde aquí', narrative: 'Es más seguro atacar desde lejos, aunque el impacto es menor.', effects: { poder: 10 } }
            ]
        }
    ]
});
