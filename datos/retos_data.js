// Contenido para retos_data.js

// Creamos un array global para los retos y acertijos
window.gameChallenges = [
    {
        challenge: "¿De qué color es la gema que aparece en el centro de Atrapagemas?",
        img: "https://placehold.co/150x150/a855f7/ffffff?text=?", // Imagen de pregunta morada
        options: [
            { text: "Azul", correct: false },
            { text: "Morada", correct: true },
            { text: "Verde", correct: false },
            { text: "Roja", correct: false }
        ],
        success: "¡Correcto! La gema es morada. ¡Te llevas una como recompensa!",
        failure: "¡Incorrecto! La gema era morada. No consigues nada.",
        reward: { name: "Gema Preciosa", icon: "💎" }
    },
    {
        challenge: "¿Qué Brawler lanza botellas venenosas?",
        img: "https://placehold.co/150x150/fbbf24/ffffff?text=?", // Imagen de pregunta amarilla
        options: [
            { text: "Dynamike", correct: false },
            { text: "Tick", correct: false },
            { text: "Barley", correct: true },
            { text: "Sprout", correct: false }
        ],
        success: "¡Exacto! Es Barley. Te regala una de sus botellas... ¡sin veneno!",
        failure: "¡Casi! El lanzador de botellas es Barley. Mejor suerte la próxima vez.",
        reward: { name: "Botella de Barley", icon: "🍾" }
    },
    {
        challenge: "¿Cuál de estos Brawlers es un cactus?",
        img: "https://placehold.co/150x150/4ade80/ffffff?text=?", // Imagen de pregunta verde
        options: [
            { text: "Spike", correct: true },
            { text: "Rosa", correct: false },
            { text: "Squeak", correct: false },
            { text: "El Primo", correct: false }
        ],
        success: "¡Así es! Spike te da una de sus flores como agradecimiento.",
        failure: "¡Incorrecto! El cactus amigable es Spike.",
        reward: { name: "Flor de Cactus", icon: "🌵" }
    },
    {
        challenge: "¿Qué objeto coleccionas en el modo Caza Estelar?",
        img: "https://placehold.co/150x150/38bdf8/ffffff?text=?", // Imagen de pregunta azul
        options: [
            { text: "Tornillos", correct: false },
            { text: "Gemas", correct: false },
            { text: "Estrellas", correct: true },
            { text: "Balones", correct: false }
        ],
        success: "¡Correcto! Las estrellas azules son la clave. ¡Aquí tienes una!",
        failure: "¡Incorrecto! En Caza Estelar se coleccionan estrellas.",
        reward: { name: "Estrella Azul", icon: "⭐" }
    },
    {
        challenge: "¿Qué Brawler se vuelve invisible con su Súper?",
        img: "https://placehold.co/150x150/1e293b/ffffff?text=?", // Imagen de pregunta oscura
        options: [
            { text: "Mortis", correct: false },
            { text: "Tara", correct: false },
            { text: "Leon", correct: true },
            { text: "Sandy", correct: false }
        ],
        success: "¡Correcto! Es Leon. ¡Te da uno de sus shurikens de recuerdo!",
        failure: "¡Te han visto! El Brawler invisible es Leon.",
        reward: { name: "Shuriken de Leon", icon: "🥷" }
    },
    {
        challenge: "¿Qué Brawler usa un bate de béisbol para atacar?",
        img: "https://placehold.co/150x150/ec4899/ffffff?text=?", // Imagen de pregunta rosa
        options: [
            { text: "Bull", correct: false },
            { text: "El Primo", correct: false },
            { text: "Bibi", correct: true },
            { text: "Frank", correct: false }
        ],
        success: "¡Home run! Es Bibi. Te firma su bate.",
        failure: "¡Strike! La bateadora es Bibi.",
        reward: { name: "Bate de Bibi", icon: "⚾" }
    },
    {
        challenge: "¿Qué Brawler sale de una lámpara mágica?",
        img: "https://placehold.co/150x150/8b5cf6/ffffff?text=?", // Imagen de pregunta violeta
        options: [
            { text: "Genio", correct: true },
            { text: "Tara", correct: false },
            { text: "Sandy", correct: false },
            { text: "Mortis", correct: false }
        ],
        success: "¡Deseo concedido! Es Genio. Te regala su lámpara.",
        failure: "¡No era ese! El de la lámpara es Genio.",
        reward: { name: "Lámpara de Genio", icon: "램프" }
    },
    {
        challenge: "En los antiguos eventos, ¿qué objeto usabas para poder jugar?",
        img: "https://placehold.co/150x150/f59e0b/ffffff?text=?", // Imagen de pregunta ámbar
        options: [
            { text: "Monedas", correct: false },
            { text: "Gemas", correct: false },
            { text: "Tickets", correct: true },
            { text: "Estrellas", correct: false }
        ],
        success: "¡Correcto! Eran los tickets. ¡Has encontrado uno dorado!",
        failure: "¡Casi! Se usaban los tickets de evento.",
        reward: { name: "Ticket Dorado", icon: "🎟️" }
    },
    {
        challenge: "¿Qué Brawler usa un paraguas como arma?",
        img: "https://placehold.co/150x150/f472b6/ffffff?text=?", // Imagen de pregunta rosa claro
        options: [
            { text: "Piper", correct: true },
            { text: "Belle", correct: false },
            { text: "Amber", correct: false },
            { text: "Colette", correct: false }
        ],
        success: "¡Perfecto! Es Piper. Te presta su paraguas para que no te mojes.",
        failure: "¡Respuesta incorrecta! La del paraguas es Piper.",
        reward: { name: "Paraguas de Piper", icon: "☂️" }
    }
];
