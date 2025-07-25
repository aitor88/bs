// Contenido para cordelius_data.js

// Añadimos los datos de Cordelius al array global de personajes
window.gameCharacters.push({
    name: 'Cordelius',
    img: 'avatares/cordelius.png', // Asegúrate de tener una imagen cordelius.png en la carpeta avatares
    dilemmas: [
        {
            description: 'He encontrado unas <span class="text-purple-400">setas venenosas</span>. Puedo usarlas en mis armas para hacer más daño.',
            options: [
                { text: '¡Usa el veneno!', narrative: 'Las armas ahora son venenosas y tu ataque aumenta, pero manejarlas es peligroso.', effects: { ataque: 25, vida: -10 } },
                { text: 'No, es muy arriesgado', narrative: 'Decides no usar las setas. Mejoras tu defensa por si acaso.', effects: { defensa: 10 } }
            ]
        },
        {
            description: '¡Mi Súper está listo! Puedo enviar al enemigo más fuerte al <span class="text-gray-400">Reino de las Sombras</span> para luchar contra él a solas.',
            options: [
                { text: '¡Al Reino de las Sombras!', narrative: 'Aíslas al enemigo más peligroso, dándole un respiro al equipo. Tu defensa sube mucho.', effects: { defensa: 30, superpoder: -100 } },
                { text: '¡Luchad todos juntos!', narrative: 'Prefieres que el equipo se enfrente a la amenaza unido.', effects: { ataque: 10, vida: -10 } }
            ]
        },
        {
            description: 'Hay un camino lleno de <span class="text-green-400">esporas</span>. Puedo usarlas para curarnos un poco.',
            options: [
                { text: 'Usa las esporas', narrative: 'Las esporas tienen un efecto curativo que recupera algo de vida al equipo.', effects: { vida: 20 } },
                { text: 'Evita esa zona', narrative: 'No te fías de las esporas y prefieres mantener una distancia segura.', effects: { defensa: 10 } }
            ]
        },
        {
            description: 'Puedo <span class="text-yellow-300">saltar ese muro</span> para pillar a los enemigos por sorpresa.',
            options: [
                { text: '¡Salta!', narrative: 'El ataque sorpresa funciona a la perfección. Ganas mucho ataque.', effects: { ataque: 20, defensa: -5 } },
                { text: 'Mantén la posición', narrative: 'Prefieres no separarte del grupo y mantener la defensa.', effects: { defensa: 15 } }
            ]
        }
    ]
});
