// Contenido para leon_data.js

// Añadimos los datos de Leon al array global de personajes
window.gameCharacters.push({
    name: 'Leon',
    img: 'avatares/leon.png', // Asegúrate de tener una imagen leon.png en la carpeta avatares
    dilemmas: [
        {
            description: '¡Hay muchos enemigos! Puedo usar mi Súper para volverme invisible y pasar sin que nos vean.',
            options: [
                { text: '¡Hazte invisible!', narrative: 'Pasáis sigilosamente entre los enemigos. ¡Ni se han enterado!', effects: { defensa: 20, vida: 5 } },
                { text: '¡Lucha contra ellos!', narrative: 'Decides luchar. Es una batalla dura y pierdes vida.', effects: { ataque: 10, superpoder: 15, vida: -15 } }
            ]
        },
        {
            description: 'Veo a un enemigo importante solo. Podría usar la invisibilidad para acercarme y darle un golpe sorpresa.',
            options: [
                { text: '¡Ataque sorpresa!', narrative: '¡El ataque es un éxito! Ganas mucho ataque y cargas Súper, pero te llevas un golpe al escapar.', effects: { ataque: 20, superpoder: 25, vida: -10 } },
                { text: 'No te arriesgues', narrative: 'Prefieres no arriesgarte. Buscáis una posición más segura.', effects: { defensa: 10 } }
            ]
        },
        {
            description: '¡Nos han acorralado! Puedo crear un clon para que los enemigos le disparen a él mientras escapamos.',
            options: [
                { text: '¡Crea un clon!', narrative: '¡El truco funciona! Los enemigos disparan al clon y vosotros os ponéis a salvo.', effects: { defensa: 25, vida: 5 } },
                { text: '¡Lucha para salir!', narrative: 'Lucháis para abriros paso. Es arriesgado y pierdes vida.', effects: { ataque: 10, vida: -20 } }
            ]
        },
        {
            description: 'No sabemos qué hay más adelante. Puedo hacerme invisible para explorar el camino sin peligro.',
            options: [
                { text: 'Explora el camino', narrative: 'Leon explora y vuelve con información. Ahora estáis mejor preparados.', effects: { defensa: 20 } },
                { text: '¡Vamos todos juntos!', narrative: 'Avanzáis todos juntos. Es más rápido, pero más peligroso.', effects: { ataque: 5, vida: -10 } }
            ]
        }
    ]
});
