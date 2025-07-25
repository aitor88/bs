// Contenido para mortis_data.js

window.gameCharacters.push({
    name: 'Mortis',
    img: 'avatares/mortis.png', // Asegúrate de tener una imagen mortis.png en la carpeta avatares
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
        }
    ]
});
