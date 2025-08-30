// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v15';
const RUNTIME = 'runtime';

// The files we want to cache for offline use. These are all relative to the
// root of the server. They are cached in the PRECACHE cache.
const filesToCache = [
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/alignit.obfuscated.js',
  'js/components.obfuscated.js',
  'js/lasershaders.obfuscated.js',
  'js/lens.obfuscated.js',
  'js/rays.obfuscated.js',
  'js/utils.obfuscated.js',
  'js/animations.obfuscated.js',
  'js/editor.obfuscated.js',
  'js/panels.obfuscated.js',
  'img/icon.png',
  'img/RetinaDamage_ImgGen2_inv.jpg',
  'babylon/assets/Droid Sans_Regular.json',
  'babylon/assets/left.babylon',
  'babylon/assets/right.babylon',
  'babylon/babylon.js',
  'babylon/babylon.js.map',
  'babylon/babylonjs.loaders.min.js',
  'babylon/babylonjs.loaders.min.js.map',
  'babylon/babylon.gui.min.js',
  'babylon/earcut.min.js',
  'babylon/remote/mrtk-fluent-backplate.glb',
  'babylon/remote/r_hand_rhs.glb',
  'babylon/remote/l_hand_rhs.glb',
  'babylon/remote/handsShader.json',
  'babylon/remote/3',
  'babylon/remote/favicon.ico',
  'babylon/remote/mrtk-mrdl-backplate-iridescence.png',
  'babylon/remote/mrtk-mrdl-blue-gradient.png',
  'babylon/remote/profile.json',
  'babylon/remote/profilesList.json',
  'babylon/remote/right.glb',
  'babylon/remote/left.glb',
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
  'lvl_12.json',
  'lvl_13.json',
  'lvl_14.json'
];

// The fetch handler serves responses for other-origin resources from a cache:
const cached_files = [
  'https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist/profiles/profilesList.json',
  'https://assets.babylonjs.com/core/MRTK/mrtk-fluent-backplate.glb',
  'https://assets.babylonjs.com/core/MRTK/MRDL/mrtk-mrdl-backplate-iridescence.png',
  'https://assets.babylonjs.com/core/MRTK/MRDL/mrtk-mrdl-blue-gradient.png',
  'https://assets.babylonjs.com/core/HandMeshes/r_hand_rhs.glb',
  'https://assets.babylonjs.com/core/HandMeshes/l_hand_rhs.glb',
  'https://snippet.babylonjs.com/8RUNKL/3',
  'https://controllers.babylonjs.com/oculus/right.babylon',
  'https://controllers.babylonjs.com/oculus/left.babylon',
  'https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist/profiles/meta-quest-touch-plus/profile.json',
  'https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist/profiles/meta-quest-touch-plus/right.glb',
  'https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist/profiles/meta-quest-touch-plus/left.glb',
  'https://assets.babylonjs.com/core/HandMeshes/handsShader.json',
  'https://nanoimaging.de/favicon.ico'
]

//   'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js',
//   'https://cdn.babylonjs.com/earcut.min.js',
//   'https://cdn.babylonjs.com/babylon.js',
//   'https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js',
//   'https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js',
//   'https://cdn.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js',
//   'https://cdn.babylonjs.com/loaders/babylonjs.loaders.js',
//   'https://cdn.babylonjs.com/gui/babylon.gui.min.js',
//'babylon/assets/profilesList.json',
//'babylon/dat.gui.min.js',
// 'babylon/Oimo.js',
// 'babylon/recast.js',
// 'babylon/Assets.js',
//'babylon/babylonjs.materials.min.js',
//'babylon/babylonjs.materials.min.js.map',
//'babylon/babylonjs.proceduralTextures.min.js',
//'babylon/babylonjs.proceduralTextures.min.js.map',
//'babylon/babylonjs.postProcess.min.js',
//'babylon/babylonjs.postProcess.min.js.map',
//'babylon/babylonjs.loaders.js',
//'babylon/babylonjs.loaders.js.map',
//'babylon/babylon.gui.min.js.map',

// From https://googlechrome.github.io/samples/service-worker/basic/
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  // console.log("sw install event triggered")
  event.waitUntil(
    caches.open(PRECACHE).then(async (cache) => {
      try {
        // await cache.addAll(filesToCache.map(f => new Request(new URL(f, self.location.origin))));
        await cache.addAll(filesToCache);
          console.log("All files cached successfully.");
      } catch (error) {
          console.error("Failed to cache files:", error);
      }
    }).then(() => {
      self.skipWaiting();
      // Check which files are missing
      // checkCachedFiles();
    })
  );
});

async function checkCachedFiles() {
    const cache = await caches.open(RUNTIME); // PRECACHE
    const requests = await cache.keys();
    console.log("Cache contains:");
    for (const req of requests) {
        console.log(req.url);
    }
    let missing = [];
    for (let file of filesToCache) {
        const response = await cache.match(file, {ignoreSearch: true});
        if (!response) {
            console.warn("Not cached: "+file+", response: "+response);
            missing.push(file);
        }
    }
    if (missing.length === 0) {
        console.log("All files are cached.");
    } else {
        console.warn("Missing files in cache:", missing);
        console.log(cache)
    }
}

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
  const url = event.request.url;
  // If the request is for the remote profilesList.json, serve the local one
  // console.log("fetching url: "+url)
  for (let fn of cached_files) {
    if (event.request.url === fn) {
    // Map the remote URL to the local cache key
    const filename = fn.substring(fn.lastIndexOf('/') + 1);
    const localCacheKey = 'babylon/remote/' + filename;
    event.respondWith(
        caches.match(localCacheKey, {ignoreSearch: true})
            .then(response => {
                if (!response) {
                    console.warn("Service Worker: Cache miss for", localCacheKey, "when handling", event.request.url);
                }
                return response || fetch(event.request);
            })
    );
    return;
  }
  }
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