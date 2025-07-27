window.gameCharacters.push({
    name: 'Frank',
    img: 'avatares/frank.png',
    dilemmas: [
        {
            description: {
                es: '¡Están todos juntos! Puedo usar mi Súper para <span class="text-yellow-300">aturdirlos a todos</span>, pero me quedaré quieto un momento.',
                eu: 'Denak batera daude! Nire Superra erabili dezaket denak <span class="text-yellow-300">zorabiatzeko</span>, baina une batez geldirik geratuko naiz.'
            },
            options: [
                { text: { es: '¡MACHACA!', eu: 'TXIKITU!' }, narrative: { es: '¡El martillazo aturde a todos los enemigos! Ganas un poder inmenso, pero te llevas daño mientras estás parado.', eu: 'Mailukadak etsai guztiak zorabiatzen ditu! Izugarrizko indarra irabazten duzu, baina kaltea jasotzen duzu geldirik zauden bitartean.' }, effects: { poder: 30, vida: -15, superpoder: -100 } },
                { text: { es: 'Espera el momento', eu: 'Itxaron une egokia' }, narrative: { es: 'Decides no arriesgarte. Esperas una oportunidad más segura.', eu: 'Ez arriskatzea erabakitzen duzu. Aukera seguruago baten zain geratzen zara.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: '¡Viene un ataque muy fuerte! Puedo <span class="text-sky-400">absorber todo el daño</span> con mi cuerpo para proteger al equipo.',
                eu: 'Eraso oso gogor bat dator! Nire gorputzarekin <span class="text-sky-400">kalte guztia xurgatu</span> dezaket taldea babesteko.'
            },
            options: [
                { text: { es: '¡Aguanta el golpe!', eu: 'Eutsi kolpeari!' }, narrative: { es: 'Recibes todo el daño, pero el equipo está a salvo. Cargas mucho Súper por tu valentía.', eu: 'Kalte guztia jasotzen duzu, baina taldea salbu dago. Zure ausardiagatik Super asko kargatzen duzu.' }, effects: { vida: -35, superpoder: 40 } },
                { text: { es: '¡Todos a cubierto!', eu: 'Denok babesera!' }, narrative: { es: 'Gritas al equipo que se cubra. Todos reciben algo de daño, pero es más repartido.', eu: 'Taldeari babesteko oihukatzen diozu. Denek kalte pixka bat jasotzen dute, baina banatuagoa da.' }, effects: { vida: -15 } }
            ]
        },
        {
            description: {
                es: 'Si gasto <span class="text-sky-400">2 Recursos</span> en unos <span class="text-green-400">auriculares con música</span>, puedo ignorar los aturdimientos enemigos.',
                eu: '<span class="text-sky-400">2 Baliabide</span> gastatzen baditut <span class="text-green-400">musika-aurikularretan</span>, etsaien zorabioak alde batera utzi ditzaket.'
            },
            options: [
                { text: { es: '¡Música a tope!', eu: 'Musika topera!' }, cost: 2, narrative: { es: 'Con la música no te enteras de nada. Ganas mucho poder porque no pueden pararte.', eu: 'Musikarekin ez zara ezertaz konturatzen. Indar asko irabazten duzu ezin zaituztelako gelditu.' }, effects: { poder: 25 } },
                { text: { es: 'Ahorra recursos', eu: 'Aurreztu baliabideak' }, narrative: { es: 'Prefieres guardar los recursos y arriesgarte a que te aturdan.', eu: 'Nahiago duzu baliabideak gorde eta zorabiatzeko arriskua hartu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Hay un muro débil. Puedo <span class="text-red-500">romperlo</span> para abrir un nuevo camino para el equipo.',
                eu: 'Horma ahul bat dago. <span class="text-red-500">Hautsi</span> dezaket taldeari bide berri bat irekitzeko.'
            },
            options: [
                { text: { es: '¡Rompe el muro!', eu: 'Hautsi horma!' }, narrative: { es: 'El muro cae y sorprendéis a los enemigos por el flanco.', eu: 'Horma erori eta etsaiak albotik harritzen dituzue.' }, effects: { poder: 20, vida: -5 } },
                { text: { es: 'Busca la puerta', eu: 'Bilatu atea' }, narrative: { es: 'Prefieres no hacer ruido y buscar un camino más seguro.', eu: 'Nahiago duzu zaratarik ez egin eta bide seguruago bat bilatu.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Puedo <span class="text-orange-500">golpear el suelo</span> para crear una onda de choque que aleje a los enemigos.',
                eu: 'Lurra <span class="text-orange-500">jo</span> dezaket etsaiak aldenduko dituen talka-uhin bat sortzeko.'
            },
            options: [
                { text: { es: '¡Onda de choque!', eu: 'Talka-uhina!' }, narrative: { es: 'El golpe crea una onda que empuja a los enemigos. Ganas un respiro.', eu: 'Kolpeak etsaiak bultzatzen dituen uhin bat sortzen du. Atseden bat irabazten duzu.' }, effects: { vida: 10, poder: 5 } },
                { text: { es: 'Aguanta la posición', eu: 'Eutsi posizioari' }, narrative: { es: 'Prefieres aguantar el tipo y no gastar energías.', eu: 'Nahiago duzu posizioari eutsi eta energiarik ez gastatu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'He encontrado un <span class="text-sky-400">bidón de energía</span> (<span class="text-sky-400">+2 Recursos</span>). ¡Me lo bebo!',
                eu: '<span class="text-sky-400">Energia-bidoi</span> bat (<span class="text-sky-400">+2 Baliabide</span>) aurkitu dut. Edan egingo dut!'
            },
            options: [
                { text: { es: '¡Bébetelo!', eu: 'Edan ezazu!' }, narrative: { es: '¡Sabe fatal! Ganas recursos pero te deja un poco mareado y pierdes vida.', eu: 'Zapore nazkagarria du! Baliabideak irabazten dituzu baina pixka bat zorabiatuta uzten zaitu eta bizitza galtzen duzu.' }, effects: { recursos: 2, vida: -10 } },
                { text: { es: 'Guárdalo para después', eu: 'Gorde gerorako' }, narrative: { es: 'Decides guardar el bidón para cuando haga falta de verdad.', eu: 'Bidoia benetan behar denerako gordetzea erabakitzen duzu.' }, effects: { recursos: 2 } }
            ]
        },
        {
            description: {
                es: 'Si me quedo quieto un momento, puedo <span class="text-green-400">regenerar vida</span>.',
                eu: 'Une batez geldirik geratzen banaiz, <span class="text-green-400">bizitza birsor</span> dezaket.'
            },
            options: [
                { text: { es: 'Recupera vida', eu: 'Berreskuratu bizitza' }, narrative: { es: 'Te tomas un respiro y recuperas salud, pero pierdes la iniciativa.', eu: 'Atseden bat hartu eta osasuna berreskuratzen duzu, baina iniziatiba galtzen duzu.' }, effects: { vida: 20, poder: -5 } },
                { text: { es: '¡No hay tiempo!', eu: 'Ez dago astirik!' }, narrative: { es: 'La batalla es demasiado intensa para pararse a descansar.', eu: 'Borroka biziegia da atseden hartzeko gelditzeko.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: 'Puedo <span class="text-red-500">atraer a los enemigos</span> hacia mí para que el resto del equipo pueda atacarles por la espalda.',
                eu: 'Etsaiak niregana <span class="text-red-500">erakar</span> ditzaket gainerako taldekideek atzetik erasotzeko.'
            },
            options: [
                { text: { es: '¡Venid a por mí!', eu: 'Zatozte nire bila!' }, narrative: { es: 'Todos los enemigos te atacan a ti. Recibes mucho daño, pero tu equipo gana una gran ventaja.', eu: 'Etsai guztiek zuri erasotzen dizute. Kalte handia jasotzen duzu, baina zure taldeak abantaila handia lortzen du.' }, effects: { vida: -30, poder: 20 } },
                { text: { es: 'Mantened la formación', eu: 'Mantendu formazioa' }, narrative: { es: 'Prefieres una táctica más ordenada y segura para todos.', eu: 'Taktika ordenatuago eta seguruago bat nahiago duzu denontzat.' }, effects: { } }
            ]
        },
        {
            description: {
                es: '¡Mi martillo está un poco suelto! Puedo gastar <span class="text-sky-400">1 Recurso</span> para <span class="text-yellow-300">ajustarlo</span>.',
                eu: 'Nire mailua pixka bat solte dago! <span class="text-sky-400">Baliabide 1</span> gastatu dezaket <span class="text-yellow-300">doitzeko</span>.'
            },
            options: [
                { text: { es: '¡Ajústalo!', eu: 'Doitu ezazu!' }, cost: 1, narrative: { es: 'Ahora sí. Con el martillo bien ajustado, tu poder aumenta.', eu: 'Orain bai. Mailua ondo doituta, zure indarra handitzen da.' }, effects: { poder: 15 } },
                { text: { es: 'No importa', eu: 'Berdin dio' }, narrative: { es: 'No hay tiempo para reparaciones. Sigues luchando como puedes.', eu: 'Ez dago konponketetarako astirik. Ahal duzun bezala borrokan jarraitzen duzu.' }, effects: { poder: -5 } }
            ]
        },
        {
            description: {
                es: '¡Un enemigo se escapa! Puedo <span class="text-orange-500">lanzarle mi martillo</span> para detenerlo.',
                eu: 'Etsai bat ihes egiten ari da! Nire <span class="text-orange-500">mailua jaurti</span> diezaioket geldiarazteko.'
            },
            options: [
                { text: { es: '¡Lanza el martillo!', eu: 'Jaurti mailua!' }, narrative: { es: '¡El martillo vuela y acierta! Pero ahora estás desarmado y pierdes poder.', eu: 'Mailuak hegan egiten du eta asmatzen du! Baina orain armarik gabe zaude eta indarra galtzen duzu.' }, effects: { superpoder: 20, poder: -15 } },
                { text: { es: 'Déjalo ir', eu: 'Utzi joaten' }, narrative: { es: 'No puedes arriesgarte a quedarte sin tu arma principal.', eu: 'Ezin duzu zure arma nagusirik gabe geratzeko arriskurik hartu.' }, effects: { } }
            ]
        }
    ]
});
