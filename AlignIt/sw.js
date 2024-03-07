
// var GHPATH = '/AlignIt';
/// var WPATH = 'https://nanoimaging.de/AlignIt'

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v035';
const RUNTIME = 'runtime';

// The files to make available for offline use. make sure to add 
// others to this list
// var URLS = [    
//   `${GHPATH}/`,
//   `${GHPATH}/index.html`,
//   `${GHPATH}/css/style.css`,
//   `${GHPATH}/js/alignit.js`
// ]

const filesToCache = [
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/alignit.obfuscated.js',
  'js/components.obfuscated.js',
  'js/lasershaders.obfuscated.js',
  'js/lens.obfuscated.js',
  'js/utils.obfuscated.js',
  'js/panels.obfuscated.js',
  'img/icon.png',
  // 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js',
  // 'https://cdn.babylonjs.com/earcut.min.js',
  // 'https://cdn.babylonjs.com/babylon.js',
  // 'https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js',
  // 'https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js',
  // 'https://cdn.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js',
  // 'https://cdn.babylonjs.com/loaders/babylonjs.loaders.js',
  // 'https://cdn.babylonjs.com/gui/babylon.gui.min.js',
  'babylon/assets/Droid Sans_Regular.json',
  'babylon/assets/mrtk-fluent-backplate.glb',
  'babylon/assets/mrtk-mrdl-blue-gradient.png',
  'babylon/assets/mrtk-mrdl-backplate-iridescence.png',
  'babylon/assets/profilesList.json',
  'babylon/assets/right.babylon',
  'babylon/assets/left.babylon',
  'babylon/earcut.min.js',
  'babylon/babylon.js',
  'babylon/babylon.js.map',
  'babylon/babylon.gui.min.js',
  'babylon/babylon.gui.min.js.map',
  'babylon/babylonjs.loaders.min.js',
  'babylon/babylonjs.loaders.min.js.map',
  // 'babylon/Oimo.js',
  // 'babylon/recast.js',
  // 'babylon/Assets.js',
  'music/Be+Jammin\'+-+320bit.mp3',
  'music/Emotional+Ballad+-+320bit.mp3',
  'music/forest-with-small-river-birds-and-nature-field-recording-6735.mp3',
  'music/Melodic+Overflow+-+320bit.mp3',
  'music/Now+We+Ride+-+320bit.mp3',
  'music/The+Sad+Piano+Background+Song+-+320bit.mp3',
  'narrations/lvl1t1.m4a',
  'narrations/lvl1t2.m4a',
  'narrations/lvl1t3.m4a',
  'narrations/lvl1t4.m4a',
  'narrations/lvl1t5.m4a',
  'narrations/lvl1t6.m4a',
  'narrations/lvl2t1.m4a',
  'narrations/lvl2t2.m4a',
  'narrations/lvl2t3.m4a',
  'narrations/lvl2t4.m4a',
  'narrations/lvl2t5.m4a',
  'narrations/lvl2t6.m4a',
  'narrations/lvl2t7.m4a',
  'sound/interface-button-154180.mp3',
  'sound/running-gear-6403.mp3',
  'sound/stone_sliding-54021.mp3',
  'sound/switch-150130.mp3',
  'sound/switchbigpowerwav-14710.mp3',
  'sound/notification-5-140376.mp3',
  'sound/wrong-answer-126515.mp3',
  'textures/floor.png',
  'textures/forest.env',
  'textures/forest.hdr',
  'textures/metallic-with-scratches-stains.jpg',
  'textures/mr.jpg',
  'textures/reflectivity.png',
  'textures/room.env',
  'textures/room.hdr',
  'textures/satara.env',
  'textures/SetupImageSmall.jpg',
  'favicon.ico',
  'lvl_1.json',
  'lvl_2.json',
  'lvl_3.json',
  'lvl_4.json',
  'lvl_5.json',
  'lvl_6.json',
  'lvl_7.json',
  'lvl_8.json',
  'lvl_9.json',
  'lvl_10.json',
  'lvl_11.json',
  'lvl_12.json'
];


// From https://googlechrome.github.io/samples/service-worker/basic/

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  // console.log("sw install event triggered")
  event.waitUntil(
      caches.open(PRECACHE)
          .then((cache) => {
            // console.log("sw adding cache files to cache: "+cache)
            cache.addAll(filesToCache)
            // console.log("sw added cache files")
        })
          .then((msg)=> {
            // console.log("cache promise finished: "+msg);
            self.skipWaiting()
          })
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  // console.log("sw activated")
  event.waitUntil(
      caches.keys().then(cacheNames => {
        // console.log("sw chacheNames: "+cacheNames)
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
      }).then(cachesToDelete => {
          // console.log("sw deleting all: "+cachesToDelete);
          return Promise.all(cachesToDelete.map(cacheToDelete => {
            // console.log("sw deleting: "+cacheToDelete);
              return caches.delete(cacheToDelete);
          }));
      }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // console.log("sw fetch event: "+event)
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
      event.respondWith(
          caches.match(event.request, {ignoreSearch: true}).then(cachedResponse => {
              if (cachedResponse) {
                // console.log("sw fetch event cache responded"+cachedResponse)
                return cachedResponse;
              }

              return caches.open(RUNTIME).then(cache => {
                  return fetch(event.request).then(response => {
                      // Put a copy of the response in the runtime cache.
                      // console.log("sw fetched something to cache: "+response)
                      return cache.put(event.request, response.clone()).then(() => {
                          return response;
                      });
                  });
              });
          })
      );
  }
});