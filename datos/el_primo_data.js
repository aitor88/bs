window.gameCharacters.push({
    name: 'El Primo',
    img: 'avatares/el_primo.png',
    dilemmas: [
        {
            description: {
                es: '¡Hay <span class="text-red-500">muchos enemigos juntos</span>! ¡Es el momento de mi <span class="text-yellow-400">salto</span>!',
                eu: '<span class="text-red-500">Etsai asko daude batera</span>! Nire <span class="text-yellow-400">jauziaren</span> unea da!'
            },
            options: [
                { text: { es: '¡SALTA!', eu: 'EGIN JAUZI!' }, narrative: { es: '¡EL PRIMOOO! Cae sobre ellos. Recibes daño pero cargas mucho Súper.', eu: 'EL PRIMOOO! Haien gainera erortzen da. Kaltea jasotzen duzu baina Super asko kargatzen duzu.' }, effects: { vida: -20, poder: 10, superpoder: 30 } },
                { text: { es: 'Espera y defiende', eu: 'Itxaron eta defendatu' }, narrative: { es: 'Aseguras la posición. Aburrido, pero seguro.', eu: 'Zure posizioa ziurtatzen duzu. Aspergarria, baina segurua.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: '¡Ese <span class="text-red-500 font-bold">robot grande</span> parece fuerte! ¡Quiero <span class="text-orange-500">pegarle</span>!',
                eu: '<span class="text-red-500 font-bold">Robot handi</span> hori indartsua dirudi! <span class="text-orange-500">Jo</span> nahi dut!'
            },
            options: [
                { text: { es: '¡A por él!', eu: 'Bere bila!' }, narrative: { es: 'Te lanzas contra el robot. Es una pelea dura que te deja herido.', eu: 'Robotaren aurka abiatzen zara. Zaurituta uzten zaituen borroka gogorra da.' }, effects: { vida: -25, superpoder: 25 } },
                { text: { es: 'Mejor desde lejos', eu: 'Hobe urrutitik' }, narrative: { es: 'Le disparáis desde una distancia segura.', eu: 'Distantzia seguru batetik tiro egiten diozue.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: '¡Ese francotirador me está molestando! ¡Voy a <span class="text-yellow-300">correr</span> hacia él!',
                eu: 'Frankotiratzaile hori gogaitzen ari zait! Berarantz <span class="text-yellow-300">korrika</span> egingo dut!'
            },
            options: [
                { text: { es: '¡Ve a por él!', eu: 'Zoaz bere bila!' }, narrative: { es: 'Corres hacia el francotirador. Recibes daño pero lo eliminas y cargas Súper.', eu: 'Frankotiratzailearengana korrika egiten duzu. Kaltea jasotzen duzu baina ezabatu eta Superra kargatzen duzu.' }, effects: { vida: -20, superpoder: 20 } },
                { text: { es: 'Busca cobertura', eu: 'Bilatu babesa' }, narrative: { es: 'Te escondes del francotirador, recuperando vida pero perdiendo poder.', eu: 'Frankotiratzailearengandik ezkutatzen zara, bizitza berreskuratuz baina indarra galduz.' }, effects: { vida: 10, poder: -5 } }
            ]
        },
        {
            description: {
                es: '¡El gimnasio está abierto! Un entrenamiento rápido con <span class="text-sky-400">1 Recurso</span> (pesas) aumentará nuestro <span class="text-orange-500">poder</span>.',
                eu: 'Gimnasioa zabalik dago! Entrenamendu azkar batek <span class="text-sky-400">Baliabide 1</span>-ekin (pisuekin) gure <span class="text-orange-500">indarra</span> handituko du.'
            },
            options: [
                { text: { es: '¡A entrenar!', eu: 'Entrenatzera!' }, cost: 1, narrative: { es: 'Un entrenamiento rápido y duro. Vuestro poder sube, pero os cansáis un poco.', eu: 'Entrenamendu azkar eta gogorra. Zuen indarra igotzen da, baina pixka bat nekatzen zarete.' }, effects: { poder: 20, vida: -5 } },
                { text: { es: 'No hay tiempo', eu: 'Ez dago astirik' }, narrative: { es: 'Decides que es mejor descansar y recuperar fuerzas.', eu: 'Atseden hartzea eta indarrak berreskuratzea hobe dela erabakitzen duzu.' }, effects: { vida: 10 } }
            ]
        },
        {
            description: {
                es: '¡Puedo <span class="text-yellow-300">levantar ese coche</span> y lanzárselo a los enemigos!',
                eu: '<span class="text-yellow-300">Auto hori altxatu</span> eta etsaiei jaurti diezaieket!'
            },
            options: [
                { text: { es: '¡Levántalo!', eu: 'Altxa ezazu!' }, narrative: { es: '¡El coche vuela por los aires y aplasta a los enemigos! Una proeza que carga Súper.', eu: 'Autoak hegan egiten du eta etsaiak zapaltzen ditu! Superra kargatzen duen balentria.' }, effects: { poder: 15, superpoder: 20, vida: -5 } },
                { text: { es: 'No hagas el bruto', eu: 'Ez egin astakeriarik' }, narrative: { es: 'Prefieres una táctica menos llamativa y más segura.', eu: 'Taktika ez hain deigarri eta seguruago bat nahiago duzu.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: '¡Mi Súper está listo! ¿Lo uso para <span class="text-yellow-400">saltar en medio de todos</span>?',
                eu: 'Nire Superra prest dago! Guztien erdian <span class="text-yellow-400">jauzi egiteko</span> erabiltzen dut?'
            },
            options: [
                { text: { es: '¡SALTO DEL TIGRE!', eu: 'TIGREAREN JAUZIA!' }, narrative: { es: 'Saltas en medio de la batalla, creando el caos total.', eu: 'Borroka erdian jauzi egiten duzu, erabateko kaosa sortuz.' }, effects: { poder: 20, vida: -15, superpoder: -100 } },
                { text: { es: 'Guárdalo aún', eu: 'Gorde ezazu oraindik' }, narrative: { es: 'Decides esperar a que se junten más enemigos.', eu: 'Etsai gehiago elkartzeko itxarotea erabakitzen duzu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Hay una plataforma elevada. Podría saltar allí para tener ventaja.',
                eu: 'Plataforma altu bat dago. Bertara jauzi egin nezake abantaila izateko.'
            },
            options: [
                { text: { es: 'Sube a la plataforma', eu: 'Igo plataformara' }, narrative: { es: 'Desde arriba, tienes una visión perfecta y tu poder defensivo mejora.', eu: 'Goitik, ikuspegi ezin hobea duzu eta zure defentsa-indarra hobetzen da.' }, effects: { poder: 10, vida: 5 } },
                { text: { es: 'Quédate en el suelo', eu: 'Geratu lurrean' }, narrative: { es: 'Prefieres luchar cara a cara en el suelo.', eu: 'Nahiago duzu lurrean aurrez aurre borrokatu.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: '¡Un compañero necesita ayuda! Puedo <span class="text-green-400">interceptar los disparos</span> por él.',
                eu: 'Kide batek laguntza behar du! Haren ordez <span class="text-green-400">tiroak geldiarazi</span> ditzaket.'
            },
            options: [
                { text: { es: '¡Yo te protejo!', eu: 'Nik babestuko zaitut!' }, narrative: { es: 'Te pones delante como un escudo humano. Recibes mucho daño pero salvas a tu amigo.', eu: 'Giza ezkutu bat bezala jartzen zara aurrean. Kalte handia jasotzen duzu baina zure laguna salbatzen duzu.' }, effects: { vida: -30, superpoder: 20 } },
                { text: { es: '¡Esquívalo!', eu: 'Saihestu!' }, narrative: { es: 'Le gritas que se mueva y siga luchando.', eu: 'Mugitzeko eta borrokan jarraitzeko oihukatzen diozu.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: '¡Mira mis músculos! Puedo hacer una pose para <span class="text-gray-400">intimidar</span> a los enemigos.',
                eu: 'Begira nire giharrak! Pose bat egin dezaket etsaiak <span class="text-gray-400">beldurtzeko</span>.'
            },
            options: [
                { text: { es: '¡Pose de victoria!', eu: 'Garaipen-posea!' }, narrative: { es: 'Tu pose es tan increíble que los enemigos se asustan y retroceden.', eu: 'Zure posea hain da sinestezina, etsaiak beldurtu eta atzera egiten dutela.' }, effects: { vida: 10, superpoder: 5 } },
                { text: { es: '¡Deja de posar y lucha!', eu: 'Utzi posatzeari eta borrokatu!' }, narrative: { es: 'Le dices que se centre en la batalla.', eu: 'Borrokan zentratzeko esaten diozu.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: '¡Esta pared es débil! Puedo <span class="text-red-500">romperla</span> para crear un nuevo camino.',
                eu: 'Horma hau ahula da! <span class="text-red-500">Hautsi</span> dezaket bide berri bat sortzeko.'
            },
            options: [
                { text: { es: '¡Rompe la pared!', eu: 'Hautsi horma!' }, narrative: { es: 'Creas un atajo que os da una ventaja de poder sorpresa.', eu: 'Ezusteko indar-abantaila ematen dizuen bidezidor bat sortzen duzu.' }, effects: { poder: 20, vida: -5 } },
                { text: { es: 'Usa la puerta', eu: 'Erabili atea' }, narrative: { es: 'Prefieres no hacer ruido y usar el camino normal.', eu: 'Nahiago duzu zaratarik ez egin eta bide normala erabili.' }, effects: { vida: 5 } }
            ]
        }
    ]
});
