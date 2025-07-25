// Contenido para frank_data.js

window.gameCharacters.push({
    name: 'Frank',
    img: 'avatares/frank.png',
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
        },
        {
            description: 'Puedo <span class="text-orange-500">golpear el suelo</span> para crear una onda de choque que aleje a los enemigos.',
            options: [
                { text: '¡Onda de choque!', narrative: 'El golpe crea una onda que empuja a los enemigos. Ganas un respiro.', effects: { vida: 10, poder: 5 } },
                { text: 'Aguanta la posición', narrative: 'Prefieres aguantar el tipo y no gastar energías.', effects: { } }
            ]
        },
        {
            description: 'He encontrado un <span class="text-sky-400">bidón de energía</span> (<span class="text-sky-400">+2 Recursos</span>). ¡Me lo bebo!',
            options: [
                { text: '¡Bébetelo!', narrative: '¡Sabe fatal! Ganas recursos pero te deja un poco mareado y pierdes vida.', effects: { recursos: 2, vida: -10 } },
                { text: 'Guárdalo para después', narrative: 'Decides guardar el bidón para cuando haga falta de verdad.', effects: { recursos: 2 } }
            ]
        },
        {
            description: 'Si me quedo quieto un momento, puedo <span class="text-green-400">regenerar vida</span>.',
            options: [
                { text: 'Recupera vida', narrative: 'Te tomas un respiro y recuperas salud, pero pierdes la iniciativa.', effects: { vida: 20, poder: -5 } },
                { text: '¡No hay tiempo!', narrative: 'La batalla es demasiado intensa para pararse a descansar.', effects: { poder: 10 } }
            ]
        },
        {
            description: 'Puedo <span class="text-red-500">atraer a los enemigos</span> hacia mí para que el resto del equipo pueda atacarles por la espalda.',
            options: [
                { text: '¡Venid a por mí!', narrative: 'Todos los enemigos te atacan a ti. Recibes mucho daño, pero tu equipo gana una gran ventaja.', effects: { vida: -30, poder: 20 } },
                { text: 'Mantened la formación', narrative: 'Prefieres una táctica más ordenada y segura para todos.', effects: { } }
            ]
        },
        {
            description: '¡Mi martillo está un poco suelto! Puedo gastar <span class="text-sky-400">1 Recurso</span> para <span class="text-yellow-300">ajustarlo</span>.',
            options: [
                { text: '¡Ajústalo!', cost: 1, narrative: 'Ahora sí. Con el martillo bien ajustado, tu poder aumenta.', effects: { poder: 15 } },
                { text: 'No importa', narrative: 'No hay tiempo para reparaciones. Sigues luchando como puedes.', effects: { poder: -5 } }
            ]
        },
        {
            description: '¡Un enemigo se escapa! Puedo <span class="text-orange-500">lanzarle mi martillo</span> para detenerlo.',
            options: [
                { text: '¡Lanza el martillo!', narrative: '¡El martillo vuela y acierta! Pero ahora estás desarmado y pierdes poder.', effects: { superpoder: 20, poder: -15 } },
                { text: 'Déjalo ir', narrative: 'No puedes arriesgarte a quedarte sin tu arma principal.', effects: { } }
            ]
        }
    ]
});
