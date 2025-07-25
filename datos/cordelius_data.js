// Contenido para cordelius_data.js

window.gameCharacters.push({
    name: 'Cordelius',
    img: 'avatares/cordelius.png',
    dilemmas: [
        {
            description: 'He encontrado unas <span class="text-purple-400">setas venenosas</span>. Puedo usarlas en mis armas para hacer más daño.',
            options: [
                { text: '¡Usa el veneno!', narrative: 'Las armas ahora son venenosas y tu poder aumenta, pero manejarlas es peligroso.', effects: { poder: 25, vida: -10 } },
                { text: 'No, es muy arriesgado', narrative: 'Decides no usar las setas. Mejoras tu poder defensivo por si acaso.', effects: { poder: 5, vida: 5 } }
            ]
        },
        {
            description: '¡Mi Súper está listo! Puedo enviar al enemigo más fuerte al <span class="text-gray-400">Reino de las Sombras</span>.',
            options: [
                { text: '¡Al Reino de las Sombras!', narrative: 'Aíslas al enemigo más peligroso, dándole un respiro al equipo. Vuestro poder sube mucho.', effects: { poder: 20, superpoder: -100 } },
                { text: '¡Luchad todos juntos!', narrative: 'Prefieres que el equipo se enfrente a la amenaza unido.', effects: { poder: 5, vida: -10 } }
            ]
        },
        {
            description: 'Hay un camino lleno de <span class="text-green-400">esporas</span>. Puedo usarlas para curarnos un poco.',
            options: [
                { text: 'Usa las esporas', narrative: 'Las esporas tienen un efecto curativo que recupera algo de vida al equipo.', effects: { vida: 20 } },
                { text: 'Evita esa zona', narrative: 'No te fías de las esporas y prefieres mantener una distancia segura.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Puedo <span class="text-yellow-300">saltar ese muro</span> para pillar a los enemigos por sorpresa.',
            options: [
                { text: '¡Salta!', narrative: 'El ataque sorpresa funciona a la perfección. Ganas mucho poder.', effects: { poder: 20, vida: -5 } },
                { text: 'Mantén la posición', narrative: 'Prefieres no separarte del grupo y mantener la defensa.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Si gasto <span class="text-sky-400">1 Recurso</span>, puedo plantar un <span class="text-purple-400">campo de setas</span> que ralentice a los enemigos.',
            options: [
                { text: '¡Planta las setas!', cost: 1, narrative: 'Los enemigos se atascan en las setas. ¡Es el momento de atacar!', effects: { poder: 20 } },
                { text: 'Ahorra el recurso', narrative: 'Prefieres guardar el recurso para otra ocasión.', effects: { } }
            ]
        },
        {
            description: 'Puedo entrar al <span class="text-gray-400">Reino de las Sombras</span> para recuperar <span class="text-sky-400">Recursos</span>, pero es peligroso.',
            options: [
                { text: 'Entra en el Reino', narrative: 'Encuentras recursos valiosos en la otra dimensión, pero vuelves algo herido.', effects: { recursos: 2, vida: -15 } },
                { text: 'Quédate aquí', narrative: 'No te atreves a cruzar el portal. Te preparas para el combate.', effects: { poder: 5 } }
            ]
        },
        {
            description: 'Veo un enemigo curandero. Puedo <span class="text-yellow-300">silenciarlo</span> con una seta especial (<span class="text-sky-400">1 Recurso</span>).',
            options: [
                { text: '¡Siléncialo!', cost: 1, narrative: 'La seta impacta y el curandero no puede usar sus habilidades. ¡Gran ventaja!', effects: { poder: 15 } },
                { text: 'Acaba con él rápido', narrative: 'Intentas derrotarlo con fuerza bruta antes de que pueda curar a sus aliados.', effects: { poder: 5, vida: -10 } }
            ]
        },
        {
            description: 'Mis setas me dan un <span class="text-orange-500">extra de poder</span>, pero me dejan un poco mareado.',
            options: [
                { text: 'Come la seta', narrative: '¡Sientes el poder! Pero el mareo te hace más vulnerable.', effects: { poder: 25, vida: -10 } },
                { text: 'No, gracias', narrative: 'Prefieres mantener la cabeza despejada.', effects: { } }
            ]
        },
        {
            description: 'Puedo usar el poder del Reino de las Sombras para <span class="text-gray-400">teletransportarme</span> una distancia corta.',
            options: [
                { text: '¡Teletranspórtate!', narrative: 'Apareces en una posición ventajosa, listo para atacar.', effects: { poder: 15, superpoder: 10 } },
                { text: 'Ve a pie', narrative: 'Prefieres un avance más lento pero seguro.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Hay un grupo de enemigos débiles. Podría usar mi <span class="text-purple-400">ataque de setas</span> para acabar con ellos y cargar Súper.',
            options: [
                { text: '¡Lluvia de setas!', narrative: 'Las setas acaban con los enemigos débiles y cargas mucho Superpoder.', effects: { superpoder: 35, vida: -5 } },
                { text: 'Ignóralos', narrative: 'No son una amenaza. Te centras en los enemigos más grandes.', effects: { } }
            ]
        }
    ]
});
