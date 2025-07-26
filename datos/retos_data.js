// Contenido para retos_data.js

window.gameChallenges = [
    {
        reward: { name: "Gema Preciosa", image: "coleccionables/gema.png" },
        questions: [
            { 
                difficulty: "easy",
                challenge: "¿De qué color es la gema que aparece en el centro de Atrapagemas?",
                options: [{ text: "Azul", correct: false }, { text: "Morada", correct: true }, { text: "Verde", correct: false }, { text: "Roja", correct: false }],
                success: "¡Correcto! La gema es morada. ¡Te llevas una!",
                failure: "¡Incorrecto! La gema era morada."
            },
            { 
                difficulty: "medium",
                challenge: "¿Cuántas gemas necesita un equipo para iniciar la cuenta atrás en Atrapagemas?",
                options: [{ text: "8", correct: false }, { text: "12", correct: false }, { text: "10", correct: true }, { text: "15", correct: false }],
                success: "¡Exacto! Se necesitan 10 gemas. ¡Te has ganado una!",
                failure: "¡Casi! La cuenta atrás empieza con 10 gemas."
            },
            { 
                difficulty: "hard",
                challenge: "Además de la mina, ¿qué Brawler del trío de los mineros lleva un casco con una luz?",
                options: [{ text: "Jacky", correct: false }, { text: "Gus", correct: false }, { text: "Carl", correct: true }, { text: "Dynamike", correct: false }],
                success: "¡Respuesta de experto! Es Carl. ¡Toma una gema por tu sabiduría!",
                failure: "¡Respuesta difícil! Era Carl."
            }
        ]
    },
    {
        reward: { name: "Botella de Barley", image: "coleccionables/botella_barley.png" },
        questions: [
            { 
                difficulty: "easy",
                challenge: "¿Qué Brawler es un robot y lanza botellas?",
                options: [{ text: "Dynamike", correct: false }, { text: "Barley", correct: true }, { text: "Tick", correct: false }, { text: "Rico", correct: false }],
                success: "¡Correcto! Es Barley. Te regala una de sus botellas... ¡sin veneno!",
                failure: "¡Incorrecto! El Brawler que lanza botellas es Barley."
            },
            { 
                difficulty: "medium",
                challenge: "¿Cuál es el nombre del bar donde trabaja Barley?",
                options: [{ text: "Bull's Diner", correct: false }, { text: "Starr Park Saloon", correct: false }, { text: "Barley's Bar", correct: true }, { text: "Retropolis Bar", correct: false }],
                success: "¡Muy bien! Es el Barley's Bar. ¡La casa invita a una ronda!",
                failure: "¡Casi! El nombre es Barley's Bar."
            },
            { 
                difficulty: "hard",
                challenge: "Barley pertenece al trío de 'Los del pueblo'. ¿Quiénes son los otros dos miembros?",
                options: [{ text: "Piper y Byron", correct: true }, { text: "Belle y Sam", correct: false }, { text: "Colt y Shelly", correct: false }, { text: "Poco y El Primo", correct: false }],
                success: "¡Increíble! Son Piper y Byron. Te has ganado una botella especial.",
                failure: "¡Una pregunta difícil! Los otros miembros son Piper y Byron."
            }
        ]
    },
    {
        reward: { name: "Shuriken de Leon", image: "coleccionables/shuriken_leon.png" },
        questions: [
            { 
                difficulty: "easy",
                challenge: "¿Qué Brawler se vuelve invisible con su Súper?",
                options: [{ text: "Mortis", correct: false }, { text: "Tara", correct: false }, { text: "Leon", correct: true }, { text: "Sandy", correct: false }],
                success: "¡Correcto! Es Leon. ¡Te da uno de sus shurikens de recuerdo!",
                failure: "¡Te han visto! El Brawler invisible es Leon."
            },
            { 
                difficulty: "medium",
                challenge: "¿De qué color es la piruleta que siempre lleva Leon?",
                options: [{ text: "Roja", correct: false }, { text: "Azul", correct: true }, { text: "Verde", correct: false }, { text: "Amarilla", correct: false }],
                success: "¡Muy observador! Es azul. ¡Te regala una!",
                failure: "¡Fíjate bien la próxima vez! Su piruleta es azul."
            },
            { 
                difficulty: "hard",
                challenge: "El Súper de Leon, 'Bomba de Humo', puede crear un clon con una de sus Habilidades Estelares. ¿Cómo se llama?",
                options: [{ text: "Curi-clon", correct: false }, { text: "Clon Engañoso", correct: true }, { text: "Sombra Veloz", correct: false }, { text: "Invisicuración", correct: false }],
                success: "¡Eres un estratega! Se llama Clon Engañoso. ¡Te has ganado un shuriken legendario!",
                failure: "¡Era una pregunta para expertos! La habilidad es Clon Engañoso."
            }
        ]
    },
    {
        reward: { name: "Flor de Cactus", image: "coleccionables/flor_cactus.png" },
        questions: [
            {
                difficulty: "easy",
                challenge: "¿Cuál de estos Brawlers es un cactus?",
                options: [{ text: "Spike", correct: true }, { text: "Rosa", correct: false }, { text: "Squeak", correct: false }, { text: "El Primo", correct: false }],
                success: "¡Así es! Spike te da una de sus flores como agradecimiento.",
                failure: "¡Incorrecto! El cactus amigable es Spike."
            },
            {
                difficulty: "medium",
                challenge: "¿Qué efecto principal causa el Súper de Spike a los enemigos?",
                options: [{ text: "Los quema", correct: false }, { text: "Los congela", correct: false }, { text: "Los ralentiza", correct: true }, { text: "Los empuja", correct: false }],
                success: "¡Correcto! Su campo de espinas ralentiza a los rivales. ¡Te has ganado una flor!",
                failure: "¡Casi! El Súper de Spike ralentiza a los enemigos."
            },
            {
                difficulty: "hard",
                challenge: "¿Cómo se llama la Habilidad Estelar de Spike que le permite curarse dentro de su Súper?",
                options: [{ text: "Bolas Curvas", correct: false }, { text: "Fertilizante", correct: true }, { text: "Espinas de Hierro", correct: false }, { text: "Vida Vegetal", correct: false }],
                success: "¡Increíble! Es Fertilizante. ¡Una flor por tu gran conocimiento!",
                failure: "¡Respuesta de experto! La habilidad es Fertilizante."
            }
        ]
    },
    {
        reward: { name: "Bate de Bibi", image: "coleccionables/bate_bibi.png" },
        questions: [
            {
                difficulty: "easy",
                challenge: "¿Qué Brawler usa un bate de béisbol para atacar?",
                options: [{ text: "Bull", correct: false }, { text: "El Primo", correct: false }, { text: "Bibi", correct: true }, { text: "Frank", correct: false }],
                success: "¡Home run! Es Bibi. Te firma su bate.",
                failure: "¡Strike! La bateadora es Bibi."
            },
            {
                difficulty: "medium",
                challenge: "¿Qué pasa cuando la barra amarilla de Bibi (Home Run) está cargada?",
                options: [{ text: "Corre más rápido", correct: false }, { text: "Su siguiente golpe empuja", correct: true }, { text: "Se cura", correct: false }, { text: "Hace más daño", correct: false }],
                success: "¡Exacto! Su siguiente golpe empuja a los enemigos. ¡Te regala su bate!",
                failure: "¡Incorrecto! Su barra de Home Run sirve para empujar."
            },
            {
                difficulty: "hard",
                challenge: "¿Cómo se llama el bate de Bibi?",
                options: [{ text: "Sr. Mazo", correct: false }, { text: "Sr. Bat", correct: true }, { text: "Sr. Palo", correct: false }, { text: "Sr. Bateador", correct: false }],
                success: "¡Correcto! Se llama Sr. Bat. ¡Te lo has ganado!",
                failure: "¡Casi! Su inseparable amigo se llama Sr. Bat."
            }
        ]
    },
    {
        reward: { name: "Estrella Azul", image: "coleccionables/estrella_azul.png" },
        questions: [
            {
                difficulty: "easy",
                challenge: "¿Qué objeto coleccionas en el modo Caza Estelar?",
                options: [{ text: "Tornillos", correct: false }, { text: "Gemas", correct: false }, { text: "Estrellas", correct: true }, { text: "Balones", correct: false }],
                success: "¡Correcto! Las estrellas son la clave. ¡Aquí tienes una!",
                failure: "¡Incorrecto! En Caza Estelar se coleccionan estrellas."
            },
            {
                difficulty: "medium",
                challenge: "¿De qué color es la estrella que aparece en el centro al empezar en Caza Estelar?",
                options: [{ text: "Roja", correct: false }, { text: "Amarilla", correct: false }, { text: "Azul", correct: true }, { text: "Morada", correct: false }],
                success: "¡Muy bien! Es la estrella azul. ¡Te llevas una!",
                failure: "¡Casi! La estrella del centro siempre es azul."
            },
            {
                difficulty: "hard",
                challenge: "En Caza Estelar, ¿qué pasa si derrotas a un enemigo que tiene 7 estrellas?",
                options: [{ text: "Ganas la partida", correct: false }, { text: "Consigues 7 estrellas", correct: true }, { text: "Consigues 1 estrella", correct: false }, { text: "No pasa nada", correct: false }],
                success: "¡Exacto! Consigues todas sus estrellas para tu equipo. ¡Te has ganado la tuya!",
                failure: "¡Incorrecto! Te quedas con todas las estrellas del enemigo derrotado."
            }
        ]
    },
    {
        reward: { name: "Lámpara de Genio", image: "coleccionables/lampara_genio.png" },
        questions: [
            {
                difficulty: "easy",
                challenge: "¿Qué Brawler sale de una lámpara mágica?",
                options: [{ text: "Genio", correct: true }, { text: "Tara", correct: false }, { text: "Sandy", correct: false }, { text: "Mortis", correct: false }],
                success: "¡Deseo concedido! Es Genio. Te regala su lámpara.",
                failure: "¡No era ese! El de la lámpara es Genio."
            },
            {
                difficulty: "medium",
                challenge: "¿Qué hace el Súper de Genio, 'Mano Mágica'?",
                options: [{ text: "Empuja a los enemigos", correct: false }, { text: "Atrae a un enemigo", correct: true }, { text: "Cura a los aliados", correct: false }, { text: "Se vuelve invisible", correct: false }],
                success: "¡Correcto! Atrae a un enemigo hacia él. ¡Te has ganado la lámpara!",
                failure: "¡Incorrecto! La Mano Mágica de Genio atrae a los enemigos."
            },
            {
                difficulty: "hard",
                challenge: "Genio pertenece al trío del 'Bazar de Tara'. ¿Quiénes son los otros dos miembros?",
                options: [{ text: "Tara y Sandy", correct: true }, { text: "Mortis y Frank", correct: false }, { text: "Leon y Nita", correct: false }, { text: "Byron y Piper", correct: false }],
                success: "¡Eres un genio! Son Tara y Sandy. ¡La lámpara es tuya!",
                failure: "¡Respuesta de experto! Los otros dos son Tara y Sandy."
            }
        ]
    }
];
