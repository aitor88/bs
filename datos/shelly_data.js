window.gameCharacters.push({
    name: 'Shelly',
    img: 'avatares/shelly.png',
    dilemmas: [
        {
            description: {
                es: '¡Veo una caja de poder! Puedo gastar <span class="text-sky-400">1 Recurso</span> en cartuchos especiales para abrirla desde lejos.',
                eu: 'Indar kutxa bat ikusten dut! <span class="text-sky-400">Baliabide 1</span> gastatu dezaket kartutxo berezietan urrutitik irekitzeko.'
            },
            options: [
                { text: { es: '¡Gasta el recurso!', eu: 'Erabili baliabidea!' }, cost: 1, narrative: { es: 'Los cartuchos especiales revientan la caja. ¡El poder es tuyo!', eu: 'Kartutxo bereziek kutxa lehertzen dute. Indarra zurea da!' }, effects: { poder: 25 } },
                { text: { es: 'Ahorra munición', eu: 'Aurreztu munizioa' }, narrative: { es: 'Prefieres guardar los recursos para algo más importante.', eu: 'Nahiago duzu baliabideak zerbait garrantzitsuagorako gorde.' }, effects: { superpoder: 10 } }
            ]
        },
        {
            description: {
                es: '¡Mi Súper está listo! Puedo usarlo para <span class="text-red-500">destruir esa cobertura</span> enemiga y dejarlos al descubierto.',
                eu: 'Nire Superra prest dago! Erabili dezaket etsaien <span class="text-red-500">babesa suntsitzeko</span> eta agerian uzteko.'
            },
            options: [
                { text: { es: '¡Usa el Súper!', eu: 'Erabili Superra!' }, narrative: { es: '¡El Súper arrasa con todo! Los enemigos están vulnerables.', eu: 'Superrak dena suntsitzen du! Etsaiak ahul daude.' }, effects: { poder: 15, superpoder: -100 } },
                { text: { es: 'Guárdalo', eu: 'Gorde ezazu' }, narrative: { es: 'Decides esperar a un mejor momento. Te preparas para defender.', eu: 'Une hobe baten zain egotea erabakitzen duzu. Defentsarako prestatzen zara.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: 'Oigo enemigos al otro lado de la esquina. Puedo preparar una <span class="text-yellow-300">emboscada</span>.',
                eu: 'Etsaiak entzuten ditut izkinaren beste aldean. <span class="text-yellow-300">Segada</span> bat presta dezaket.'
            },
            options: [
                { text: { es: 'Prepara la trampa', eu: 'Presta ezazu tranpa' }, narrative: { es: '¡Sorpresa! La emboscada funciona y ganas ventaja.', eu: 'Ezustekoa! Segadak funtzionatzen du eta abantaila lortzen duzu.' }, effects: { poder: 20, vida: 5 } },
                { text: { es: 'Busca otra ruta', eu: 'Bilatu beste bide bat' }, narrative: { es: 'Evitas el riesgo y buscas un camino más seguro.', eu: 'Arriskua saihesten duzu eta bide seguruago bat bilatzen duzu.' }, effects: { vida: 10 } }
            ]
        },
        {
            description: {
                es: 'Un enemigo <span class="text-red-500">tanque</span> avanza. Mi escopeta le hace mucho daño de cerca.',
                eu: 'Etsai <span class="text-red-500">tanke</span> bat aurrera doa. Nire eskopetak kalte handia egiten dio gertutik.'
            },
            options: [
                { text: { es: '¡Lucha de cerca!', eu: 'Borroka egin gertutik!' }, narrative: { es: 'Te mueves muy rápido cerca del tanque y lo destrozas. Cargas Súper pero recibes un golpe.', eu: 'Oso azkar mugitzen zara tankearen ondoan eta txikitzen duzu. Superra kargatzen duzu baina kolpe bat jasotzen duzu.' }, effects: { superpoder: 30, vida: -20 } },
                { text: { es: 'Disparad desde lejos', eu: 'Tiro egin urrutitik' }, narrative: { es: 'Todo el equipo dispara desde lejos, derribando al tanque sin peligro.', eu: 'Talde osoak urrutitik tiro egiten du, tankea arriskurik gabe eraitsiz.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: '¡Están atacando a un compañero! Puedo gastar <span class="text-sky-400">1 Recurso</span> en una <span class="text-green-400">granada de humo</span> para cubrirlo.',
                eu: 'Kide bati erasotzen ari zaizkio! <span class="text-sky-400">Baliabide 1</span> gastatu dezaket <span class="text-green-400">ke-granada</span> batean hura babesteko.'
            },
            options: [
                { text: { es: '¡Lanza el humo!', eu: 'Bota kea!' }, cost: 1, narrative: { es: 'El humo cubre a tu compañero y podéis reposicionaros.', eu: 'Keak zure kidea estaltzen du eta berriro kokatu zaitezkete.' }, effects: { vida: 15 } },
                { text: { es: '¡Fuego de cobertura!', eu: 'Babes-sua!' }, narrative: { es: 'Disparas para que los enemigos se escondan, pero te expones al peligro.', eu: 'Tiro egiten duzu etsaiak ezkutatzeko, baina arriskuan jartzen zara.' }, effects: { poder: 10, vida: -15 } }
            ]
        },
        {
            description: {
                es: '¡Necesito recargar! ¿Me cubrís o aprovecho para disparar un último cartucho?',
                eu: 'Birkargatu behar dut! Babesten nauzue ala azken kartutxo bat botatzeko aprobetxatzen dut?'
            },
            options: [
                { text: { es: '¡Un último disparo!', eu: 'Azken tiro bat!' }, narrative: { es: 'El último disparo acierta, pero te deja vulnerable mientras recargas.', eu: 'Azken tiroak asmatzen du, baina ahul uzten zaitu birkargatzen duzun bitartean.' }, effects: { poder: 15, vida: -10 } },
                { text: { es: '¡Cubridme!', eu: 'Babestu nazazue!' }, narrative: { es: 'El equipo te cubre. Recargas sin problemas y recuperas algo de vida.', eu: 'Taldeak babesten zaitu. Arazorik gabe birkargatzen duzu eta bizitza pixka bat berreskuratzen duzu.' }, effects: { vida: 10 } }
            ]
        },
        {
            description: {
                es: 'Este <span class="text-yellow-300">pasillo estrecho</span> es perfecto para mi escopeta, pero muy peligroso.',
                eu: '<span class="text-yellow-300">Korridore estu</span> hau ezin hobea da nire eskopetarentzat, baina oso arriskutsua.'
            },
            options: [
                { text: { es: 'Avanzar por el pasillo', eu: 'Korridoretik aurrera egin' }, narrative: { es: 'El pasillo es una trampa mortal para ellos, pero tú también recibes daño.', eu: 'Korridorea haientzat heriozko tranpa da, baina zuk ere kaltea jasotzen duzu.' }, effects: { poder: 25, vida: -20 } },
                { text: { es: 'Busca otra posición', eu: 'Bilatu beste posizio bat' }, narrative: { es: 'Decides no arriesgar y buscas un lugar más seguro.', eu: 'Ez arriskatzea erabakitzen duzu eta leku seguruago bat bilatzen duzu.' }, effects: { poder: -5, vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Veo un botiquín (<span class="text-sky-400">+1 Recurso</span>), pero está en una zona abierta.',
                eu: 'Botikin bat (<span class="text-sky-400">+1 Baliabide</span>) ikusten dut, baina eremu ireki batean dago.'
            },
            options: [
                { text: { es: '¡Corre a por él!', eu: 'Korrika bere bila!' }, narrative: { es: 'Corres bajo el fuego y consigues el botiquín, pero te llevas un par de balas.', eu: 'Suaren azpian korrika egiten duzu eta botikina lortzen duzu, baina bala pare bat jasotzen dituzu.' }, effects: { recursos: 1, vida: -20 } },
                { text: { es: 'No vale la pena', eu: 'Ez du merezi' }, narrative: { es: 'Decides que el riesgo es demasiado alto.', eu: 'Arriskua handiegia dela erabakitzen duzu.' }, effects: { superpoder: 5 } }
            ]
        },
        {
            description: {
                es: 'Podemos <span class="text-sky-400">gastar 2 Recursos</span> en mejorar mi escopeta para el resto de la partida.',
                eu: '<span class="text-sky-400">2 Baliabide gastatu</span> ditzakegu nire eskopeta hobetzeko partida osorako.'
            },
            options: [
                { text: { es: '¡Mejora el arma!', eu: 'Hobetu arma!' }, cost: 2, narrative: { es: '¡Tu escopeta ahora es una bestia! Tu poder base aumenta.', eu: 'Zure eskopeta piztia bat da orain! Zure oinarrizko indarra handitzen da.' }, effects: { poder: 20 } },
                { text: { es: 'Ahorra los recursos', eu: 'Aurreztu baliabideak' }, narrative: { es: 'Prefieres guardar los recursos para curaciones o granadas.', eu: 'Nahiago duzu baliabideak sendaketetarako edo granadetarako gorde.' }, effects: { } }
            ]
        },
        {
            description: {
                es: '¡Son demasiados! ¿Nos retiramos para pensar un plan o luchamos ahora?',
                eu: 'Gehiegi dira! Plan bat pentsatzeko erretiratzen gara ala orain borrokatzen dugu?'
            },
            options: [
                { text: { es: '¡No nos rendimos!', eu: 'Ez dugu amore ematen!' }, narrative: { es: 'Lucháis con todo. Es muy duro, pero si aguantáis, cargáis mucho Súper.', eu: 'Dena emanez borrokatzen duzue. Oso gogorra da, baina eusten badiozue, Super asko kargatzen duzue.' }, effects: { vida: -30, poder: -10, superpoder: 50 } },
                { text: { es: '¡Retirada!', eu: 'Erretirada!' }, narrative: { es: 'Os retiráis a un lugar seguro para recuperar vida.', eu: 'Leku seguru batera erretiratzen zarete bizitza berreskuratzeko.' }, effects: { vida: 10, poder: -5 } }
            ]
        }
    ]
});
