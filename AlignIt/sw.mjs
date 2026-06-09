// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v32';
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
  'js/image_blur.obfuscated.js',
  'js/animations.obfuscated.js',
  'js/editor.obfuscated.js',
  'js/gui.obfuscated.js',
  'js/i18n.obfuscated.js',
  'js/inputs.obfuscated.js',
  'js/levels.obfuscated.js',
  'js/panels.obfuscated.js',
  'js/scene.obfuscated.js',
  'js/sound.obfuscated.js',
  'img/icon.png',
  'img/Arabidopsis.jpg',
  'img/FluorescentCells.jpg',
  'img/RetinaDamage_ImgGen2.jpg',
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
  'babylon/recast.js',
  'babylon/remote/r_hand_rhs.glb',
  'babylon/remote/l_hand_rhs.glb',
  'babylon/remote/handsShader.json',
  'babylon/remote/3',
  'babylon/remote/favicon.ico',
  'babylon/remote/mrtk-fluent-backplate.glb',
  'babylon/remote/mrtk-mrdl-backplate-iridescence.png',
  'babylon/remote/mrtk-mrdl-blue-gradient.png',
  'babylon/remote/profile.json',
  'babylon/remote/profilesList.json',
  'babylon/remote/right.glb',
  'babylon/remote/left.glb',
  'babylon/remote/FluorescentCells.jpg',
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
  'narrations/InstructionTask1.m4a',
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
  'textures/SetupImage.jpg',
  'textures/SetupImageSmall.jpg',
  'textures/environment.dds',
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
  'lvl_14.json',
  'lenslevels/lvl_1.json',
  'lenslevels/lvl_2.json',
  'lenslevels/lvl_3.json',
  'translations/de.json',
  'translations/en.json',
  'translations/no.json'
];

// Specific remote URLs mapped to local cache keys
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
  'https://assets.babylonjs.com/core/HandMeshes/handsShader.json',
  'https://nanoimaging.de/favicon.ico',
  'https://upload.wikimedia.org/wikipedia/commons/0/09/FluorescentCells.jpg'
];

// Map specific remote URLs to local cache keys
function getLocalCacheKey(remoteUrl) {
  // Babylon controller meshes — these live in babylon/assets/, not babylon/remote/
  if (remoteUrl === 'https://controllers.babylonjs.com/oculus/right.babylon') {
    return 'babylon/assets/right.babylon';
  }
  if (remoteUrl === 'https://controllers.babylonjs.com/oculus/left.babylon') {
    return 'babylon/assets/left.babylon';
  }
  // Everything else falls back to stripping the filename and looking in babylon/remote/
  const filename = remoteUrl.substring(remoteUrl.lastIndexOf('/') + 1);
  return 'babylon/remote/' + filename;
}

// From https://googlechrome.github.io/samples/service-worker/basic/
// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE).then(async (cache) => {
      for (const file of filesToCache) {
        try {
          await cache.add(file);
        } catch (error) {
          console.error(`Failed to cache ${file}:`, error);
          throw error;
        }
      }
      console.log("All files cached successfully.");
    }).then(() => {
      self.skipWaiting();
    })
  );
});

// useful for debugging, even though the code is currntly not used:
async function checkCachedFiles() {
    const cache = await caches.open(RUNTIME);
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
        console.log(cache);
    }
}

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
      caches.keys().then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
      }).then(cachesToDelete => {
          return Promise.all(cachesToDelete.map(cacheToDelete => {
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

  // 1. Handle specific known remote URLs with explicit mappings
  for (let fn of cached_files) {
    if (url === fn) {
      const localCacheKey = getLocalCacheKey(fn);
      event.respondWith(
        caches.match(localCacheKey, {ignoreSearch: true})
          .then(response => {
            if (!response) {
              console.warn("Service Worker: Cache miss for", localCacheKey, "when handling", url);
            }
            return response || fetch(event.request);
          })
      );
      return;
    }
  }

  // 2. Generic fallback for ANY immersive-web WebXR input profile
  //    This ensures Pico4, Quest variants, and future headsets work offline
  //    by serving the cached meta-quest-touch-plus assets as a universal fallback.
  if (url.includes('immersive-web.github.io/webxr-input-profiles')) {
    let localCacheKey = null;
    if (url.endsWith('/profile.json')) {
      localCacheKey = 'babylon/remote/profile.json';
    } else if (url.endsWith('/left.glb')) {
      localCacheKey = 'babylon/remote/left.glb';
    } else if (url.endsWith('/right.glb')) {
      localCacheKey = 'babylon/remote/right.glb';
    }

    if (localCacheKey) {
      event.respondWith(
        caches.match(localCacheKey, {ignoreSearch: true})
          .then(response => {
            if (!response) {
              console.warn("Service Worker: Generic cache miss for", localCacheKey, "when handling", url);
            }
            return response || fetch(event.request);
          })
      );
      return;
    }
  }

  // 3. Same-origin requests — serve from precache, fallback to network + runtime cache
  if (url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request, {ignoreSearch: true}).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      }).catch(error => {
        console.warn("Service Worker: Fetch failed for same-origin request", url, error);
        // Return a minimal offline response to prevent unhandled rejections
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      })
    );
  }
});
