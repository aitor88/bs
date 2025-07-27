window.gameCharacters.push({
    name: 'Cordelius',
    img: 'avatares/cordelius.png',
    dilemmas: [
        {
            description: {
                es: 'He encontrado unas <span class="text-purple-400">setas venenosas</span>. Puedo usarlas en mis armas para hacer más daño.',
                eu: '<span class="text-purple-400">Perretxiko pozoitsu</span> batzuk aurkitu ditut. Nire armetan erabil ditzaket kalte gehiago egiteko.'
            },
            options: [
                { text: { es: '¡Usa el veneno!', eu: 'Erabili pozoia!' }, narrative: { es: 'Las armas ahora son venenosas y tu poder aumenta, pero manejarlas es peligroso.', eu: 'Armak orain pozoitsuak dira eta zure indarra handitzen da, baina haiek erabiltzea arriskutsua da.' }, effects: { poder: 25, vida: -10 } },
                { text: { es: 'No, es muy arriesgado', eu: 'Ez, oso arriskutsua da' }, narrative: { es: 'Decides no usar las setas. Mejoras tu poder defensivo por si acaso.', eu: 'Perretxikoak ez erabiltzea erabakitzen duzu. Zure defentsa-indarra hobetzen duzu badaezpada.' }, effects: { poder: 5, vida: 5 } }
            ]
        },
        {
            description: {
                es: '¡Mi Súper está listo! Puedo enviar al enemigo más fuerte al <span class="text-gray-400">Reino de las Sombras</span>.',
                eu: 'Nire Superra prest dago! Etsai indartsuena <span class="text-gray-400">Itzalen Erresumara</span> bidali dezaket.'
            },
            options: [
                { text: { es: '¡Al Reino de las Sombras!', eu: 'Itzalen Erresumara!' }, narrative: { es: 'Aíslas al enemigo más peligroso, dándole un respiro al equipo. Vuestro poder sube mucho.', eu: 'Etsai arriskutsuena isolatzen duzu, taldeari atseden bat emanez. Zuen indarra asko igotzen da.' }, effects: { poder: 20, superpoder: -100 } },
                { text: { es: '¡Luchad todos juntos!', eu: 'Borroka egin denok batera!' }, narrative: { es: 'Prefieres que el equipo se enfrente a la amenaza unido.', eu: 'Nahiago duzu taldeak mehatxuari batuta aurre egitea.' }, effects: { poder: 5, vida: -10 } }
            ]
        },
        {
            description: {
                es: 'Hay un camino lleno de <span class="text-green-400">esporas</span>. Puedo usarlas para curarnos un poco.',
                eu: '<span class="text-green-400">Esporez</span> betetako bide bat dago. Pixka bat sendatzeko erabil ditzaket.'
            },
            options: [
                { text: { es: 'Usa las esporas', eu: 'Erabili esporak' }, narrative: { es: 'Las esporas tienen un efecto curativo que recupera algo de vida al equipo.', eu: 'Esporek taldearen bizitza pixka bat berreskuratzen duen efektu sendagarria dute.' }, effects: { vida: 20 } },
                { text: { es: 'Evita esa zona', eu: 'Saihestu eremu hori' }, narrative: { es: 'No te fías de las esporas y prefieres mantener una distancia segura.', eu: 'Ez zara esporez fio eta nahiago duzu distantzia seguru bat mantendu.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Puedo <span class="text-yellow-300">saltar ese muro</span> para pillar a los enemigos por sorpresa.',
                eu: '<span class="text-yellow-300">Horma hori jauzi</span> dezaket etsaiak ezustean harrapatzeko.'
            },
            options: [
                { text: { es: '¡Salta!', eu: 'Jauzi!' }, narrative: { es: 'El ataque sorpresa funciona a la perfección. Ganas mucho poder.', eu: 'Ezusteko erasoak primeran funtzionatzen du. Indar asko irabazten duzu.' }, effects: { poder: 20, vida: -5 } },
                { text: { es: 'Mantén la posición', eu: 'Mantendu posizioa' }, narrative: { es: 'Prefieres no separarte del grupo y mantener la defensa.', eu: 'Nahiago duzu taldetik ez aldendu eta defentsa mantendu.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Si gasto <span class="text-sky-400">1 Recurso</span>, puedo plantar un <span class="text-purple-400">campo de setas</span> que ralentice a los enemigos.',
                eu: '<span class="text-sky-400">Baliabide 1</span> gastatzen badut, etsaiak motelduko dituen <span class="text-purple-400">perretxiko-zelai</span> bat landatu dezaket.'
            },
            options: [
                { text: { es: '¡Planta las setas!', eu: 'Landatu perretxikoak!' }, cost: 1, narrative: { es: 'Los enemigos se atascan en las setas. ¡Es el momento de atacar!', eu: 'Etsaiak perretxikoetan trabatzen dira. Erasotzeko unea da!' }, effects: { poder: 20 } },
                { text: { es: 'Ahorra el recurso', eu: 'Aurreztu baliabidea' }, narrative: { es: 'Prefieres guardar el recurso para otra ocasión.', eu: 'Nahiago duzu baliabidea beste une baterako gorde.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo entrar al <span class="text-gray-400">Reino de las Sombras</span> para recuperar <span class="text-sky-400">Recursos</span>, pero es peligroso.',
                eu: '<span class="text-gray-400">Itzalen Erresumara</span> sar naiteke <span class="text-sky-400">Baliabideak</span> berreskuratzeko, baina arriskutsua da.'
            },
            options: [
                { text: { es: 'Entra en el Reino', eu: 'Sartu Erresuman' }, narrative: { es: 'Encuentras recursos valiosos en la otra dimensión, pero vuelves algo herido.', eu: 'Beste dimentsioan baliabide baliotsuak aurkitzen dituzu, baina pixka bat zaurituta itzultzen zara.' }, effects: { recursos: 2, vida: -15 } },
                { text: { es: 'Quédate aquí', eu: 'Geratu hemen' }, narrative: { es: 'No te atreves a cruzar el portal. Te preparas para el combate.', eu: 'Ez zara ataria zeharkatzera ausartzen. Borrokarako prestatzen zara.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: 'Veo un enemigo curandero. Puedo <span class="text-yellow-300">silenciarlo</span> con una seta especial (<span class="text-sky-400">1 Recurso</span>).',
                eu: 'Etsai sendatzaile bat ikusten dut. <span class="text-yellow-300">Isilarazi</span> dezaket perretxiko berezi batekin (<span class="text-sky-400">Baliabide 1</span>).'
            },
            options: [
                { text: { es: '¡Siléncialo!', eu: 'Isilarazi!' }, cost: 1, narrative: { es: 'La seta impacta y el curandero no puede usar sus habilidades. ¡Gran ventaja!', eu: 'Perretxikoak jotzen du eta sendatzaileak ezin ditu bere trebetasunak erabili. Abantaila handia!' }, effects: { poder: 15 } },
                { text: { es: 'Acaba con él rápido', eu: 'Amaitu berarekin azkar' }, narrative: { es: 'Intentas derrotarlo con fuerza bruta antes de que pueda curar a sus aliados.', eu: 'Indar gordinarekin garaitzen saiatzen zara bere aliatuak sendatu aurretik.' }, effects: { poder: 5, vida: -10 } }
            ]
        },
        {
            description: {
                es: 'Mis setas me dan un <span class="text-orange-500">extra de poder</span>, pero me dejan un poco mareado.',
                eu: 'Nire perretxikoek <span class="text-orange-500">indar gehigarri bat</span> ematen didate, baina pixka bat zorabiatuta uzten naute.'
            },
            options: [
                { text: { es: 'Come la seta', eu: 'Jan perretxikoa' }, narrative: { es: '¡Sientes el poder! Pero el mareo te hace más vulnerable.', eu: 'Indarra sentitzen duzu! Baina zorabioak ahulago bihurtzen zaitu.' }, effects: { poder: 25, vida: -10 } },
                { text: { es: 'No, gracias', eu: 'Ez, eskerrik asko' }, narrative: { es: 'Prefieres mantener la cabeza despejada.', eu: 'Nahiago duzu burua argi mantendu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo usar el poder del Reino de las Sombras para <span class="text-gray-400">teletransportarme</span> una distancia corta.',
                eu: 'Itzalen Erresumako indarra erabil dezaket distantzia labur bat <span class="text-gray-400">teleportatzeko</span>.'
            },
            options: [
                { text: { es: '¡Teletranspórtate!', eu: 'Teleportatu!' }, narrative: { es: 'Apareces en una posición ventajosa, listo para atacar.', eu: 'Posizio abantailatsu batean agertzen zara, erasotzeko prest.' }, effects: { poder: 15, superpoder: 10 } },
                { text: { es: 'Ve a pie', eu: 'Zoaz oinez' }, narrative: { es: 'Prefieres un avance más lento pero seguro.', eu: 'Aurrerapen motelago baina seguruago bat nahiago duzu.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Hay un grupo de enemigos débiles. Podría usar mi <span class="text-purple-400">ataque de setas</span> para acabar con ellos y cargar Súper.',
                eu: 'Etsai ahulen talde bat dago. Nire <span class="text-purple-400">perretxiko-erasoa</span> erabil nezake haiekin amaitzeko eta Superra kargatzeko.'
            },
            options: [
                { text: { es: '¡Lluvia de setas!', eu: 'Perretxiko-euria!' }, narrative: { es: 'Las setas acaban con los enemigos débiles y cargas mucho Superpoder.', eu: 'Perretxikoek etsai ahulekin amaitzen dute eta Superbotere asko kargatzen duzu.' }, effects: { superpoder: 35, vida: -5 } },
                { text: { es: 'Ignóralos', eu: 'Ez ikusi egin' }, narrative: { es: 'No son una amenaza. Te centras en los enemigos más grandes.', eu: 'Ez dira mehatxu bat. Etsai handienetan zentratzen zara.' }, effects: { } }
            ]
        }
    ]
});
