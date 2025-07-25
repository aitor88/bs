// Contenido para leon_data.js

window.gameCharacters.push({
    name: 'Leon',
    img: 'avatares/leon.png',
    dilemmas: [
        {
            description: '¡Hay muchos enemigos! Puedo usar mi Súper para volverme <span class="text-gray-400">invisible</span> y pasar sin que nos vean.',
            options: [
                { text: '¡Hazte invisible!', narrative: 'Pasáis sigilosamente entre los enemigos. ¡Ni se han enterado!', effects: { vida: 15, superpoder: -25 } },
                { text: '¡Lucha contra ellos!', narrative: 'Decides luchar. Es una batalla dura y pierdes vida.', effects: { poder: 10, superpoder: 15, vida: -15 } }
            ]
        },
        {
            description: 'Veo a un enemigo importante solo. Podría usar la <span class="text-gray-400">invisibilidad</span> para un <span class="text-yellow-400">golpe sorpresa</span>.',
            options: [
                { text: '¡Ataque sorpresa!', narrative: '¡El ataque es un éxito! Ganas mucho poder y cargas Súper, pero te llevas un golpe al escapar.', effects: { poder: 20, superpoder: 25, vida: -10 } },
                { text: 'No te arriesgues', narrative: 'Prefieres no arriesgarte. Buscáis una posición más segura.', effects: { vida: 5 } }
            ]
        },
        {
            description: '¡Nos han acorralado! Puedo crear un <span class="text-blue-300">clon</span> para que los enemigos le disparen a él mientras escapamos.',
            options: [
                { text: '¡Crea un clon!', narrative: '¡El truco funciona! Los enemigos disparan al clon y vosotros os ponéis a salvo.', effects: { vida: 20, superpoder: -15 } },
                { text: '¡Lucha para salir!', narrative: 'Lucháis para abriros paso. Es arriesgado y pierdes vida.', effects: { poder: 10, vida: -20 } }
            ]
        },
        {
            description: 'No sabemos qué hay más adelante. Puedo hacerme <span class="text-gray-400">invisible</span> para <span class="text-yellow-300">explorar</span> el camino sin peligro.',
            options: [
                { text: 'Explora el camino', narrative: 'Leon explora y vuelve con información. Ahora estáis mejor preparados.', effects: { vida: 10, poder: 5 } },
                { text: '¡Vamos todos juntos!', narrative: 'Avanzáis todos juntos. Es más rápido, pero más peligroso.', effects: { poder: 5, vida: -10 } }
            ]
        },
        {
            description: 'Hay una caja de poder sin vigilar. Puedo volverme invisible y <span class="text-sky-400">robarla</span> sin que me vean.',
            options: [
                { text: '¡Roba la caja!', narrative: '¡El robo es un éxito! Consigues el poder sin que nadie se dé cuenta.', effects: { poder: 20, superpoder: -10 } },
                { text: 'Es demasiado arriesgado', narrative: 'No te fías y prefieres no arriesgar la posición por una caja.', effects: { } }
            ]
        },
        {
            description: 'Estoy escondido en un arbusto. Puedo lanzar mis <span class="text-yellow-300">shurikens</span> desde aquí sin que sepan de dónde vienen.',
            options: [
                { text: 'Dispara desde el arbusto', narrative: 'Los shurikens impactan por sorpresa, causando mucho daño.', effects: { poder: 20 } },
                { text: 'Espera a que se acerquen', narrative: 'Prefieres esperar el momento perfecto para un ataque a corta distancia.', effects: { vida: 5 } }
            ]
        },
        {
            description: 'Si gasto <span class="text-sky-400">2 Recursos</span> en <span class="text-green-400">caramelos de energía</span>, mi velocidad y poder aumentarán mucho.',
            options: [
                { text: '¡Toma los caramelos!', cost: 2, narrative: '¡El subidón de azúcar te hace súper rápido y fuerte!', effects: { poder: 25 } },
                { text: 'Guarda los recursos', narrative: 'No es momento para dulces. Te concentras en la batalla.', effects: { } }
            ]
        },
        {
            description: 'Puedo lanzar una <span class="text-gray-500">bomba de humo</span> (<span class="text-sky-400">1 Recurso</span>) para confundir a los enemigos.',
            options: [
                { text: '¡Bomba de humo!', cost: 1, narrative: 'El humo lo cubre todo. Los enemigos están confusos y podéis curaros.', effects: { vida: 20 } },
                { text: 'No gastes el humo', narrative: 'Prefieres guardar el humo para una emergencia y seguir atacando.', effects: { poder: 10 } }
            ]
        },
        {
            description: 'Ese enemigo tiene un objeto brillante. Podría intentar <span class="text-sky-400">robárselo</span> con sigilo.',
            options: [
                { text: 'Intenta el robo', narrative: '¡Lo consigues! Robas el objeto, que resulta ser un potenciador de Súper.', effects: { superpoder: 40, vida: -10 } },
                { text: 'No es el momento', narrative: 'No quieres arriesgarte a que te descubran por un objeto.', effects: { } }
            ]
        },
        {
            description: 'Puedo seguir a ese enemigo invisiblemente para ver a dónde va.',
            options: [
                { text: 'Síguele', narrative: 'Descubres una debilidad en su defensa. ¡Vuestro poder aumenta!', effects: { poder: 20 } },
                { text: 'No te separes', narrative: 'Prefieres que el equipo permanezca unido y no correr riesgos.', effects: { vida: 5 } }
            ]
        }
    ]
});
