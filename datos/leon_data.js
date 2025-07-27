window.gameCharacters.push({
    name: 'Leon',
    img: 'avatares/leon.png',
    dilemmas: [
        {
            description: {
                es: '¡Hay muchos enemigos! Puedo usar mi Súper para volverme <span class="text-gray-400">invisible</span> y pasar sin que nos vean.',
                eu: 'Etsai asko daude! Nire Superra erabili dezaket <span class="text-gray-400">ikusezin</span> bihurtu eta ikusi gabe pasatzeko.'
            },
            options: [
                { text: { es: '¡Hazte invisible!', eu: 'Egin zaitez ikusezin!' }, narrative: { es: 'Pasáis sigilosamente entre los enemigos. ¡Ni se han enterado!', eu: 'Isilean pasatzen zarete etsaien artetik. Ez dira konturatu ere egin!' }, effects: { vida: 15, superpoder: -25 } },
                { text: { es: '¡Lucha contra ellos!', eu: 'Egin borroka haien aurka!' }, narrative: { es: 'Decides luchar. Es una batalla dura y pierdes vida.', eu: 'Borroka egitea erabakitzen duzu. Borroka gogorra da eta bizitza galtzen duzu.' }, effects: { poder: 10, superpoder: 15, vida: -15 } }
            ]
        },
        {
            description: {
                es: 'Veo a un enemigo importante solo. Podría usar la <span class="text-gray-400">invisibilidad</span> para un <span class="text-yellow-400">golpe sorpresa</span>.',
                eu: 'Etsai garrantzitsu bat bakarrik ikusten dut. <span class="text-gray-400">Ikusezintasuna</span> erabil nezake <span class="text-yellow-400">ezusteko kolpe</span> bat emateko.'
            },
            options: [
                { text: { es: '¡Ataque sorpresa!', eu: 'Ezusteko erasoa!' }, narrative: { es: '¡El ataque es un éxito! Ganas mucho poder y cargas Súper, pero te llevas un golpe al escapar.', eu: 'Erasoa arrakastatsua da! Indar asko irabazi eta Superra kargatzen duzu, baina kolpe bat hartzen duzu ihes egitean.' }, effects: { poder: 20, superpoder: 25, vida: -10 } },
                { text: { es: 'No te arriesgues', eu: 'Ez arriskatu' }, narrative: { es: 'Prefieres no arriesgarte. Buscáis una posición más segura.', eu: 'Nahiago duzu ez arriskatu. Posizio seguruago bat bilatzen duzue.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: '¡Nos han acorralado! Puedo crear un <span class="text-blue-300">clon</span> para que los enemigos le disparen a él mientras escapamos.',
                eu: 'Inguratu gaituzte! <span class="text-blue-300">Klon</span> bat sor dezaket etsaiek berari tiro egiteko guk ihes egiten dugun bitartean.'
            },
            options: [
                { text: { es: '¡Crea un clon!', eu: 'Sortu klon bat!' }, narrative: { es: '¡El truco funciona! Los enemigos disparan al clon y vosotros os ponéis a salvo.', eu: 'Trikimailuak funtzionatzen du! Etsaiek klonari tiro egiten diote eta zuek salbu jartzen zarete.' }, effects: { vida: 20, superpoder: -15 } },
                { text: { es: '¡Lucha para salir!', eu: 'Borroka egin ateratzeko!' }, narrative: { es: 'Lucháis para abriros paso. Es arriesgado y pierdes vida.', eu: 'Bidea irekitzeko borrokatzen duzue. Arriskutsua da eta bizitza galtzen duzu.' }, effects: { poder: 10, vida: -20 } }
            ]
        },
        {
            description: {
                es: 'No sabemos qué hay más adelante. Puedo hacerme <span class="text-gray-400">invisible</span> para <span class="text-yellow-300">explorar</span> el camino sin peligro.',
                eu: 'Ez dakigu zer dagoen aurrerago. <span class="text-gray-400">Ikusezin</span> bihur naiteke bidea arriskurik gabe <span class="text-yellow-300">esploratzeko</span>.'
            },
            options: [
                { text: { es: 'Explora el camino', eu: 'Esploratu bidea' }, narrative: { es: 'Leon explora y vuelve con información. Ahora estáis mejor preparados.', eu: 'Leonek esploratu eta informazioarekin itzultzen da. Orain hobeto prestatuta zaudete.' }, effects: { vida: 10, poder: 5 } },
                { text: { es: '¡Vamos todos juntos!', eu: 'Goazen denok batera!' }, narrative: { es: 'Avanzáis todos juntos. Es más rápido, pero más peligroso.', eu: 'Denok batera aurrera egiten duzue. Azkarragoa da, baina arriskutsuagoa.' }, effects: { poder: 5, vida: -10 } }
            ]
        },
        {
            description: {
                es: 'Hay una caja de poder sin vigilar. Puedo volverme invisible y <span class="text-sky-400">robarla</span> sin que me vean.',
                eu: 'Zaindu gabeko indar-kutxa bat dago. Ikusezin bihurtu eta <span class="text-sky-400">lapurtu</span> dezaket ikusi gabe.'
            },
            options: [
                { text: { es: '¡Roba la caja!', eu: 'Lapurtu kutxa!' }, narrative: { es: '¡El robo es un éxito! Consigues el poder sin que nadie se dé cuenta.', eu: 'Lapurreta arrakastatsua da! Inor konturatu gabe lortzen duzu indarra.' }, effects: { poder: 20, superpoder: -10 } },
                { text: { es: 'Es demasiado arriesgado', eu: 'Arriskutsuegia da' }, narrative: { es: 'No te fías y prefieres no arriesgar la posición por una caja.', eu: 'Ez zara fio eta nahiago duzu posizioa ez arriskatu kutxa batengatik.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Estoy escondido en un arbusto. Puedo lanzar mis <span class="text-yellow-300">shurikens</span> desde aquí sin que sepan de dónde vienen.',
                eu: 'Sasi batean ezkutatuta nago. Nire <span class="text-yellow-300">shurikenak</span> hemendik jaurti ditzaket nondik datozen jakin gabe.'
            },
            options: [
                { text: { es: 'Dispara desde el arbusto', eu: 'Tiro egin sasitik' }, narrative: { es: 'Los shurikens impactan por sorpresa, causando mucho daño.', eu: 'Shurikenek ezustean jotzen dute, kalte handia eraginez.' }, effects: { poder: 20 } },
                { text: { es: 'Espera a que se acerquen', eu: 'Itxaron hurbildu arte' }, narrative: { es: 'Prefieres esperar el momento perfecto para un ataque a corta distancia.', eu: 'Nahiago duzu une egokiaren zain egon distantzia laburreko eraso baterako.' }, effects: { vida: 5 } }
            ]
        },
        {
            description: {
                es: 'Si gasto <span class="text-sky-400">2 Recursos</span> en <span class="text-green-400">caramelos de energía</span>, mi velocidad y poder aumentarán mucho.',
                eu: '<span class="text-sky-400">2 Baliabide</span> gastatzen baditut <span class="text-green-400">energia-gozokietan</span>, nire abiadura eta indarra asko handituko dira.'
            },
            options: [
                { text: { es: '¡Toma los caramelos!', eu: 'Hartu gozokiak!' }, cost: 2, narrative: { es: '¡El subidón de azúcar te hace súper rápido y fuerte!', eu: 'Azukre-igoerak super azkar eta indartsu bihurtzen zaitu!' }, effects: { poder: 25 } },
                { text: { es: 'Guarda los recursos', eu: 'Gorde baliabideak' }, narrative: { es: 'No es momento para dulces. Te concentras en la batalla.', eu: 'Ez da gozokietarako unea. Borrokan kontzentratzen zara.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo lanzar una <span class="text-gray-500">bomba de humo</span> (<span class="text-sky-400">1 Recurso</span>) para confundir a los enemigos.',
                eu: '<span class="text-gray-500">Ke-bonba</span> bat jaurti dezaket (<span class="text-sky-400">Baliabide 1</span>) etsaiak nahasteko.'
            },
            options: [
                { text: { es: '¡Bomba de humo!', eu: 'Ke-bonba!' }, cost: 1, narrative: { es: 'El humo lo cubre todo. Los enemigos están confusos y podéis curaros.', eu: 'Keak dena estaltzen du. Etsaiak nahastuta daude eta senda zaitezkete.' }, effects: { vida: 20 } },
                { text: { es: 'No gastes el humo', eu: 'Ez gastatu kea' }, narrative: { es: 'Prefieres guardar el humo para una emergencia y seguir atacando.', eu: 'Nahiago duzu kea larrialdi baterako gorde eta erasotzen jarraitu.' }, effects: { poder: 10 } }
            ]
        },
        {
            description: {
                es: 'Ese enemigo tiene un objeto brillante. Podría intentar <span class="text-sky-400">robárselo</span> con sigilo.',
                eu: 'Etsai horrek objektu distiratsu bat du. Isilean <span class="text-sky-400">lapurtzen</span> saia ninteke.'
            },
            options: [
                { text: { es: 'Intenta el robo', eu: 'Saiatu lapurtzen' }, narrative: { es: '¡Lo consigues! Robas el objeto, que resulta ser un potenciador de Súper.', eu: 'Lortzen duzu! Objektua lapurtzen duzu, Super baten indartzailea dena.' }, effects: { superpoder: 40, vida: -10 } },
                { text: { es: 'No es el momento', eu: 'Ez da unea' }, narrative: { es: 'No quieres arriesgarte a que te descubran por un objeto.', eu: 'Ez duzu arriskatu nahi objektu batengatik aurkitua izateko.' }, effects: { } }
            ]
        },
        {
            description: {
                es: 'Puedo seguir a ese enemigo invisiblemente para ver a dónde va.',
                eu: 'Etsai horri ikusezin jarrai diezaioket nora doan ikusteko.'
            },
            options: [
                { text: { es: 'Síguele', eu: 'Jarrai iezaiozu' }, narrative: { es: 'Descubres una debilidad en su defensa. ¡Vuestro poder aumenta!', eu: 'Bere defentsan ahultasun bat aurkitzen duzu. Zuen indarra handitzen da!' }, effects: { poder: 20 } },
                { text: { es: 'No te separes', eu: 'Ez zaitez banandu' }, narrative: { es: 'Prefieres que el equipo permanezca unido y no correr riesgos.', eu: 'Nahiago duzu taldea batuta egotea eta arriskurik ez hartzea.' }, effects: { vida: 5 } }
            ]
        }
    ]
});
