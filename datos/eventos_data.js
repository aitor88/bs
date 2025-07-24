// Contenido para eventos_data.js

// Creamos un array global para los eventos
window.gameEvents = [
    // --- Eventos Inmediatos ---
    {
        name: "Zona de Curación",
        message: "¡Habéis encontrado un oasis de vida!",
        type: "immediate",
        effects: {
            narrative: "Un momento de calma os permite recuperar fuerzas.",
            vida: 20
        }
    },
    {
        name: "Cargamento de Munición",
        message: "¡Encontráis un alijo de munición especial!",
        type: "immediate",
        effects: {
            narrative: "Vuestras armas ahora pegan más fuerte.",
            ataque: 15
        }
    },
    {
        name: "Escudo de Chatarra",
        message: "¡Usáis unos restos de metal para mejorar vuestra cobertura!",
        type: "immediate",
        effects: {
            narrative: "Esta chatarra os protegerá del siguiente golpe.",
            defensa: 15
        }
    },
    {
        name: "¡Emboscada!",
        message: "¡Caéis en una trampa enemiga!",
        type: "immediate",
        effects: {
            narrative: "El ataque sorpresa os pilla desprevenidos. ¡Habéis perdido vida!",
            vida: -25
        }
    },
    {
        name: "Explosión de Adrenalina",
        message: "¡Un susto os da un subidón de energía!",
        type: "immediate",
        effects: {
            narrative: "¡El corazón os va a mil! Vuestro Superpoder se ha cargado de golpe.",
            superpoder: 30
        }
    },

    // --- Eventos Modificadores (Afectan al siguiente asalto) ---
    {
        name: "Terreno Elevado",
        message: "¡Conseguís una posición elevada!",
        type: "modifier",
        effects: {
            narrative: "Desde aquí arriba es más fácil defenderse. La defensa mejora en el próximo asalto.",
            defensa: 25
        }
    },
    {
        name: "Punto Débil",
        message: "¡Descubrís un punto débil en el enemigo!",
        type: "modifier",
        effects: {
            narrative: "¡Ahora sabéis dónde disparar! Vuestro ataque aumenta en el próximo asalto.",
            ataque: 25
        }
    },
    {
        name: "Tormenta de Arena",
        message: "¡Una tormenta de arena reduce la visibilidad!",
        type: "modifier",
        effects: {
            narrative: "La arena dificulta apuntar. Vuestra defensa se resiente en el próximo asalto.",
            defensa: -20
        }
    },
    {
        name: "Campo de Energía",
        message: "¡Una extraña energía carga el ambiente!",
        type: "modifier",
        effects: {
            narrative: "¡La energía os sobrecarga! Cualquier acción cargará el doble de Superpoder en el próximo asalto.",
            superpoderModifier: 2
        }
    },
    {
        name: "Suelo Resbaladizo",
        message: "¡El suelo está cubierto de aceite! ¡Cuidado!",
        type: "modifier",
        effects: {
            narrative: "Es difícil mantener el equilibrio. Vuestra defensa baja en el próximo asalto.",
            defensa: -25
        }
    },

    // --- Eventos de Daño/Efecto en el Tiempo ---
    {
        name: "¡En Llamas!",
        message: "¡Un ataque incendiario os ha alcanzado!",
        type: "dot",
        effects: {
            narrative: "¡El fuego quema! Perderéis vida durante los próximos 2 asaltos.",
            vida: -8,
            duration: 2
        }
    },
    {
        name: "Niebla Tóxica",
        message: "¡Una nube venenosa os rodea!",
        type: "dot",
        effects: {
            narrative: "El veneno os debilita poco a poco... Perderéis vida durante 3 asaltos.",
            vida: -5,
            duration: 3
        }
    },
    {
        name: "Nanobots Reparadores",
        message: "¡Encontráis un dispositivo que libera nanobots reparadores!",
        type: "dot",
        effects: {
            narrative: "Los pequeños robots os curan lentamente. Ganaréis vida durante 2 asaltos.",
            vida: 10,
            duration: 2
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
    },
    {
        name: "Brawler Neutral",
        message: "Un Brawler neutral os pide ayuda a cambio de un favor.",
        type: "choice",
        options: [
            { text: "Ayudarle", narrative: "Le ayudáis y, en agradecimiento, os da un elixir que os cura.", effects: { vida: 25, defensa: -10 } },
            { text: "Ignorarle", narrative: "Seguís vuestro camino. No ganáis nada, pero tampoco perdéis nada.", effects: { defensa: 5 } }
        ]
    },
    {
        name: "Generador Inestable",
        message: "Veis un generador. Podéis sobrecargarlo para que explote o usarlo para un escudo.",
        type: "choice",
        options: [
            { text: "¡Que explote!", narrative: "¡BOOM! La explosión daña a los enemigos, ¡pero también a vosotros!", effects: { ataque: 30, vida: -15 } },
            { text: "¡Activad los escudos!", narrative: "Usáis la energía para crear un escudo protector muy fuerte.", effects: { defensa: 35 } }
        ]
    },
    {
        name: "Poción Misteriosa",
        message: "Encuentras dos pociones: una roja y una azul. ¿Cuál bebes?",
        type: "choice",
        options: [
            { text: "Beber la poción roja", narrative: "¡Era una poción de furia! Tu ataque sube, pero te vuelves imprudente.", effects: { ataque: 25, defensa: -15 } },
            { text: "Beber la poción azul", narrative: "¡Era una poción de aguante! Tu vida se recupera al instante.", effects: { vida: 30 } }
        ]
    },
    {
        name: "El Desafío",
        message: "Un rival te desafía a un duelo rápido. Si ganas, la recompensa es grande.",
        type: "choice",
        options: [
            { text: "Aceptar el duelo", narrative: "¡Ganas el duelo! ¡El subidón de moral carga tu Superpoder!", effects: { superpoder: 50, vida: -10 } },
            { text: "Rechazarlo", narrative: "Decides no luchar. El rival se ríe de ti, pero no pierdes vida.", effects: { defensa: 10 } }
        ]
    },
    {
        name: "Tesoro Enterrado",
        message: "Detectas una señal de un tesoro enterrado. Desenterrarlo os dejará expuestos.",
        type: "choice",
        options: [
            { text: "¡A cavar!", narrative: "¡Encontráis un montón de gemas de poder! Vuestro ataque y defensa mejoran.", effects: { ataque: 15, defensa: 15, vida: -15 } },
            { text: "No hay tiempo", narrative: "Preferís no arriesgaros y seguís adelante.", effects: { defensa: 5 } }
        ]
    }
];
