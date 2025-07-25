// Contenido para el_primo_data.js

window.gameCharacters.push({
    name: 'El Primo',
    img: 'avatares/el_primo.png',
    dilemmas: [
        {
            description: '¡Hay <span class="text-red-500">muchos enemigos juntos</span>! ¡Es el momento de mi <span class="text-yellow-400">salto</span>!',
            options: [
                { text: '¡SALTA!', narrative: '¡EL PRIMOOO! Cae sobre ellos. Recibes daño pero cargas mucho Súper.', effects: { vida: -20, poder: 10, superpoder: 30 } },
                { text: 'Espera y defiende', narrative: 'Aseguras la posición. Aburrido, pero seguro.', effects: { vida: 5 } }
            ]
        },
        {
            description: '¡Ese <span class="text-red-500 font-bold">robot grande</span> parece fuerte! ¡Quiero <span class="text-orange-500">pegarle</span>!',
            options: [
                { text: '¡A por él!', narrative: 'Te lanzas contra el robot. Es una pelea dura que te deja herido.', effects: { vida: -25, superpoder: 25 } },
                { text: 'Mejor desde lejos', narrative: 'Le disparáis desde una distancia segura.', effects: { poder: 10 } }
            ]
        },
        {
            description: '¡Ese francotirador me está molestando! ¡Voy a <span class="text-yellow-300">correr</span> hacia él!',
            options: [
                { text: '¡Ve a por él!', narrative: 'Corres hacia el francotirador. Recibes daño pero lo eliminas y cargas Súper.', effects: { vida: -20, superpoder: 20 } },
                { text: 'Busca cobertura', narrative: 'Te escondes del francotirador, recuperando vida pero perdiendo poder.', effects: { vida: 10, poder: -5 } }
            ]
        },
        {
            description: '¡El gimnasio está abierto! Un entrenamiento rápido con <span class="text-sky-400">1 Recurso</span> (pesas) aumentará nuestro <span class="text-orange-500">poder</span>.',
            options: [
                { text: '¡A entrenar!', cost: 1, narrative: 'Un entrenamiento rápido y duro. Vuestro poder sube, pero os cansáis un poco.', effects: { poder: 20, vida: -5 } },
                { text: 'No hay tiempo', narrative: 'Decides que es mejor descansar y recuperar fuerzas.', effects: { vida: 10 } }
            ]
        },
        {
            description: '¡Puedo <span class="text-yellow-300">levantar ese coche</span> y lanzárselo a los enemigos!',
            options: [
                { text: '¡Levántalo!', narrative: '¡El coche vuela por los aires y aplasta a los enemigos! Una proeza que carga Súper.', effects: { poder: 15, superpoder: 20, vida: -5 } },
                { text: 'No hagas el bruto', narrative: 'Prefieres una táctica menos llamativa y más segura.', effects: { vida: 5 } }
            ]
        },
        {
            description: '¡Mi Súper está listo! ¿Lo uso para <span class="text-yellow-400">saltar en medio de todos</span>?',
            options: [
                { text: '¡SALTO DEL TIGRE!', narrative: 'Saltas en medio de la batalla, creando el caos total.', effects: { poder: 20, vida: -15, superpoder: -100 } },
                { text: 'Guárdalo aún', narrative: 'Decides esperar a que se junten más enemigos.', effects: { } }
            ]
        },
        {
            description: 'Hay una plataforma elevada. Podría saltar allí para tener ventaja.',
            options: [
                { text: 'Sube a la plataforma', narrative: 'Desde arriba, tienes una visión perfecta y tu poder defensivo mejora.', effects: { poder: 10, vida: 5 } },
                { text: 'Quédate en el suelo', narrative: 'Prefieres luchar cara a cara en el suelo.', effects: { poder: 5 } }
            ]
        },
        {
            description: '¡Un compañero necesita ayuda! Puedo <span class="text-green-400">interceptar los disparos</span> por él.',
            options: [
                { text: '¡Yo te protejo!', narrative: 'Te pones delante como un escudo humano. Recibes mucho daño pero salvas a tu amigo.', effects: { vida: -30, superpoder: 20 } },
                { text: '¡Esquívalo!', narrative: 'Le gritas que se mueva y siga luchando.', effects: { poder: 5 } }
            ]
        },
        {
            description: '¡Mira mis músculos! Puedo hacer una pose para <span class="text-gray-400">intimidar</span> a los enemigos.',
            options: [
                { text: '¡Pose de victoria!', narrative: 'Tu pose es tan increíble que los enemigos se asustan y retroceden.', effects: { vida: 10, superpoder: 5 } },
                { text: '¡Deja de posar y lucha!', narrative: 'Le dices que se centre en la batalla.', effects: { poder: 10 } }
            ]
        },
        {
            description: '¡Esta pared es débil! Puedo <span class="text-red-500">romperla</span> para crear un nuevo camino.',
            options: [
                { text: '¡Rompe la pared!', narrative: 'Creas un atajo que os da una ventaja de poder sorpresa.', effects: { poder: 20, vida: -5 } },
                { text: 'Usa la puerta', narrative: 'Prefieres no hacer ruido y usar el camino normal.', effects: { vida: 5 } }
            ]
        }
    ]
});
