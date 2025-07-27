window.gameCharacters.push({
    name: 'Mortis',
    img: 'avatares/mortis.png',
    dilemmas: [
        {
            description: {
                es: 'Veo a un enemigo con poca vida. Puedo usar mis <span class="text-purple-400">dashes</span> para acabar con él, pero me meteré en medio del peligro.',
                eu: 'Bizitza gutxiko etsai bat ikusten dut. Nire <span class="text-purple-400">mugimendu azkarrak</span> erabil ditzaket berarekin amaitzeko, baina arriskuaren erdian sartuko naiz.'
            },
            options: [
                { text: { es: '¡A por él!', eu: 'Bere bila!' }, narrative: { es: 'Te lanzas a por el enemigo y lo eliminas. Sales herido, pero cargas Súper.', eu: 'Etsaiaren bila abiatzen zara eta ezabatzen duzu. Zaurituta ateratzen zara, baina Superra kargatzen duzu.' }, effects: { poder: 15, superpoder: 25, vida: -20 } },
                { text: { es: 'Déjalo escapar', eu: 'Utzi ihes egiten' }, narrative: { es: 'Decides que es demasiado arriesgado y mantienes una posición segura.', eu: 'Arriskutsuegia dela erabakitzen duzu eta posizio seguru bat mantentzen duzu.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: '¡Estoy rodeado! Puedo usar mi Súper de <span class="text-red-500">murciélagos</span> para dañarlos a todos y <span class="text-green-400">curarme</span>.',
                eu: 'Inguratuta nago! Nire <span class="text-red-500">saguzarren</span> Superra erabili dezaket denak kaltetzeko eta ni <span class="text-green-400">sendatzeko</span>.'
            },
            options: [
                { text: { es: '¡Usa el Súper!', eu: 'Erabili Superra!' }, narrative: { es: 'Los murciélagos te curan mientras dañan a los enemigos. ¡Una jugada espectacular!', eu: 'Saguzarrek sendatzen zaituzte etsaiak kaltetzen dituzten bitartean. Jokaldi ikusgarria!' }, effects: { vida: 25, poder: 10, superpoder: -100 } },
                { text: { es: 'Intenta esquivar', eu: 'Saiatu saihesten' }, narrative: { es: 'Prefieres guardar el Súper e intentar esquivar los ataques.', eu: 'Nahiago duzu Superra gorde eta erasoak saihesten saiatu.' }, effects: { vida: -15, superpoder: 10 } }
            ]
        },
        {
            description: {
                es: 'Hay un <span class="text-sky-400">botiquín</span> (<span class="text-sky-400">+1 Recurso</span>) lejos de aquí. Puedo ir a por él rápidamente con mis dashes.',
                eu: '<span class="text-sky-400">Botikin</span> bat (<span class="text-sky-400">+1 Baliabide</span>) dago hemendik urrun. Bere bila azkar joan naiteke nire mugimendu azkarrekin.'
            },
            options: [
                { text: { es: '¡Corre a por él!', eu: 'Korrika bere bila!' }, narrative: { es: 'Vas y vuelves en un instante. Consigues el recurso, pero te alejas de la batalla.', eu: 'Une batean zoaz eta itzultzen zara. Baliabidea lortzen duzu, baina borrokatik aldentzen zara.' }, effects: { recursos: 1, poder: -5 } },
                { text: { es: 'Quédate con el equipo', eu: 'Geratu taldearekin' }, narrative: { es: 'Decides que es mejor no separarse del grupo.', eu: 'Taldetik ez aldentzea hobe dela erabakitzen duzu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo gastar <span class="text-sky-400">1 Recurso</span> para <span class="text-yellow-300">afilar mi pala</span>. Mis próximos ataques serán más rápidos y letales.',
                eu: '<span class="text-sky-400">Baliabide 1</span> gastatu dezaket nire <span class="text-yellow-300">pala zorrozteko</span>. Nire hurrengo erasoak azkarragoak eta hilgarriagoak izango dira.'
            },
            options: [
                { text: { es: '¡Afila la pala!', eu: 'Zorroztu pala!' }, cost: 1, narrative: { es: 'Tu pala ahora brilla. Sientes que tu poder ha aumentado.', eu: 'Zure palak distira egiten du orain. Zure indarra handitu dela sentitzen duzu.' }, effects: { poder: 20 } },
                { text: { es: 'No gastes recursos', eu: 'Ez gastatu baliabiderik' }, narrative: { es: 'Prefieres luchar con la pala como está.', eu: 'Nahiago duzu palarekin dagoen bezala borrokatu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Hay un enemigo lanzador en una posición elevada. Puedo <span class="text-purple-400">lanzarme</span> hacia él.',
                eu: 'Etsai jaurtitzaile bat dago posizio altu batean. Berarantz <span class="text-purple-400">jaurti</span> naiteke.'
            },
            options: [
                { text: { es: '¡Al ataque!', eu: 'Erasora!' }, narrative: { es: 'Te lanzas hacia el enemigo y lo eliminas, but te quedas en una mala posición.', eu: 'Etsairantz abiatu eta ezabatzen duzu, baina posizio txarrean geratzen zara.' }, effects: { poder: 15, vida: -15 } },
                { text: { es: 'Busca otra forma', eu: 'Bilatu beste modu bat' }, narrative: { es: 'No quieres arriesgarte a quedar aislado.', eu: 'Ez duzu isolatuta geratzeko arriskurik hartu nahi.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo hacer un <span class="text-yellow-300">ataque en zig-zag</span> para confundir a los enemigos.',
                eu: '<span class="text-yellow-300">Zig-zag eraso</span> bat egin dezaket etsaiak nahasteko.'
            },
            options: [
                { text: { es: '¡Zig-zag!', eu: 'Zig-zag!' }, narrative: { es: 'Tu movimiento es impredecible. Ganas poder, pero el esfuerzo te cansa.', eu: 'Zure mugimendua aurreikusezina da. Indarra irabazten duzu, baina esfortzuak nekatzen zaitu.' }, effects: { poder: 15, vida: -5 } },
                { text: { es: 'Ataque directo', eu: 'Eraso zuzena' }, narrative: { es: 'Prefieres un ataque más simple y directo.', eu: 'Eraso sinpleago eta zuzenago bat nahiago duzu.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: 'Veo un grupo de enemigos huyendo. ¡Puedo <span class="text-red-500">perseguirlos</span>!',
                eu: 'Etsai talde bat ihesean ikusten dut. <span class="text-red-500">Jazar</span> ditzaket!'
            },
            options: [
                { text: { es: '¡Que no escapen!', eu: 'Ez dezatela ihes egin!' }, narrative: { es: 'Los persigues y acabas con ellos. Cargas mucho Súper.', eu: 'Jazarri eta haiekin amaitzen duzu. Super asko kargatzen duzu.' }, effects: { superpoder: 30, vida: -10 } },
                { text: { es: 'Déjalos ir', eu: 'Utzi joaten' }, narrative: { es: 'Podría ser una trampa. Es mejor asegurar la zona.', eu: 'Tranpa bat izan liteke. Hobe da eremua ziurtatzea.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Si uso mis dashes para <span class="text-blue-400">esquivar</span> el próximo ataque, cargaré mi Súper.',
                eu: 'Nire mugimendu azkarrak erabiltzen baditut hurrengo erasoa <span class="text-blue-400">saihesteko</span>, nire Superra kargatuko dut.'
            },
            options: [
                { text: { es: '¡Esquiva!', eu: 'Saihestu!' }, narrative: { es: '¡Esquiva perfecta! Evitas el daño y cargas tu Superpoder.', eu: 'Saiheste perfektua! Kaltea saihestu eta zure Superboterea kargatzen duzu.' }, effects: { superpoder: 25 } },
                { text: { es: '¡Aguanta!', eu: 'Eutsi!' }, narrative: { es: 'Prefieres recibir el golpe y guardar energías.', eu: 'Nahiago duzu kolpea jaso eta energiak gorde.' }, effects: { vida: -15, superpoder: 10 } }
            ]
        },
        {
            description: {
                es: 'Puedo gastar <span class="text-sky-400">1 Recurso</span> en una <span class="text-purple-400">poción de velocidad</span>.',
                eu: '<span class="text-sky-400">Baliabide 1</span> gastatu dezaket <span class="text-purple-400">abiadura-edabe</span> batean.'
            },
            options: [
                { text: { es: '¡Más rápido!', eu: 'Azkar-azkar!' }, cost: 1, narrative: { es: 'La poción te hace increíblemente rápido. Tu poder aumenta.', eu: 'Edabeak izugarri azkar bihurtzen zaitu. Zure indarra handitzen da.' }, effects: { poder: 20 } },
                { text: { es: 'Ahorra', eu: 'Aurreztu' }, narrative: { es: 'Prefieres guardar el recurso.', eu: 'Nahiago duzu baliabidea gorde.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'El cementerio cercano me da <span class="text-gray-400">poder</span>. ¿Nos acercamos?',
                eu: 'Hurbileko hilerriak <span class="text-gray-400">indarra</span> ematen dit. Hurbiltzen gara?'
            },
            options: [
                { text: { es: 'Vamos al cementerio', eu: 'Goazen hilerrira' }, narrative: { es: 'Te sientes como en casa. Tu poder y vida aumentan.', eu: 'Etxean bezala sentitzen zara. Zure indarra eta bizitza handitzen dira.' }, effects: { poder: 10, vida: 10 } },
                { text: { es: 'Da mala espina', eu: 'Itxura txarra du' }, narrative: { es: 'Prefieres no acercarte a ese lugar tan lúgubre.', eu: 'Nahiago duzu hain leku goibelera ez hurbildu.' }, effects: { } }
            ]
        }
    ]
});
