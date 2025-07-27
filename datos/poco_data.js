window.gameCharacters.push({
    name: 'Poco',
    img: 'avatares/poco.png',
    dilemmas: [
        {
            description: {
                es: '¡El equipo necesita <span class="text-green-400">curación</span>! Puedo tocar mi guitarra para sanarnos.',
                eu: 'Taldeak <span class="text-green-400">sendaketa</span> behar du! Nire gitarra jo dezaket sendatzeko.'
            },
            options: [
                { text: { es: '¡Toca para curar!', eu: 'Jo sendatzeko!' }, narrative: { es: 'La música de Poco cura al equipo. ¡Qué alivio!', eu: 'Pocoren musikak taldea sendatzen du. Hau lasaitua!' }, effects: { vida: 20, poder: -5 } },
                { text: { es: '¡Sigue atacando!', eu: 'Jarraitu erasotzen!' }, narrative: { es: 'Decides que atacar es lo mejor. ¡No hay descanso!', eu: 'Erasotzea onena dela erabakitzen duzu. Ez dago atsedenik!' }, effects: { poder: 10, superpoder: 10 } }
            ]
        },
        {
            description: {
                es: 'Puedo tocar una canción que sube la moral. ¡Atacaremos con <span class="text-orange-500">más ganas</span>!',
                eu: 'Morala igotzen duen abesti bat jo dezaket. <span class="text-orange-500">Gogo gehiagorekin</span> erasoko dugu!'
            },
            options: [
                { text: { es: '¡Dale ritmo!', eu: 'Eman erritmoa!' }, narrative: { es: '¡La música es pegadiza! El equipo se siente más fuerte.', eu: 'Musika itsaskorra da! Taldea indartsuago sentitzen da.' }, effects: { poder: 15, superpoder: 15, vida: -5 } },
                { text: { es: 'Mejor silencio', eu: 'Isiltasuna hobe' }, narrative: { es: 'Pides concentración. El equipo se prepara y recupera un poco de vida.', eu: 'Kontzentrazioa eskatzen duzu. Taldea prestatu eta bizitza pixka bat berreskuratzen du.' }, effects: { vida: 10 } }
            ]
        },
        {
            description: {
                es: 'Detecto una frecuencia que <span class="text-yellow-300">aturde a los robots</span>. Puedo emitirla, pero nos descubrirán.',
                eu: '<span class="text-yellow-300">Robotak zorabiatzen</span> dituen maiztasun bat detektatzen dut. Igorri dezaket, baina aurkituko gaituzte.'
            },
            options: [
                { text: { es: '¡Emite la frecuencia!', eu: 'Igorri maiztasuna!' }, narrative: { es: 'Los robots se quedan parados, ¡es tu oportunidad de atacar!', eu: 'Robotak geldirik geratzen dira, zure erasotzeko aukera da!' }, effects: { poder: 20, vida: -10 } },
                { text: { es: 'No hagas ruido', eu: 'Ez egin zaratarik' }, narrative: { es: 'Mantienes un perfil bajo para no atraer más enemigos.', eu: 'Profil baxua mantentzen duzu etsai gehiago ez erakartzeko.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Si gasto <span class="text-sky-400">1 Recurso</span> en un amplificador, mi <span class="text-green-400">curación</span> será mucho más potente.',
                eu: 'Anplifikadore batean <span class="text-sky-400">Baliabide 1</span> gastatzen badut, nire <span class="text-green-400">sendaketa</span> askoz indartsuagoa izango da.'
            },
            options: [
                { text: { es: '¡Usa el ampli!', eu: 'Erabili anplia!' }, cost: 1, narrative: { es: 'El sonido es atronador. Tu siguiente curación será el doble de efectiva.', eu: 'Soinua izugarria da. Zure hurrengo sendaketa bi aldiz eraginkorragoa izango da.' }, effects: { vida: 15 } },
                { text: { es: 'Ahorra el recurso', eu: 'Aurreztu baliabidea' }, narrative: { es: 'Prefieres guardar el recurso para otra cosa.', eu: 'Nahiago duzu baliabidea beste zerbaitetarako gorde.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Si toco una nana, ¡puedo <span class="text-blue-400">dormir</span> a ese enemigo tan grande!',
                eu: 'Sehaska-kanta bat jotzen badut, etsai handi hori <span class="text-blue-400">lotaratu</span> dezaket!'
            },
            options: [
                { text: { es: '¡A dormir!', eu: 'Lotara!' }, narrative: { es: '¡El grandullón se ha quedado dormido! Podéis escapar o atacarle.', eu: 'Handikotea lo geratu da! Ihes egin edo eraso diezaiokezue.' }, effects: { vida: 15, poder: 5 } },
                { text: { es: '¡No es momento de nanas!', eu: 'Ez da sehaska-kantetarako unea!' }, narrative: { es: 'Prefieres una táctica más directa y ruidosa.', eu: 'Taktika zuzenago eta zaratatsuago bat nahiago duzu.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: 'El eco de esta cueva es genial. Podría usarlo para <span class="text-gray-400">asustar</span> a los enemigos.',
                eu: 'Kobazulo honetako oihartzuna bikaina da. Erabili nezake etsaiak <span class="text-gray-400">beldurtzeko</span>.'
            },
            options: [
                { text: { es: '¡Haz mucho ruido!', eu: 'Egin zarata handia!' }, narrative: { es: 'El eco asusta a los enemigos y retroceden. Ganas tiempo para prepararte.', eu: 'Oihartzunak etsaiak beldurtzen ditu eta atzera egiten dute. Prestatzeko denbora irabazten duzu.' }, effects: { vida: 10, superpoder: 10 } },
                { text: { es: 'El sigilo es mejor', eu: 'Isiltasuna hobe da' }, narrative: { es: 'Prefieres no revelar tu posición.', eu: 'Nahiago duzu zure posizioa ez erakutsi.' }, effects: { } }
            ]
        },
        {
            description: {
                es: '¡Un compañero está rodeado! Puedo lanzar una <span class="text-green-400">onda de curación</span> para salvarle.',
                eu: 'Kide bat inguratuta dago! <span class="text-green-400">Sendatze-uhin</span> bat jaurti dezaket salbatzeko.'
            },
            options: [
                { text: { es: '¡Sálvalo!', eu: 'Salba ezazu!' }, narrative: { es: 'Tu curación llega justo a tiempo. El compañero se salva, pero tú quedas en peligro.', eu: 'Zure sendaketa justu garaiz iristen da. Kidea salbatzen da, baina zu arriskuan geratzen zara.' }, effects: { vida: -10, superpoder: 15 } },
                { text: { es: 'Tiene que aguantar', eu: 'Eutsi egin behar du' }, narrative: { es: 'Confías en que tu compañero puede salir solo de esa.', eu: 'Zure kidea bakarrik atera daitekeela uste duzu.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: 'Mi Súper está listo. ¿Lo uso para <span class="text-green-400">curar a todos</span> o lo guardo?',
                eu: 'Nire Superra prest dago. <span class="text-green-400">Denak sendatzeko</span> erabiltzen dut ala gordetzen dut?'
            },
            options: [
                { text: { es: '¡Cura a todo el equipo!', eu: 'Sendatu talde osoa!' }, narrative: { es: 'Una ola de energía positiva cura a todo el equipo. ¡Estáis como nuevos!', eu: 'Energia positiboko olatu batek talde osoa sendatzen du. Berriak bezala zaudete!' }, effects: { vida: 35, superpoder: -100 } },
                { text: { es: 'Guárdalo todavía', eu: 'Gorde ezazu oraindik' }, narrative: { es: 'Decides esperar a un momento de más necesidad.', eu: 'Behar handiagoko une baten zain egotea erabakitzen duzu.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo tocar una canción triste para que los enemigos <span class="text-red-500">bajen su poder</span>.',
                eu: 'Abesti triste bat jo dezaket etsaiek beren <span class="text-red-500">indarra jaisteko</span>.'
            },
            options: [
                { text: { es: '¡Qué triste!', eu: 'Ze tristea!' }, narrative: { es: 'La balada es tan triste que los enemigos dejan de atacar con tanta fuerza.', eu: 'Balada hain da tristea, etsaiek hainbeste indarrez erasotzeari uzten diotela.' }, effects: { vida: 15, poder: -5 } },
                { text: { es: '¡No queremos llorar!', eu: 'Ez dugu negar egin nahi!' }, narrative: { es: 'Prefieres mantener la moral alta con música alegre.', eu: 'Nahiago duzu morala altu mantendu musika alaiagoarekin.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: 'He encontrado unas cuerdas nuevas (<span class="text-sky-400">+1 Recurso</span>). ¡Mi música sonará mejor!',
                eu: 'Soka berri batzuk aurkitu ditut (<span class="text-sky-400">+1 Baliabide</span>). Nire musikak hobeto entzungo du!'
            },
            options: [
                { text: { es: '¡Coge las cuerdas!', eu: 'Hartu sokak!' }, narrative: { es: 'Con las cuerdas nuevas, tu poder aumenta ligeramente.', eu: 'Soka berriekin, zure indarra apur bat handitzen da.' }, effects: { recursos: 1, poder: 5 } },
                { text: { es: 'No hay tiempo para eso', eu: 'Ez dago horretarako astirik' }, narrative: { es: 'Dejas las cuerdas. No es momento de afinar la guitarra.', eu: 'Sokak uzten dituzu. Ez da gitarra afinatzeko unea.' }, effects: { } }
            ]
        }
    ]
});
