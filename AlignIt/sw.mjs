// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v65';
const RUNTIME = 'runtime';

// The files we want to cache for offline use. These are all relative to the
// root of the server. They are cached in the PRECACHE cache.
const base = '/AlignIt'; // Local testing - no base path
const filesToCache = [
  base + '/index.html',
  base + '/manifest.webmanifest',
  base + '/css/style.css',
  base + '/alignit.bundle.js',
  base + '/img/icon.png',
  base + '/img/Arabidopsis.jpg',
  base + '/img/FluorescentCells.jpg',
  base + '/img/RetinaDamage_ImgGen2.jpg',
  base + '/img/RetinaDamage_ImgGen2_inv.jpg',
  base + '/babylon/assets/Droid Sans_Regular.json',
  base + '/babylon/assets/left.babylon',
  base + '/babylon/assets/right.babylon',
  base + '/babylon/babylon.js',
  base + '/babylon/babylon.js.map',
  base + '/babylon/babylonjs.loaders.min.js',
  base + '/babylon/babylonjs.loaders.min.js.map',
  base + '/babylon/babylon.gui.min.js',
  base + '/babylon/earcut.min.js',
  base + '/babylon/recast.js',
  base + '/babylon/remote/r_hand_rhs.glb',
  base + '/babylon/remote/l_hand_rhs.glb',
  base + '/babylon/remote/handsShader.json',
  base + '/babylon/remote/3',
  base + '/babylon/remote/favicon.ico',
  base + '/babylon/remote/mrtk-fluent-backplate.glb',
  base + '/babylon/remote/mrtk-mrdl-backplate-iridescence.png',
  base + '/babylon/remote/mrtk-mrdl-blue-gradient.png',
  base + '/babylon/remote/profile.json',
  base + '/babylon/remote/profilesList.json',
  base + '/babylon/remote/right.glb',
  base + '/babylon/remote/left.glb',
  base + '/babylon/remote/FluorescentCells.jpg',
  base + '/music/Be+Jammin+-+320bit.mp3',
  base + '/music/Emotional+Ballad+-+320bit.mp3',
  base + '/music/forest-with-small-river-birds-and-nature-field-recording-6735.mp3',
  base + '/music/Melodic+Overflow+-+320bit.mp3',
  base + '/music/Now+We+Ride+-+320bit.mp3',
  base + '/music/studiokolomna-spring-192863.mp3',
  base + '/music/The+Sad+Piano+Background+Song+-+320bit.mp3',
  base + '/narrations/lvl1t1.m4a',
  base + '/narrations/lvl1t2.m4a',
  base + '/narrations/lvl1t3.m4a',
  base + '/narrations/lvl1t4.m4a',
  base + '/narrations/lvl1t5.m4a',
  base + '/narrations/lvl1t6.m4a',
  base + '/narrations/lvl2t1.m4a',
  base + '/narrations/lvl2t2.m4a',
  base + '/narrations/lvl2t3.m4a',
  base + '/narrations/lvl2t4.m4a',
  base + '/narrations/lvl2t5.m4a',
  base + '/narrations/lvl2t6.m4a',
  base + '/narrations/lvl2t7.m4a',
  base + '/narrations/InstructionTask1.m4a',
  base + '/sound/freesound_community-bong-105459.mp3',
  base + '/sound/interface-button-154180.mp3',
  base + '/sound/running-gear-6403.mp3',
  base + '/sound/stone_sliding-54021.mp3',
  base + '/sound/switch-150130.mp3',
  base + '/sound/switchbigpowerwav-14710.mp3',
  base + '/sound/notification-5-140376.mp3',
  base + '/sound/wrong-answer-126515.mp3',
  base + '/textures/floor.png',
  base + '/textures/forest.env',
  base + '/textures/forest.hdr',
  base + '/textures/metallic-with-scratches-stains.jpg',
  base + '/textures/mr.jpg',
  base + '/textures/reflectivity.png',
  base + '/textures/room.env',
  base + '/textures/room.hdr',
  base + '/textures/satara.env',
  base + '/textures/SetupImage.jpg',
  base + '/textures/SetupImageSmall.jpg',
  base + '/textures/environment.dds',
  // Mount 3D models (used by lvl_1_TL.json)
  base + '/textures/mounts/cage_mount.obj',
  base + '/textures/mounts/cage_mount.stl',
  base + '/textures/mounts/CF038C_M-P5-Step.step',
  base + '/textures/mounts/clamp.obj',
  base + '/textures/mounts/clamp.stl',
  base + '/textures/mounts/LCP34_M-Step.step',
  base + '/textures/mounts/lens_mount.obj',
  base + '/textures/mounts/lens_mount.stl',
  base + '/textures/mounts/LMR1_M-Step.step',
  base + '/textures/mounts/PH1-Solidworks.sldprt',
  base + '/textures/mounts/PH1-Step.step',
  base + '/textures/mounts/PH50E_M-Step.step',
  base + '/textures/mounts/post.obj',
  base + '/textures/mounts/post.stl',
  base + '/textures/mounts/SmallPost_A.stl',
  base + '/textures/mounts/SmallPost.stl',
  base + '/favicon.ico',
  base + '/translations/de.json',
  base + '/translations/en.json',
  base + '/translations/no.json',
  // Root-level levels
  base + '/lvl_1.json',
  base + '/lvl_2.json',
  base + '/lvl_3.json',
  base + '/lvl_4.json',
  base + '/lvl_5.json',
  base + '/lvl_6.json',
  base + '/lvl_7.json',
  base + '/lvl_8.json',
  base + '/lvl_9.json',
  base + '/lvl_10.json',
  base + '/lvl_11.json',
  base + '/lvl_12.json',
  base + '/lvl_13.json',
  base + '/lvl_14.json',
  // Additional level variants
  base + '/lvl_1_TL.json',
  base + '/lvl_11_old.json',
  base + '/lvl_11irises.json',
  base + '/lvl_12_b.json',
  base + '/lvl_12_old.json',
  base + '/lvl_12_old2.json',
  // Lens levels
  base + '/lenslevels/lvl_1.json',
  base + '/lenslevels/lvl_2.json',
  base + '/lenslevels/lvl_3.json',
  // Test levels
  base + '/testlevels/lvl_1.json',
  base + '/testlevels/lvl_2.json',
  base + '/testlevels/lvl_3.json',
  base + '/testlevels/lvl_4.json',
  base + '/testlevels/lvl_5.json',
  base + '/testlevels/lvl_6.json',
  base + '/testlevels/lvl_1_fibre.json',
  // Interferometer levels
  base + '/interferometerlevels/lvl_1.json',
  base + '/interferometerlevels/lvl1_backup.json',
  base + '/interferometerlevels/narrations/lvl1_final.txt',
  base + '/interferometerlevels/narrations/lvl1_t1_intro.txt',
  base + '/interferometerlevels/narrations/lvl1_t2_beamsplitter.txt',
  base + '/interferometerlevels/narrations/lvl1_t3_mirror1.txt',
  base + '/interferometerlevels/narrations/lvl1_t4_mirror2.txt',
  base + '/interferometerlevels/narrations/lvl1_t5_diverging_lens.txt',
  base + '/interferometerlevels/narrations/lvl1_t6_overlap.txt',
  base + '/interferometerlevels/narrations/lvl1_t7_circular_fringes.txt',
  base + '/interferometerlevels/narrations/lvl1_t8_divergent_calibration.txt'
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
    return base+'/babylon/assets/right.babylon';
  }
  if (remoteUrl === 'https://controllers.babylonjs.com/oculus/left.babylon') {
    return base+'/babylon/assets/left.babylon';
  }
  // Everything else falls back to stripping the filename and looking in babylon/remote/
  const filename = remoteUrl.substring(remoteUrl.lastIndexOf('/') + 1);
  return base+'/babylon/remote/' + filename;
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
      localCacheKey = base+'/babylon/remote/profile.json';
    } else if (url.endsWith('/profilesList.json')) {
      localCacheKey = base+'/babylon/remote/profilesList.json';
    } else if (url.endsWith('/left.glb')) {
      localCacheKey = base+'/babylon/remote/left.glb';
    } else if (url.endsWith('/right.glb')) {
      localCacheKey = base+'/babylon/remote/right.glb';
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

        // Fix: If request is for a directory (ends with /), try index.html
        if (url.endsWith('/')) {
          const indexUrl = url + 'index.html';
          return caches.match(indexUrl, {ignoreSearch: true}).then(indexResponse => {
            if (indexResponse) {
              return indexResponse;
            }
            // Fall through to network/runtime cache
            return fetchAndCache(event.request);
          });
        }

        // Fix: If request is for root favicon, try app's favicon
        if (url === self.location.origin + '/favicon.ico') {
          const appFavicon = self.location.origin + base + '/favicon.ico';
          return caches.match(appFavicon, {ignoreSearch: true}).then(faviconResponse => {
            if (faviconResponse) {
              return faviconResponse;
            }
            return fetchAndCache(event.request);
          });
        }

        return fetchAndCache(event.request);
      }).catch(error => {
        console.warn("Service Worker: Fetch failed for same-origin request", url, error);
        // Return a minimal offline response to prevent unhandled rejections
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      })
    );
  }
});

// Helper: fetch from network and cache in RUNTIME
function fetchAndCache(request) {
  return caches.open(RUNTIME).then(cache => {
    return fetch(request).then(response => {
      // Put a copy of the response in the runtime cache.
      return cache.put(request, response.clone()).then(() => {
        return response;
      });
    });
  });
}