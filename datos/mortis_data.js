// Contenido para mortis_data.js

window.gameCharacters.push({
    name: 'Mortis',
    img: 'avatares/mortis.png',
    dilemmas: [
        {
            description: 'Veo a un enemigo con poca vida. Puedo usar mis <span class="text-purple-400">dashes</span> para acabar con él, pero me meteré en medio del peligro.',
            options: [
                { text: '¡A por él!', narrative: 'Te lanzas a por el enemigo y lo eliminas. Sales herido, pero cargas Súper.', effects: { poder: 15, superpoder: 25, vida: -20 } },
                { text: 'Déjalo escapar', narrative: 'Decides que es demasiado arriesgado y mantienes una posición segura.', effects: { vida: 5 } }
            ]
        },
        {
            description: '¡Estoy rodeado! Puedo usar mi Súper de <span class="text-red-500">murciélagos</span> para dañarlos a todos y <span class="text-green-400">curarme</span>.',
            options: [
                { text: '¡Usa el Súper!', narrative: 'Los murciélagos te curan mientras dañan a los enemigos. ¡Una jugada espectacular!', effects: { vida: 25, poder: 10, superpoder: -100 } },
                { text: 'Intenta esquivar', narrative: 'Prefieres guardar el Súper e intentar esquivar los ataques.', effects: { vida: -15, superpoder: 10 } }
            ]
        },
        {
            description: 'Hay un <span class="text-sky-400">botiquín</span> (<span class="text-sky-400">+1 Recurso</span>) lejos de aquí. Puedo ir a por él rápidamente con mis dashes.',
            options: [
                { text: '¡Corre a por él!', narrative: 'Vas y vuelves en un instante. Consigues el recurso, pero te alejas de la batalla.', effects: { recursos: 1, poder: -5 } },
                { text: 'Quédate con el equipo', narrative: 'Decides que es mejor no separarse del grupo.', effects: { } }
            ]
        },
        {
            description: 'Puedo gastar <span class="text-sky-400">1 Recurso</span> para <span class="text-yellow-300">afilar mi pala</span>. Mis próximos ataques serán más rápidos y letales.',
            options: [
                { text: '¡Afila la pala!', cost: 1, narrative: 'Tu pala ahora brilla. Sientes que tu poder ha aumentado.', effects: { poder: 20 } },
                { text: 'No gastes recursos', narrative: 'Prefieres luchar con la pala como está.', effects: { } }
            ]
        },
        {
            description: 'Hay un enemigo lanzador en una posición elevada. Puedo <span class="text-purple-400">lanzarme</span> hacia él.',
            options: [
                { text: '¡Al ataque!', narrative: 'Te lanzas hacia el enemigo y lo eliminas, pero te quedas en una mala posición.', effects: { poder: 15, vida: -15 } },
                { text: 'Busca otra forma', narrative: 'No quieres arriesgarte a quedar aislado.', effects: { } }
            ]
        },
        {
            description: 'Puedo hacer un <span class="text-yellow-300">ataque en zig-zag</span> para confundir a los enemigos.',
            options: [
                { text: '¡Zig-zag!', narrative: 'Tu movimiento es impredecible. Ganas poder, pero el esfuerzo te cansa.', effects: { poder: 15, vida: -5 } },
                { text: 'Ataque directo', narrative: 'Prefieres un ataque más simple y directo.', effects: { poder: 5 } }
            ]
        },
        {
            description: 'Veo un grupo de enemigos huyendo. ¡Puedo <span class="text-red-500">perseguirlos</span>!',
            options: [
                { text: '¡Que no escapen!', narrative: 'Los persigues y acabas con ellos. Cargas mucho Súper.', effects: { superpoder: 30, vida: -10 } },
                { text: 'Déjalos ir', narrative: 'Podría ser una trampa. Es mejor asegurar la zona.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Si uso mis dashes para <span class="text-blue-400">esquivar</span> el próximo ataque, cargaré mi Súper.',
            options: [
                { text: '¡Esquiva!', narrative: '¡Esquiva perfecta! Evitas el daño y cargas tu Superpoder.', effects: { superpoder: 25 } },
                { text: '¡Aguanta!', narrative: 'Prefieres recibir el golpe y guardar energías.', effects: { vida: -15, superpoder: 10 } }
            ]
        },
        {
            description: 'Puedo gastar <span class="text-sky-400">1 Recurso</span> en una <span class="text-purple-400">poción de velocidad</span>.',
            options: [
                { text: '¡Más rápido!', cost: 1, narrative: 'La poción te hace increíblemente rápido. Tu poder aumenta.', effects: { poder: 20 } },
                { text: 'Ahorra', narrative: 'Prefieres guardar el recurso.', effects: { } }
            ]
        },
        {
            description: 'El cementerio cercano me da <span class="text-gray-400">poder</span>. ¿Nos acercamos?',
            options: [
                { text: 'Vamos al cementerio', narrative: 'Te sientes como en casa. Tu poder y vida aumentan.', effects: { poder: 10, vida: 10 } },
                { text: 'Da mala espina', narrative: 'Prefieres no acercarte a ese lugar tan lúgubre.', effects: { } }
            ]
        }
    ]
});
