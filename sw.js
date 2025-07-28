const CACHE_NAME = 'batalla-infinita-v2';

const CACHE_ELEMENTS = [
    '/',
    './index.html',
    './manifest.json',
    './css/styles.css',
    
    './js/languages.js',
    './js/config.js',
    './js/audio.js',
    './js/ui.js',
    './js/game.js',

    './datos/shelly_data.js',
    './datos/poco_data.js',
    './datos/el_primo_data.js',
    './datos/leon_data.js',
    './datos/cordelius_data.js',
    './datos/frank_data.js',
    './datos/mortis_data.js',
    './datos/spike_data.js',
    './datos/eventos_data.js',
    './datos/retos_data.js',

    './imagenes/logo.png',
    './imagenes/logo_es.png',
    './imagenes/logo_eu.png',
    './imagenes/bandera_es.png',
    './imagenes/bandera_eu.png',
    './imagenes/icon-192.png',
    './imagenes/icon-512.png',
    './imagenes/ios_share_icon.png',

    './sonidos/splash.mp3',
    './sonidos/click.mp3',
    './sonidos/musica_menu.mp3',
    './sonidos/musica_juego.mp3',
    './sonidos/musica_derrota.mp3'
];

self.addEventListener('install', (event) => {
    console.log('Instalando Service Worker y guardando caché...');
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(CACHE_ELEMENTS)
                .then(() => self.skipWaiting())
                .catch(err => console.error('Falló el registro de caché en addAll:', err));
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((res) => {
            return res || fetch(event.request);
        })
    );
});
