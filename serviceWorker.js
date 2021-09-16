const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./estilo.css",
    "js/contandor.js"
]

const CACHE_NAME = "v1_react";

self.addEventListener("install",(e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then( ()=>{
                self.skipWaiting()
            }).catch(err=>console.log);
        })
    )
});

self.addEventListener("activate",(e)=>{

    const cacheWhiteList = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cacheName => {
                cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch",(e)=>{

    e.respondWith(
        caches.match(e.request).then((res) => (res ? res : fetch(e.request)))
    );
});