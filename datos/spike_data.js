window.gameCharacters.push({
    name: 'Spike',
    img: 'avatares/spike.png',
    dilemmas: [
        {
            description: {
                es: 'Hay un grupo de enemigos muy juntos. Puedo lanzar mi Súper para <span class="text-green-400">ralentizarlos a todos</span> en un campo de espinas.',
                eu: 'Etsai talde bat oso gertu dago. Nire Superra jaurti dezaket denak <span class="text-green-400">moteltzeko</span> arantza-zelai batean.'
            },
            options: [
                { text: { es: '¡Crea el campo de espinas!', eu: 'Sortu arantza-zelaia!' }, narrative: { es: 'El campo de espinas atrapa a los enemigos, dándote una gran ventaja de poder.', eu: 'Arantza-zelaiak etsaiak harrapatzen ditu, indar abantaila handia emanez.' }, effects: { poder: 25, superpoder: -100 } },
                { text: { es: 'Guarda el Súper', eu: 'Gorde Superra' }, narrative: { es: 'Prefieres guardar el Súper para una emergencia y te preparas para defender.', eu: 'Nahiago duzu Superra larrialdi baterako gorde eta defendatzeko prestatzen zara.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Un enemigo se esconde detrás de una pared. Puedo gastar <span class="text-sky-400">1 Recurso</span> para lanzar un <span class="text-yellow-300">cactus con efecto</span> y alcanzarle.',
                eu: 'Etsai bat horma baten atzean ezkutatzen da. <span class="text-sky-400">Baliabide 1</span> gastatu dezaket <span class="text-yellow-300">efektudun kaktus</span> bat jaurtitzeko eta harrapatzeko.'
            },
            options: [
                { text: { es: '¡Tiro con efecto!', eu: 'Efektudun jaurtiketa!' }, cost: 1, narrative: { es: '¡El cactus hace una curva perfecta y golpea al enemigo! Ganas mucho poder.', eu: 'Kaktusak kurba perfektu bat egiten du eta etsaia jotzen du! Indar asko irabazten duzu.' }, effects: { poder: 20 } },
                { text: { es: 'Busca otro ángulo', eu: 'Bilatu beste angelu bat' }, narrative: { es: 'Prefieres no gastar recursos y buscas una forma más tradicional de atacar.', eu: 'Nahiago duzu baliabiderik ez gastatu eta erasotzeko modu tradizionalago bat bilatu.' }, effects: { poder: 5 } }
            ]
        },
        {
            description: {
                es: 'Estoy herido. Si uso mi Súper sobre mí mismo, las espinas me <span class="text-green-400">curarán</span> poco a poco.',
                eu: 'Zaurituta nago. Nire Superra nire gainean erabiltzen badut, arantzek pixkanaka <span class="text-green-400">sendatuko</span> naute.'
            },
            options: [
                { text: { es: '¡Cúrate con el Súper!', eu: 'Sendatu Superrarekin!' }, narrative: { es: 'Usas el poder de las espinas para curarte. Gastas el Súper pero recuperas mucha vida.', eu: 'Arantzen indarra erabiltzen duzu sendatzeko. Superra gastatzen duzu baina bizitza asko berreskuratzen duzu.' }, effects: { vida: 30, superpoder: -100 } },
                { text: { es: 'Aguanta el dolor', eu: 'Eutsi minari' }, narrative: { es: 'Prefieres guardar el Súper para atacar. El dolor te hace más fuerte.', eu: 'Nahiago duzu Superra erasotzeko gorde. Minak indartsuago egiten zaitu.' }, effects: { vida: -5, superpoder: 15 } }
            ]
        },
        {
            description: {
                es: 'Los enemigos no nos han visto. Puedo <span class="text-gray-400">acercarme en silencio</span> y lanzar una granada de cactus en medio de ellos.',
                eu: 'Etsaiek ez gaituzte ikusi. <span class="text-gray-400">Isilean hurbil</span> naiteke eta kaktus-granada bat jaurti haien erdian.'
            },
            options: [
                { text: { es: '¡Ataque silencioso!', eu: 'Eraso isila!' }, narrative: { es: 'El ataque por sorpresa es devastador, pero te expones mucho al contraataque.', eu: 'Ezusteko erasoa suntsitzailea da, baina asko arriskatzen zara kontraerasoan.' }, effects: { poder: 25, vida: -15 } },
                { text: { es: 'Ataca desde aquí', eu: 'Eraso hemendik' }, narrative: { es: 'Es más seguro atacar desde lejos, aunque el impacto es menor.', eu: 'Seguruagoa da urrutitik erasotzea, nahiz eta inpaktua txikiagoa izan.' }, effects: { poder: 10 } }
            ]
        }
    ]
});
