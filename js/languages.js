const translations = {
    es: {
        // --- Menús y UI General ---
        newGame: "Nueva Partida",
        instructions: "Instrucciones",
        ranking: "Ranking",
        back: "Volver",
        continue: "Continuar",
        understood: "Entendido",
        backToMenu: "Volver al Menú",
        toTheBattle: "¡A la Batalla!",
        chooseYourName: "Elige tu Nombre",
        writeYourName: "Escribe tu nombre",
        emptyInventory: "Inventario vacío",
        
        // --- Stats ---
        player: "JUGADOR",
        assault: "ASALTO",
        health: "VIDA",
        power: "PODER",
        resources: "RECURSOS",
        superpower: "SUPERPODER",

        // --- Pantalla de Instrucciones ---
        objective: "OBJETIVO:",
        objectiveText: "¡Aguanta el máximo de asaltos que puedas!",
        decisions: "DECISIONES:",
        decisionsText: "En cada turno, un Brawler te dará dos opciones. ¡Elige con cuidado!",
        stats: "ESTADÍSTICAS:",
        statsText: "Tus elecciones afectan a tu Vida, Poder, Recursos y Superpoder.",
        enemies: "ENEMIGOS:",
        enemiesText: "Después de cada turno, los enemigos atacan. ¡El poder defensivo es clave!",
        surprises: "SORPRESAS:",
        surprisesText: "A veces, aparecerán eventos y acertijos con grandes recompensas.",
        superpowerTitle: "SUPERPODER:",
        superpowerText: "Al 100%, ¡úsalo para obtener una gran ventaja!",

        // --- Pantalla de Derrota ---
        defeated: "¡DERROTADO!",
        defeatedReasonNoHealth: "La vida de tu escuadrón ha llegado a cero.",
        defeatedReasonPower: "Tu poder es tan alto que has perdido el control.",
        defeatedReasonGreed: "Has acumulado demasiados recursos y te has vuelto un blanco fácil.",
        youLasted: "Has aguantado",
        assaults: "asaltos.",
        calculatingRank: "Calculando tu posición en el ranking...",
        rankPosition: (rank) => `¡Has quedado en la <span class="font-bold text-yellow-300">${rank}ª</span> posición!`,
        scoreSaved: "Tu puntuación ha sido guardada.",

        // --- Ranking ---
        rankingTitle: "🏆 Ranking 🏆",
        rankHeader: "#",
        nameHeader: "Nombre",
        collectiblesHeader: "💎",
        assaultsHeader: "Asaltos",
        loading: "Cargando...",
        beTheFirst: "¡Sé el primero en jugar!",
        errorLoadingRank: "Error al cargar ranking.",

        // --- Juego ---
        super: "SUPER",
        superNarrative: "¡Un impulso de poder te da vida, poder y un recurso extra!",
        superTitle: "¡SUPERPODER!",
        enemyAttack: "Los enemigos contraatacan.",
        eventTitle: (name) => `¡EVENTO: ${name}!`,
        challengeTitle: "¡ACERTIJO!",
        correct: "¡CORRECTO!",
        incorrect: "¡INCORRECTO!",
        
        // --- Notificaciones ---
        notEnoughResources: "¡No tienes suficientes recursos!",
        notEnoughSuper: "¡No tienes superpoder suficiente!",
    },
    eu: {
        // --- Menús y UI General ---
        newGame: "Joko Berria",
        instructions: "Argibideak",
        ranking: "Sailkapena",
        back: "Atzera",
        continue: "Jarraitu",
        understood: "Ulertuta",
        backToMenu: "Menu Nagusira Itzuli",
        toTheBattle: "Borrokarako Prest!",
        chooseYourName: "Aukeratu Zure Izena",
        writeYourName: "Idatzi zure izena",
        emptyInventory: "Inbentarioa hutsik",

        // --- Stats ---
        player: "JOKALARIA",
        assault: "ERASOA",
        health: "BIZITZA",
        power: "INDARRA",
        resources: "BALIABIDEAK",
        superpower: "SUPERBOTEREA",

        // --- Pantalla de Instrucciones ---
        objective: "HELBURUA:",
        objectiveText: "Eutsi ahal dituzun eraso gehien!",
        decisions: "ERABAKIAK:",
        decisionsText: "Txanda bakoitzean, Brawler batek bi aukera emango dizkizu. Aukeratu zuhurki!",
        stats: "ESTATISTIKAK:",
        statsText: "Zure aukerek zure Bizitza, Indarra, Baliabideak eta Superboterea aldatzen dituzte.",
        enemies: "ETSAIAK:",
        enemiesText: "Txanda bakoitzaren ondoren, etsaiek erasotzen dute. Defentsa-indarra funtsezkoa da!",
        surprises: "EZUSTEKOAK:",
        surprisesText: "Batzuetan, sari handiak dituzten gertaerak eta asmakizunak agertuko dira.",
        superpowerTitle: "SUPERBOTEREA:",
        superpowerText: "%100ean dagoenean, erabili abantaila handia lortzeko!",

        // --- Pantalla de Derrota ---
        defeated: "GARRAITUA!",
        defeatedReasonNoHealth: "Zure eskuadroiaren bizitza zerora iritsi da.",
        defeatedReasonPower: "Zure indarra hain da handia, kontrola galdu duzula.",
        defeatedReasonGreed: "Baliabide gehiegi metatu dituzu eta jomuga erraza bihurtu zara.",
        youLasted: "Eutsi diozu",
        assaults: "eraso.",
        calculatingRank: "Zure postua kalkulatzen sailkapenean...",
        rankPosition: (rank) => `<span class="font-bold text-yellow-300">${rank}.</span> postuan geratu zara!`,
        scoreSaved: "Zure puntuazioa gorde da.",

        // --- Ranking ---
        rankingTitle: "🏆 Sailkapena 🏆",
        rankHeader: "#",
        nameHeader: "Izena",
        collectiblesHeader: "💎",
        assaultsHeader: "Erasoak",
        loading: "Kargatzen...",
        beTheFirst: "Izan zaitez lehena jokatzen!",
        errorLoadingRank: "Errorea sailkapena kargatzean.",

        // --- Juego ---
        super: "SUPER",
        superNarrative: "Botere bultzada batek bizitza, indarra eta baliabide gehigarri bat ematen dizkizu!",
        superTitle: "¡SUPERBOTEREA!",
        enemyAttack: "Etsaiek kontraeraso egiten dute.",
        eventTitle: (name) => `GERTAERA: ${name}!`,
        challengeTitle: "ASMAKIZUNA!",
        correct: "ZUZENA!",
        incorrect: "OKERRA!",
        
        // --- Notificaciones ---
        notEnoughResources: "Ez duzu nahikoa baliabide!",
        notEnoughSuper: "Ez duzu nahikoa superbotere!",
    }
};
