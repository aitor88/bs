// Contenido para eventos_data.js

// Creamos un array global para los eventos
window.gameEvents = [
    // --- Eventos Inmediatos ---
    {
        name: "Zona de Curación",
        message: "¡Habéis encontrado un oasis de vida!",
        type: "immediate",
        narrative: "Un momento de calma os permite recuperar fuerzas.",
        effects: {
            vida: 20
        }
    },
    {
        name: "Cargamento de Munición",
        message: "¡Encontráis un alijo de munición especial!",
        type: "immediate",
        narrative: "Vuestras armas ahora pegan más fuerte.",
        effects: {
            ataque: 15
        }
    },
    {
        name: "Escudo de Chatarra",
        message: "¡Usáis unos restos de metal para mejorar vuestra cobertura!",
        type: "immediate",
        narrative: "Esta chatarra os protegerá del siguiente golpe.",
        effects: {
            defensa: 15
        }
    },
    {
        name: "¡Emboscada!",
        message: "¡Caéis en una trampa enemiga!",
        type: "immediate",
        narrative: "El ataque sorpresa os pilla desprevenidos. ¡Habéis perdido vida!",
        effects: {
            vida: -25
        }
    },
    {
        name: "Explosión de Adrenalina",
        message: "¡Un susto os da un subidón de energía!",
        type: "immediate",
        narrative: "¡El corazón os va a mil! Vuestro Superpoder se ha cargado de golpe.",
        effects: {
            superpoder: 30
        }
    },

    // --- Eventos de Elección ---
    {
        name: "Caja Misteriosa",
        message: "¡Habéis encontrado una Caja Brawl abandonada!",
        type: "choice",
        options: [
            { text: "Coger Potenciador de Ataque", narrative: "¡El potenciador aumenta vuestro ataque al máximo!", effects: { ataque: 30 } },
            { text: "Coger Escudo Protector", narrative: "¡El escudo refuerza vuestra defensa!", effects: { defensa: 30 } }
        ]
    },
    {
        name: "Atajo Peligroso",
        message: "Hay un atajo, pero parece lleno de trampas.",
        type: "choice",
        options: [
            { text: "Tomar el atajo", narrative: "¡Conseguís pasar, pero una trampa os daña!", effects: { vida: -20, superpoder: 20 } },
            { text: "Ir por el camino largo", narrative: "El camino es seguro, pero perdéis una oportunidad de atacar.", effects: { ataque: -10, defensa: 10 } }
        ]
    }
];
