// Contenido para eventos_data.js

// Creamos un array global para los eventos
window.gameEvents = [
    // --- Eventos Inmediatos (Efecto instantáneo) ---
    {
        name: "Zona de Curación",
        message: "¡Habéis encontrado un oasis de vida!",
        img: "imagenes/evento_vida.png",
        type: "immediate",
        narrative: "Un momento de calma os permite recuperar fuerzas.",
        effects: {
            vida: 20
        }
    },
    {
        name: "Cargamento de Munición",
        message: "¡Encontráis un alijo de munición especial!",
        img: "imagenes/evento_poder.png",
        type: "immediate",
        narrative: "Vuestras armas ahora pegan más fuerte.",
        effects: {
            poder: 15
        }
    },
    {
        name: "Escudo de Chatarra",
        message: "¡Usáis unos restos de metal para mejorar vuestra cobertura!",
        img: "imagenes/evento_poder.png",
        type: "immediate",
        narrative: "Esta chatarra os protegerá del siguiente golpe.",
        effects: {
            poder: 15 // Representa una mejora defensiva
        }
    },
    {
        name: "¡Emboscada!",
        message: "¡Caéis en una trampa enemiga!",
        img: "imagenes/evento_peligro.png",
        type: "immediate",
        narrative: "El ataque sorpresa os pilla desprevenidos. ¡Habéis perdido vida!",
        effects: {
            vida: -25
        }
    },
    {
        name: "Explosión de Adrenalina",
        message: "¡Un susto os da un subidón de energía!",
        img: "imagenes/evento_super.png",
        type: "immediate",
        narrative: "¡El corazón os va a mil! Vuestro Superpoder se ha cargado de golpe.",
        effects: {
            superpoder: 30
        }
    },
    {
        name: "Recursos Olvidados",
        message: "¡Encontráis una mochila con recursos abandonada!",
        img: "imagenes/evento_recursos.png",
        type: "immediate",
        narrative: "¡Qué suerte! Encontráis un par de objetos útiles.",
        effects: {
            recursos: 2
        }
    },

    // --- Eventos de Elección ---
    {
        name: "Caja Misteriosa",
        message: "¡Habéis encontrado una Caja Brawl abandonada!",
        img: "imagenes/evento_caja.png",
        type: "choice",
        options: [
            { text: "Coger Potenciador de Poder", narrative: "¡El potenciador aumenta vuestro poder al máximo!", effects: { poder: 30 } },
            { text: "Coger Botiquín Grande", narrative: "¡El botiquín recupera gran parte de vuestra vida!", effects: { vida: 30 } }
        ]
    },
    {
        name: "Atajo Peligroso",
        message: "Hay un atajo, pero parece lleno de trampas.",
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: "Tomar el atajo", narrative: "¡Conseguís pasar, pero una trampa os daña!", effects: { vida: -20, superpoder: 20 } },
            { text: "Ir por el camino largo", narrative: "El camino es seguro, pero perdéis una oportunidad de atacar.", effects: { poder: -10, vida: 10 } }
        ]
    },
    {
        name: "Brawler Neutral",
        message: "Un Brawler neutral os pide ayuda a cambio de un favor.",
        img: "imagenes/evento_pregunta.png",
        type: "choice",
        options: [
            { text: "Ayudarle", narrative: "Le ayudáis y, en agradecimiento, os da un recurso valioso.", effects: { recursos: 1, vida: -10 } },
            { text: "Ignorarle", narrative: "Seguís vuestro camino. No ganáis nada, pero tampoco perdéis nada.", effects: { } }
        ]
    },
    {
        name: "Generador Inestable",
        message: "Veis un generador. Podéis sobrecargarlo para que explote o usarlo para un escudo.",
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: "¡Que explote!", narrative: "¡BOOM! La explosión daña a los enemigos, ¡pero también a vosotros!", effects: { poder: 30, vida: -15 } },
            { text: "¡Activad los escudos!", narrative: "Usáis la energía para crear un escudo protector muy fuerte.", effects: { poder: 20, vida: 5 } }
        ]
    },
    {
        name: "Poción Misteriosa",
        message: "Encuentras dos pociones: una roja y una azul. ¿Cuál bebes?",
        img: "imagenes/evento_pregunta.png",
        type: "choice",
        options: [
            { text: "Beber la poción roja", narrative: "¡Era una poción de furia! Tu poder sube, pero te vuelves imprudente.", effects: { poder: 25, vida: -10 } },
            { text: "Beber la poción azul", narrative: "¡Era una poción de aguante! Tu vida se recupera al instante.", effects: { vida: 30 } }
        ]
    },
    {
        name: "El Desafío",
        message: "Un rival te desafía a un duelo rápido. Si ganas, la recompensa es grande.",
        img: "imagenes/evento_poder.png",
        type: "choice",
        options: [
            { text: "Aceptar el duelo", narrative: "¡Ganas el duelo! ¡El subidón de moral carga tu Superpoder!", effects: { superpoder: 50, vida: -10 } },
            { text: "Rechazarlo", narrative: "Decides no luchar. El rival se ríe de ti, pero no pierdes vida.", effects: { } }
        ]
    },
    {
        name: "Tesoro Enterrado",
        message: "Detectas una señal de un tesoro enterrado. Desenterrarlo os dejará expuestos.",
        img: "imagenes/evento_recursos.png",
        type: "choice",
        options: [
            { text: "¡A cavar!", narrative: "¡Encontráis un par de recursos extra!", effects: { recursos: 2, vida: -15 } },
            { text: "No hay tiempo", narrative: "Preferís no arriesgaros y seguís adelante.", effects: { } }
        ]
    },
    {
        name: "Portal Misterioso",
        message: "Aparece un portal extraño. ¿Lo cruzáis?",
        img: "imagenes/evento_pregunta.png",
        type: "choice",
        options: [
            { text: "¡Cruzar el portal!", narrative: "¡Aparecéis en una zona segura! Os saltáis el daño de este asalto.", effects: { vida: 10 } },
            { text: "No, gracias", narrative: "No os fiáis del portal. Mejor lo conocido.", effects: { } }
        ]
    },
    {
        name: "Mercader sospechoso",
        message: "Un mercader os ofrece un objeto increíble por 3 Recursos.",
        img: "imagenes/evento_recursos.png",
        type: "choice",
        options: [
            { text: "Comprar objeto", cost: 3, narrative: "¡El objeto es legendario! Vuestro poder aumenta muchísimo.", effects: { poder: 40 } },
            { text: "Es una estafa", narrative: "No te fías del mercader y guardas tus recursos.", effects: { } }
        ]
    },
    {
        name: "Robot Gigante",
        message: "¡Un Robot Gigante os corta el paso! ¡Es muy peligroso!",
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: "¡Concentrad el fuego!", narrative: "¡Le dais con todo! Cae, pero su explosión os daña.", effects: { superpoder: 40, vida: -25 } },
            { text: "¡Corred!", narrative: "Escapáis por los pelos, pero estáis agotados.", effects: { vida: -10, poder: -10 } }
        ]
    },
    {
        name: "Tormenta Eléctrica",
        message: "¡Empieza una tormenta eléctrica! Un rayo podría cargar vuestro Súper.",
        img: "imagenes/evento_super.png",
        type: "choice",
        options: [
            { text: "¡Usar un pararrayos!", narrative: "¡Funciona! Un rayo cae y carga vuestro Superpoder al máximo.", effects: { superpoder: 100, vida: -10 } },
            { text: "¡A cubierto!", narrative: "Buscáis refugio. No ganáis nada, pero estáis a salvo.", effects: { vida: 5 } }
        ]
    },
    {
        name: "Fuente de la Suerte",
        message: "Encontráis una fuente. ¿Echáis un recurso para pedir un deseo?",
        img: "imagenes/evento_vida.png",
        type: "choice",
        options: [
            { text: "Pedir un deseo", cost: 1, narrative: "¡El deseo se cumple! Recuperáis mucha vida.", effects: { vida: 35 } },
            { text: "No malgastar", narrative: "No crees en esas cosas. Guardas el recurso.", effects: { } }
        ]
    },
    {
        name: "Trampa de Pinchos",
        message: "El suelo está lleno de pinchos. Podéis intentar saltarlos o desactivar la trampa con 1 Recurso.",
        img: "imagenes/evento_peligro.png",
        type: "choice",
        options: [
            { text: "¡Saltad con cuidado!", narrative: "Algunos no lo consiguen y el equipo pierde vida.", effects: { vida: -20 } },
            { text: "Desactivar trampa", cost: 1, narrative: "Gastáis un recurso y pasáis sin problemas.", effects: { } }
        ]
    },
    {
        name: "Barriles Explosivos",
        message: "Hay barriles explosivos cerca de los enemigos. Podéis dispararles.",
        img: "imagenes/evento_poder.png",
        type: "choice",
        options: [
            { text: "¡Dispara a los barriles!", narrative: "¡BOOM! La explosión acaba con los enemigos, pero la onda expansiva os alcanza.", effects: { poder: 20, vida: -15 } },
            { text: "No te arriesgues", narrative: "Es demasiado peligroso. Buscáis otra forma de atacar.", effects: { poder: 5 } }
        ]
    }
];
