// Contenido para poco_data.js

window.gameCharacters.push({
    name: 'Poco',
    img: 'avatares/poco.png',
    dilemmas: [
        {
            description: '¡El equipo necesita <span class="text-green-400">curación</span>! Puedo tocar mi guitarra para sanarnos.',
            options: [
                { text: '¡Toca para curar!', narrative: 'La música de Poco cura al equipo. ¡Qué alivio!', effects: { vida: 20, poder: -5 } },
                { text: '¡Sigue atacando!', narrative: 'Decides que atacar es lo mejor. ¡No hay descanso!', effects: { poder: 10, superpoder: 10 } }
            ]
        },
        {
            description: 'Puedo tocar una canción que sube la moral. ¡Atacaremos con <span class="text-orange-500">más ganas</span>!',
            options: [
                { text: '¡Dale ritmo!', narrative: '¡La música es pegadiza! El equipo se siente más fuerte.', effects: { poder: 15, superpoder: 15, vida: -5 } },
                { text: 'Mejor silencio', narrative: 'Pides concentración. El equipo se prepara y recupera un poco de vida.', effects: { vida: 10 } }
            ]
        },
        {
            description: 'Detecto una frecuencia que <span class="text-yellow-300">aturde a los robots</span>. Puedo emitirla, pero nos descubrirán.',
            options: [
                { text: '¡Emite la frecuencia!', narrative: 'Los robots se quedan parados, ¡es tu oportunidad de atacar!', effects: { poder: 20, vida: -10 } },
                { text: 'No hagas ruido', narrative: 'Mantienes un perfil bajo para no atraer más enemigos.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Si gasto <span class="text-sky-400">1 Recurso</span> en un amplificador, mi <span class="text-green-400">curación</span> será mucho más potente.',
            options: [
                { text: '¡Usa el ampli!', cost: 1, narrative: 'El sonido es atronador. Tu siguiente curación será el doble de efectiva.', effects: { vida: 15 } },
                { text: 'Ahorra el recurso', narrative: 'Prefieres guardar el recurso para otra cosa.', effects: { } }
            ]
        },
        {
            description: 'Si toco una nana, ¡puedo <span class="text-blue-400">dormir</span> a ese enemigo tan grande!',
            options: [
                { text: '¡A dormir!', narrative: '¡El grandullón se ha quedado dormido! Podéis escapar o atacarle.', effects: { vida: 15, poder: 5 } },
                { text: '¡No es momento de nanas!', narrative: 'Prefieres una táctica más directa y ruidosa.', effects: { poder: 10 } }
            ]
        },
        {
            description: 'El eco de esta cueva es genial. Podría usarlo para <span class="text-gray-400">asustar</span> a los enemigos.',
            options: [
                { text: '¡Haz mucho ruido!', narrative: 'El eco asusta a los enemigos y retroceden. Ganas tiempo para prepararte.', effects: { vida: 10, superpoder: 10 } },
                { text: 'El sigilo es mejor', narrative: 'Prefieres no revelar tu posición.', effects: { } }
            ]
        },
        {
            description: '¡Un compañero está rodeado! Puedo lanzar una <span class="text-green-400">onda de curación</span> para salvarle.',
            options: [
                { text: '¡Sálvalo!', narrative: 'Tu curación llega justo a tiempo. El compañero se salva, pero tú quedas en peligro.', effects: { vida: -10, superpoder: 15 } },
                { text: 'Tiene que aguantar', narrative: 'Confías en que tu compañero puede salir solo de esa.', effects: { poder: 5 } }
            ]
        },
        {
            description: 'Mi Súper está listo. ¿Lo uso para <span class="text-green-400">curar a todos</span> o lo guardo?',
            options: [
                { text: '¡Cura a todo el equipo!', narrative: 'Una ola de energía positiva cura a todo el equipo. ¡Estáis como nuevos!', effects: { vida: 35, superpoder: -100 } },
                { text: 'Guárdalo todavía', narrative: 'Decides esperar a un momento de más necesidad.', effects: { } }
            ]
        },
        {
            description: 'Puedo tocar una canción triste para que los enemigos <span class="text-red-500">bajen su poder</span>.',
            options: [
                { text: '¡Qué triste!', narrative: 'La balada es tan triste que los enemigos dejan de atacar con tanta fuerza.', effects: { vida: 15, poder: -5 } },
                { text: '¡No queremos llorar!', narrative: 'Prefieres mantener la moral alta con música alegre.', effects: { poder: 10 } }
            ]
        },
        {
            description: 'He encontrado unas cuerdas nuevas (<span class="text-sky-400">+1 Recurso</span>). ¡Mi música sonará mejor!',
            options: [
                { text: '¡Coge las cuerdas!', narrative: 'Con las cuerdas nuevas, tu poder aumenta ligeramente.', effects: { recursos: 1, poder: 5 } },
                { text: 'No hay tiempo para eso', narrative: 'Dejas las cuerdas. No es momento de afinar la guitarra.', effects: { } }
            ]
        }
    ]
});
