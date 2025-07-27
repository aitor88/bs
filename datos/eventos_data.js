window.gameEvents = [
    {
        name: { es: "Zona de Curación", eu: "Sendatze Eremua" },
        message: { es: "¡Habéis encontrado un oasis de vida!", eu: "Bizi oasi bat aurkitu duzue!" },
        img: "imagenes/evento_vida.png",
        type: "immediate",
        narrative: { es: "Un momento de calma os permite recuperar fuerzas.", eu: "Une lasai batek indarrak berreskuratzeko aukera ematen dizue." },
        effects: { vida: 20 }
    },
    {
        name: { es: "Cargamento de Munición", eu: "Munizio Karga" },
        message: { es: "¡Encontráis un alijo de munición especial!", eu: "Munizio bereziko biltegi bat aurkitu duzue!" },
        img: "imagenes/evento_poder.png",
        type: "immediate",
        narrative: { es: "Vuestras armas ahora pegan más fuerte.", eu: "Zuen armek orain gogorrago jotzen dute." },
        effects: { poder: 15 }
    },
    {
        name: { es: "Escudo de Chatarra", eu: "Txatarra-Ezkutua" },
        message: { es: "¡Usáis unos restos de metal para mejorar vuestra cobertura!", eu: "Metalezko hondar batzuk erabiltzen dituzue zuen babesa hobetzeko!" },
        img: "imagenes/evento_poder.png",
        type: "immediate",
        narrative: { es: "Esta chatarra os protegerá del siguiente golpe.", eu: "Txatarra honek hurrengo kolpetik babestuko zaituzte." },
        effects: { poder: 15 }
    },
    {
        name: { es: "¡Emboscada!", eu: "Segada!" },
        message: { es: "¡Caéis en una trampa enemiga!", eu: "Etsaien tranpa batean erori zarete!" },
        img: "imagenes/evento_peligro.png",
        type: "immediate",
        narrative: { es: "El ataque sorpresa os pilla desprevenidos. ¡Habéis perdido vida!", eu: "Ezusteko erasoak prestatu gabe harrapatu zaituzte. Bizitza galdu duzue!" },
        effects: { vida: -25 }
    },
    {
        name: { es: "Explosión de Adrenalina", eu: "Adrenalina Leherketa" },
        message: { es: "¡Un susto os da un subidón de energía!", eu: "Susto batek energia igoera ematen dizue!" },
        img: "imagenes/evento_super.png",
        type: "immediate",
        narrative: { es: "¡El corazón os va a mil! Vuestro Superpoder se ha cargado de golpe.", eu: "Bihotza mila abiaduran doa! Zuen Superboterea bat-batean kargatu da." },
        effects: { superpoder: 30 }
    },
    {
        name: { es: "Recursos Olvidados", eu: "Ahaztutako Baliabideak" },
        message: { es: "¡Encontráis una mochila con recursos abandonada!", eu: "Baliabideekin utzitako motxila bat aurkitu duzue!" },
        img: "imagenes/evento_recursos.png",
        type: "immediate",
        narrative: { es: "¡Qué suerte! Encontráis un par de objetos útiles.", eu: "A ze zortea! Objektu baliagarri pare bat aurkitu dituzue." },
        effects: { recursos: 2 }
    },
    {
        name: { es: "Caja Misteriosa", eu: "Kutxa Misteriotsua" },
        message: { es: "¡Habéis encontrado una Caja Brawl abandonada!", eu: "Utzitako Brawl Kutxa bat aurkitu duzue!" },
        img: "imagenes/evento_caja.png",
        type: "choice",
        options: [
            { text: { es: "Coger Potenciador de Poder", eu: "Indar Bultzatzailea Hartu" }, narrative: { es: "¡El potenciador aumenta vuestro poder al máximo!", eu: "Bultzatzaileak zuen indarra gorenera igotzen du!" }, effects: { poder: 30 } },
            { text: { es: "Coger Botiquín Grande", eu: "Botikin Handia Hartu" }, narrative: { es: "¡El botiquín recupera gran parte de vuestra vida!", eu: "Botikinak zuen bizitzaren zati handi bat berreskuratzen du!" }, effects: { vida: 30 } }
        ]
    },
    {
        name: { es: "Atajo Peligroso", eu: "Bidezidor Arriskutsua" },
        message: { es: "Hay un atajo, pero parece lleno de trampas.", eu: "Bidezidor bat dago, baina tranpaz beteta dirudi." },
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: { es: "Tomar el atajo", eu: "Bidezidorra hartu" }, narrative: { es: "¡Conseguís pasar, pero una trampa os daña!", eu: "Pasatzea lortzen duzue, baina tranpa batek kaltetzen zaituzte!" }, effects: { vida: -20, superpoder: 20 } },
            { text: { es: "Ir por el camino largo", eu: "Bide luzetik joan" }, narrative: { es: "El camino es seguro, pero perdéis una oportunidad de atacar.", eu: "Bidea segurua da, baina erasotzeko aukera bat galtzen duzue." }, effects: { poder: -10, vida: 10 } }
        ]
    },
    {
        name: { es: "Brawler Neutral", eu: "Brawler Neutrala" },
        message: { es: "Un Brawler neutral os pide ayuda a cambio de un favor.", eu: "Brawler neutral batek laguntza eskatzen dizue mesede baten truke." },
        img: "imagenes/evento_pregunta.png",
        type: "choice",
        options: [
            { text: { es: "Ayudarle", eu: "Lagundu" }, narrative: { es: "Le ayudáis y, en agradecimiento, os da un recurso valioso.", eu: "Laguntzen diozue eta, esker onez, baliabide baliotsu bat ematen dizue." }, effects: { recursos: 1, vida: -10 } },
            { text: { es: "Ignorarle", eu: "Ez ikusi egin" }, narrative: { es: "Seguís vuestro camino. No ganáis nada, pero tampoco perdéis nada.", eu: "Zuen bidea jarraitzen duzue. Ez duzue ezer irabazten, baina ez duzue ezer galtzen ere." }, effects: { } }
        ]
    },
    {
        name: { es: "Generador Inestable", eu: "Sorgailu Ezegonkorra" },
        message: { es: "Veis un generador. Podéis sobrecargarlo para que explote o usarlo para un escudo.", eu: "Sorgailu bat ikusten duzue. Gainkargatu dezakezue lehertzeko edo ezkutu baterako erabili." },
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: { es: "¡Que explote!", eu: "Leher dadila!" }, narrative: { es: "¡BOOM! La explosión daña a los enemigos, ¡pero también a vosotros!", eu: "BOOM! Leherketak etsaiak kaltetzen ditu, baina zuek ere bai!" }, effects: { poder: 30, vida: -15 } },
            { text: { es: "¡Activad los escudos!", eu: "Aktibatu ezkutuak!" }, narrative: { es: "Usáis la energía para crear un escudo protector muy fuerte.", eu: "Energia erabiltzen duzue babes-ezkutu oso indartsu bat sortzeko." }, effects: { poder: 20, vida: 5 } }
        ]
    },
    {
        name: { es: "Poción Misteriosa", eu: "Edabe Misteriotsua" },
        message: { es: "Encuentras dos pociones: una roja y una azul. ¿Cuál bebes?", eu: "Bi edabe aurkitu dituzu: gorri bat eta urdin bat. Zein edaten duzu?" },
        img: "imagenes/evento_pregunta.png",
        type: "choice",
        options: [
            { text: { es: "Beber la poción roja", eu: "Edan edabe gorria" }, narrative: { es: "¡Era una poción de furia! Tu poder sube, pero te vuelves imprudente.", eu: "Amorru-edabe bat zen! Zure indarra igotzen da, baina zuhurtziagabe bihurtzen zara." }, effects: { poder: 25, vida: -10 } },
            { text: { es: "Beber la poción azul", eu: "Edan edabe urdina" }, narrative: { es: "¡Era una poción de aguante! Tu vida se recupera al instante.", eu: "Erresistentzia-edabe bat zen! Zure bizitza berehala berreskuratzen da." }, effects: { vida: 30 } }
        ]
    },
    {
        name: { es: "El Desafío", eu: "Erronka" },
        message: { es: "Un rival te desafía a un duelo rápido. Si ganas, la recompensa es grande.", eu: "Aurkari batek duelu azkar batera desafiatzen zaitu. Irabaziz gero, saria handia da." },
        img: "imagenes/evento_poder.png",
        type: "choice",
        options: [
            { text: { es: "Aceptar el duelo", eu: "Onartu duelua" }, narrative: { es: "¡Ganas el duelo! ¡El subidón de moral carga tu Superpoder!", eu: "Duelua irabazten duzu! Moral igoerak zure Superboterea kargatzen du!" }, effects: { superpoder: 50, vida: -10 } },
            { text: { es: "Rechazarlo", eu: "Ukatu" }, narrative: { es: "Decides no luchar. El rival se ríe de ti, pero no pierdes vida.", eu: "Ez borrokatzea erabakitzen duzu. Aurkariak zutaz barre egiten du, baina ez duzu bizitza galtzen." }, effects: { } }
        ]
    },
    {
        name: { es: "Tesoro Enterrado", eu: "Lurperatutako Altxorra" },
        message: { es: "Detectas una señal de un tesoro enterrado. Desenterrarlo os dejará expuestos.", eu: "Lurperatutako altxor baten seinale bat detektatzen duzu. Lurpetik ateratzeak agerian utziko zaituzte." },
        img: "imagenes/evento_recursos.png",
        type: "choice",
        options: [
            { text: { es: "¡A cavar!", eu: "Zulatzera!" }, narrative: { es: "¡Encontráis un par de recursos extra!", eu: "Baliabide gehigarri pare bat aurkitu duzue!" }, effects: { recursos: 2, vida: -15 } },
            { text: { es: "No hay tiempo", eu: "Ez dago astirik" }, narrative: { es: "Preferís no arriesgaros y seguís adelante.", eu: "Nahiago duzue ez arriskatu eta aurrera jarraitu." }, effects: { } }
        ]
    },
    {
        name: { es: "Portal Misterioso", eu: "Atari Misteriotsua" },
        message: { es: "Aparece un portal extraño. ¿Lo cruzáis?", eu: "Atari arraro bat agertu da. Zeharkatzen duzue?" },
        img: "imagenes/evento_pregunta.png",
        type: "choice",
        options: [
            { text: { es: "¡Cruzar el portal!", eu: "Zeharkatu ataria!" }, narrative: { es: "¡Aparecéis en una zona segura! Os saltáis el daño de este asalto.", eu: "Eremu seguru batean agertzen zarete! Eraso honetako kaltea saihesten duzue." }, effects: { vida: 10 } },
            { text: { es: "No, gracias", eu: "Ez, eskerrik asko" }, narrative: { es: "No os fiáis del portal. Mejor lo conocido.", eu: "Ez zarete atariaz fio. Hobe ezaguna." }, effects: { } }
        ]
    },
    {
        name: { es: "Mercader sospechoso", eu: "Merkatari Susmagarria" },
        message: { es: "Un mercader os ofrece un objeto increíble por 3 Recursos.", eu: "Merkatari batek objektu sinestezin bat eskaintzen dizue 3 Baliabideren truke." },
        img: "imagenes/evento_recursos.png",
        type: "choice",
        options: [
            { text: { es: "Comprar objeto", eu: "Erosi objektua" }, cost: 3, narrative: { es: "¡El objeto es legendario! Vuestro poder aumenta muchísimo.", eu: "Objektua legendarioa da! Zuen indarra izugarri handitzen da." }, effects: { poder: 40 } },
            { text: { es: "Es una estafa", eu: "Iruzurra da" }, narrative: { es: "No te fías del mercader y guardas tus recursos.", eu: "Ez zara merkatariaz fio eta zure baliabideak gordetzen dituzu." }, effects: { } }
        ]
    },
    {
        name: { es: "Robot Gigante", eu: "Robot Erraldoia" },
        message: { es: "¡Un Robot Gigante os corta el paso! ¡Es muy peligroso!", eu: "Robot Erraldoi batek bidea ixten dizue! Oso arriskutsua da!" },
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: { es: "¡Concentrad el fuego!", eu: "Kontzentratu sua!" }, narrative: { es: "¡Le dais con todo! Cae, pero su explosión os daña.", eu: "Dena ematen diozue! Erortzen da, baina bere leherketak kaltetzen zaituzte." }, effects: { superpoder: 40, vida: -25 } },
            { text: { es: "¡Corred!", eu: "Korrika!" }, narrative: { es: "Escapáis por los pelos, pero estáis agotados.", eu: "Ozta-ozta ihes egiten duzue, baina akituta zaudete." }, effects: { vida: -10, poder: -10 } }
        ]
    },
    {
        name: { es: "Tormenta Eléctrica", eu: "Ekaitz Elektrikoa" },
        message: { es: "¡Empieza una tormenta eléctrica! Un rayo podría cargar vuestro Súper.", eu: "Ekaitz elektriko bat hasten da! Tximista batek zuen Superra karga lezake." },
        img: "imagenes/evento_super.png",
        type: "choice",
        options: [
            { text: { es: "¡Usar un pararrayos!", eu: "Erabili tximistorratz bat!" }, narrative: { es: "¡Funciona! Un rayo cae y carga vuestro Superpoder al máximo.", eu: "Funtzionatzen du! Tximista bat erori eta zuen Superboterea gorenera kargatzen du." }, effects: { superpoder: 100, vida: -10 } },
            { text: { es: "¡A cubierto!", eu: "Babesera!" }, narrative: { es: "Buscáis refugio. No ganáis nada, pero estáis a salvo.", eu: "Babeslekua bilatzen duzue. Ez duzue ezer irabazten, baina salbu zaudete." }, effects: { vida: 5 } }
        ]
    },
    {
        name: { es: "Fuente de la Suerte", eu: "Zortearen Iturria" },
        message: { es: "Encontráis una fuente. ¿Echáis un recurso para pedir un deseo?", eu: "Iturri bat aurkitu duzue. Baliabide bat botatzen duzue desio bat eskatzeko?" },
        img: "imagenes/evento_vida.png",
        type: "choice",
        options: [
            { text: { es: "Pedir un deseo", eu: "Desio bat eskatu" }, cost: 1, narrative: { es: "¡El deseo se cumple! Recuperáis mucha vida.", eu: "Desioa betetzen da! Bizitza asko berreskuratzen duzue." }, effects: { vida: 35 } },
            { text: { es: "No malgastar", eu: "Ez xahutu" }, narrative: { es: "No crees en esas cosas. Guardas el recurso.", eu: "Ez duzu horrelakoetan sinesten. Baliabidea gordetzen duzu." }, effects: { } }
        ]
    },
    {
        name: { es: "Trampa de Pinchos", eu: "Ziri-Tranpa" },
        message: { es: "El suelo está lleno de pinchos. Podéis intentar saltarlos o desactivar la trampa con 1 Recurso.", eu: "Lurzorua ziriz beteta dago. Salto egiten saia zaitezkete edo tranpa desaktibatu Baliabide 1-ekin." },
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: { es: "¡Saltad con cuidado!", eu: "Jauzi kontuz!" }, narrative: { es: "Algunos no lo consiguen y el equipo pierde vida.", eu: "Batzuek ez dute lortzen eta taldeak bizitza galtzen du." }, effects: { vida: -20 } },
            { text: { es: "Desactivar trampa", eu: "Desaktibatu tranpa" }, cost: 1, narrative: { es: "Gastáis un recurso y pasáis sin problemas.", eu: "Baliabide bat gastatu eta arazorik gabe pasatzen zarete." }, effects: { } }
        ]
    },
    {
        name: { es: "Barriles Explosivos", eu: "Upel Lehergarriak" },
        message: { es: "Hay barriles explosivos cerca de los enemigos. Podéis dispararles.", eu: "Upel lehergarriak daude etsaien ondoan. Tiro egin diezaiekezue." },
        img: "imagenes/evento_poder.png",
        type: "choice",
        options: [
            { text: { es: "¡Dispara a los barriles!", eu: "Tiro egin upelei!" }, narrative: { es: "¡BOOM! La explosión acaba con los enemigos, pero la onda expansiva os alcanza.", eu: "BOOM! Leherketak etsaiekin amaitzen du, baina uhin hedatzaileak harrapatzen zaituzte." }, effects: { poder: 20, vida: -15 } },
            { text: { es: "No te arriesgues", eu: "Ez arriskatu" }, narrative: { es: "Es demasiado peligroso. Buscáis otra forma de atacar.", eu: "Arriskutsuegia da. Erasotzeko beste modu bat bilatzen duzue." }, effects: { poder: 5 } }
        ]
    },
    {
        name: { es: "Robot Amistoso", eu: "Robot Adiskidetsua" },
        message: { es: "¡Un pequeño robot os ofrece ayuda! ¿Aceptáis sus piezas o su ayuda en combate?", eu: "Robot txiki batek laguntza eskaintzen dizue! Bere piezak onartzen dituzue ala borrokan laguntzea?" },
        img: "imagenes/evento_recursos.png",
        type: "choice",
        options: [
            { text: { es: "Aceptar sus piezas", eu: "Onartu bere piezak" }, narrative: { es: "Desmontáis al robot y conseguís recursos muy valiosos.", eu: "Robota desmuntatu eta baliabide oso baliotsuak lortzen dituzue." }, effects: { recursos: 3 } },
            { text: { es: "Aceptar su ayuda", eu: "Onartu bere laguntza" }, narrative: { es: "El robot se une a vosotros temporalmente, ¡vuestro poder aumenta!", eu: "Robota zuekin batzen da aldi baterako, zuen indarra handitzen da!" }, effects: { poder: 20 } }
        ]
    }
];
