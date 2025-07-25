// Contenido para frank_data.js

window.gameCharacters.push({
    name: 'Frank',
    img: 'avatares/frank.png', // Asegúrate de tener una imagen frank.png en la carpeta avatares
    dilemmas: [
        {
            description: '¡Están todos juntos! Puedo usar mi Súper para <span class="text-yellow-300">aturdirlos a todos</span>, pero me quedaré quieto un momento.',
            options: [
                { text: '¡MACHACA!', narrative: '¡El martillazo aturde a todos los enemigos! Ganas un poder inmenso, pero te llevas daño mientras estás parado.', effects: { poder: 30, vida: -15, superpoder: -100 } },
                { text: 'Espera el momento', narrative: 'Decides no arriesgarte. Esperas una oportunidad más segura.', effects: { vida: 5 } }
            ]
        },
        {
            description: '¡Viene un ataque muy fuerte! Puedo <span class="text-sky-400">absorber todo el daño</span> con mi cuerpo para proteger al equipo.',
            options: [
                { text: '¡Aguanta el golpe!', narrative: 'Recibes todo el daño, pero el equipo está a salvo. Cargas mucho Súper por tu valentía.', effects: { vida: -35, superpoder: 40 } },
                { text: '¡Todos a cubierto!', narrative: 'Gritas al equipo que se cubra. Todos reciben algo de daño, pero es más repartido.', effects: { vida: -15 } }
            ]
        },
        {
            description: 'Si gasto <span class="text-sky-400">2 Recursos</span> en unos <span class="text-green-400">auriculares con música</span>, puedo ignorar los aturdimientos enemigos.',
            options: [
                { text: '¡Música a tope!', cost: 2, narrative: 'Con la música no te enteras de nada. Ganas mucho poder porque no pueden pararte.', effects: { poder: 25 } },
                { text: 'Ahorra recursos', narrative: 'Prefieres guardar los recursos y arriesgarte a que te aturdan.', effects: { } }
            ]
        },
        {
            description: 'Hay un muro débil. Puedo <span class="text-red-500">romperlo</span> para abrir un nuevo camino para el equipo.',
            options: [
                { text: '¡Rompe el muro!', narrative: 'El muro cae y sorprendéis a los enemigos por el flanco.', effects: { poder: 20, vida: -5 } },
                { text: 'Busca la puerta', narrative: 'Prefieres no hacer ruido y buscar un camino más seguro.', effects: { vida: 5 } }
            ]
        }
    ]
});
