// Contenido para retos_data.js

// Creamos un array global para los retos y acertijos
window.gameChallenges = [
    {
        challenge: "¿De qué color es la gema que aparece en el centro de Atrapagemas?",
        img: "https://placehold.co/150x150/a855f7/ffffff?text=?",
        options: [
            { text: "Azul", correct: false },
            { text: "Morada", correct: true },
            { text: "Verde", correct: false },
            { text: "Roja", correct: false }
        ],
        success: "¡Correcto! La gema es morada. ¡Te llevas una como recompensa!",
        failure: "¡Incorrecto! La gema era morada. No consigues nada.",
        reward: { name: "Gema Preciosa", image: "coleccionables/gema.png" }
    },
    {
        challenge: "¿Qué Brawler lanza botellas venenosas?",
        img: "https://placehold.co/150x150/fbbf24/ffffff?text=?",
        options: [
            { text: "Dynamike", correct: false },
            { text: "Tick", correct: false },
            { text: "Barley", correct: true },
            { text: "Sprout", correct: false }
        ],
        success: "¡Exacto! Es Barley. Te regala una de sus botellas... ¡sin veneno!",
        failure: "¡Casi! El lanzador de botellas es Barley.",
        reward: { name: "Botella de Barley", image: "coleccionables/botella_barley.png" }
    },
    {
        challenge: "¿Cuál de estos Brawlers es un cactus?",
        img: "https://placehold.co/150x150/4ade80/ffffff?text=?",
        options: [
            { text: "Spike", correct: true },
            { text: "Rosa", correct: false },
            { text: "Squeak", correct: false },
            { text: "El Primo", correct: false }
        ],
        success: "¡Así es! Spike te da una de sus flores como agradecimiento.",
        failure: "¡Incorrecto! El cactus amigable es Spike.",
        reward: { name: "Flor de Cactus", image: "coleccionables/flor_cactus.png" }
    },
    {
        challenge: "¿Qué objeto coleccionas en el modo Caza Estelar?",
        img: "https://placehold.co/150x150/38bdf8/ffffff?text=?",
        options: [
            { text: "Tornillos", correct: false },
            { text: "Gemas", correct: false },
            { text: "Estrellas", correct: true },
            { text: "Balones", correct: false }
        ],
        success: "¡Correcto! Las estrellas azules son la clave. ¡Aquí tienes una!",
        failure: "¡Incorrecto! En Caza Estelar se coleccionan estrellas.",
        reward: { name: "Estrella Azul", image: "coleccionables/estrella_azul.png" }
    },
    {
        challenge: "¿Qué Brawler se vuelve invisible con su Súper?",
        img: "https://placehold.co/150x150/1e293b/ffffff?text=?",
        options: [
            { text: "Mortis", correct: false },
            { text: "Tara", correct: false },
            { text: "Leon", correct: true },
            { text: "Sandy", correct: false }
        ],
        success: "¡Correcto! Es Leon. ¡Te da uno de sus shurikens de recuerdo!",
        failure: "¡Te han visto! El Brawler invisible es Leon.",
        reward: { name: "Shuriken de Leon", image: "coleccionables/shuriken_leon.png" }
    },
    {
        challenge: "¿Qué Brawler usa un bate de béisbol para atacar?",
        img: "https://placehold.co/150x150/ec4899/ffffff?text=?",
        options: [
            { text: "Bull", correct: false },
            { text: "El Primo", correct: false },
            { text: "Bibi", correct: true },
            { text: "Frank", correct: false }
        ],
        success: "¡Home run! Es Bibi. Te firma su bate.",
        failure: "¡Strike! La bateadora es Bibi.",
        reward: { name: "Bate de Bibi", image: "coleccionables/bate_bibi.png" }
    }
];
