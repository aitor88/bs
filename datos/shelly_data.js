// Contenido para shelly_data.js

window.gameCharacters.push({
    name: 'Shelly',
    img: 'avatares/shelly.png',
    dilemmas: [
        {
            description: '¡Veo una caja de poder! Puedo gastar <span class="text-sky-400">1 Recurso</span> en cartuchos especiales para abrirla desde lejos.',
            options: [
                { text: '¡Gasta el recurso!', cost: 1, narrative: 'Los cartuchos especiales revientan la caja. ¡El poder es tuyo!', effects: { poder: 25 } },
                { text: 'Ahorra munición', narrative: 'Prefieres guardar los recursos para algo más importante.', effects: { superpoder: 10 } }
            ]
        },
        {
            description: '¡Mi Súper está listo! Puedo usarlo para <span class="text-red-500">destruir esa cobertura</span> enemiga y dejarlos al descubierto.',
            options: [
                { text: '¡Usa el Súper!', narrative: '¡El Súper arrasa con todo! Los enemigos están vulnerables.', effects: { poder: 15, superpoder: -100 } },
                { text: 'Guárdalo', narrative: 'Decides esperar a un mejor momento. Te preparas para defender.', effects: { poder: 5 } }
            ]
        },
        {
            description: 'Oigo enemigos al otro lado de la esquina. Puedo preparar una <span class="text-yellow-300">emboscada</span>.',
            options: [
                { text: 'Prepara la trampa', narrative: '¡Sorpresa! La emboscada funciona y ganas ventaja.', effects: { poder: 20, vida: 5 } },
                { text: 'Busca otra ruta', narrative: 'Evitas el riesgo y buscas un camino más seguro.', effects: { vida: 10 } }
            ]
        },
        {
            description: 'Un enemigo <span class="text-red-500">tanque</span> avanza. Mi escopeta le hace mucho daño de cerca.',
            options: [
                { text: '¡Lucha de cerca!', narrative: 'Te mueves muy rápido cerca del tanque y lo destrozas. Cargas Súper pero recibes un golpe.', effects: { superpoder: 30, vida: -20 } },
                { text: 'Disparad desde lejos', narrative: 'Todo el equipo dispara desde lejos, derribando al tanque sin peligro.', effects: { poder: 10 } }
            ]
        },
        {
            description: '¡Están atacando a un compañero! Puedo gastar <span class="text-sky-400">1 Recurso</span> en una <span class="text-green-400">granada de humo</span> para cubrirlo.',
            options: [
                { text: '¡Lanza el humo!', cost: 1, narrative: 'El humo cubre a tu compañero y podéis reposicionaros.', effects: { vida: 15 } },
                { text: '¡Fuego de cobertura!', narrative: 'Disparas para que los enemigos se escondan, pero te expones al peligro.', effects: { poder: 10, vida: -15 } }
            ]
        },
        {
            description: '¡Necesito recargar! ¿Me cubrís o aprovecho para disparar un último cartucho?',
            options: [
                { text: '¡Un último disparo!', narrative: 'El último disparo acierta, pero te deja vulnerable mientras recargas.', effects: { poder: 15, vida: -10 } },
                { text: '¡Cubridme!', narrative: 'El equipo te cubre. Recargas sin problemas y recuperas algo de vida.', effects: { vida: 10 } }
            ]
        },
        {
            description: 'Este <span class="text-yellow-300">pasillo estrecho</span> es perfecto para mi escopeta, pero muy peligroso.',
            options: [
                { text: 'Avanzar por el pasillo', narrative: 'El pasillo es una trampa mortal para ellos, pero tú también recibes daño.', effects: { poder: 25, vida: -20 } },
                { text: 'Busca otra posición', narrative: 'Decides no arriesgar y buscas un lugar más seguro.', effects: { poder: -5, vida: 5 } }
            ]
        },
        {
            description: 'Veo un botiquín (<span class="text-sky-400">+1 Recurso</span>), pero está en una zona abierta.',
            options: [
                { text: '¡Corre a por él!', narrative: 'Corres bajo el fuego y consigues el botiquín, pero te llevas un par de balas.', effects: { recursos: 1, vida: -20 } },
                { text: 'No vale la pena', narrative: 'Decides que el riesgo es demasiado alto.', effects: { superpoder: 5 } }
            ]
        },
        {
            description: 'Podemos <span class="text-sky-400">gastar 2 Recursos</span> en mejorar mi escopeta para el resto de la partida.',
            options: [
                { text: '¡Mejora el arma!', cost: 2, narrative: '¡Tu escopeta ahora es una bestia! Tu poder base aumenta.', effects: { poder: 20 } },
                { text: 'Ahorra los recursos', narrative: 'Prefieres guardar los recursos para curaciones o granadas.', effects: { } }
            ]
        },
        {
            description: '¡Son demasiados! ¿Nos retiramos para pensar un plan o luchamos ahora?',
            options: [
                { text: '¡No nos rendimos!', narrative: 'Lucháis con todo. Es muy duro, pero si aguantáis, cargáis mucho Súper.', effects: { vida: -30, poder: -10, superpoder: 50 } },
                { text: '¡Retirada!', narrative: 'Os retiráis a un lugar seguro para recuperar vida.', effects: { vida: 10, poder: -5 } }
            ]
        }
    ]
});
