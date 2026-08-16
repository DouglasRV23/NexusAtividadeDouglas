const CACHE_NAME = "prisma-v1";

const FILES = [

    "./",
    "./login.html",
    "./index.html",
    "./servicos.html",
    "./detalhes.html",
    "./perfil.html",
    "./css/style.css",
    "./js/script.js",
    "./manifest.json"

];


self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches.open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(FILES);

                })

        );

    }
);


self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches.match(event.request)
                .then(response => {

                    return response ||
                        fetch(event.request);

                })

        );

    }
);
