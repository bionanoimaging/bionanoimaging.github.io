
// based on the instructions at https://github.com/codepo8/github-page-pwa
// Change this to your repository name
var GHPATH = '/AlignIt';
var WPATH = 'https://www.nanoimaging.de/AlignIt'

// Choose a different app prefix name
var APP_PREFIX = 'alignit_';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

const cacheName = APP_PREFIX+VERSION;

// The files to make available for offline use. make sure to add 
// others to this list
// var URLS = [    
//   `${GHPATH}/`,
//   `${GHPATH}/index.html`,
//   `${GHPATH}/css/style.css`,
//   `${GHPATH}/js/alignit.js`
// ]

const filesToCache = [
  GHPATH+'/',
  GHPATH+'/index.html',
  GHPATH+'/css/style.css',
  GHPATH+'/js/alignit.js',
  GHPATH+'/js/components.js',
  GHPATH+'/js/lasershaders.mjs',
  GHPATH+ '/js/lens.js',
  GHPATH+ '/img/icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.2/dat.gui.min.js',
  'https://cdn.babylonjs.com/earcut.min.js',
  'https://cdn.babylonjs.com/babylon.js',
  'https://cdn.babylonjs.com/materialsLibrary/babylonjs.materials.min.js',
  'https://cdn.babylonjs.com/proceduralTexturesLibrary/babylonjs.proceduralTextures.min.js',
  'https://cdn.babylonjs.com/postProcessesLibrary/babylonjs.postProcess.min.js',
  'https://cdn.babylonjs.com/loaders/babylonjs.loaders.js',
  'https://cdn.babylonjs.com/gui/babylon.gui.min.js',
  GHPATH+'/music/Be+Jammin\'+-+320bit.mp3',
  GHPATH+'/music/Emotional+Balad+-+320bit.mp3',
  GHPATH+'/music/forest-with-small-river-birds-and-nature-field-recording-6735.mp3',
  GHPATH+'/music/Melodic+Overflow+-+320bit.mp3',
  GHPATH+'/music/Now+We+Ride+-+320bit.mp3',
  GHPATH+'/music/The+Sad+Piano+Background+Song+-+320bit.mp3',
  GHPATH+'/narrations/lvl1t1.m4a',
  GHPATH+'/narrations/lvl1t2.m4a',
  GHPATH+'/narrations/lvl1t3.m4a',
  GHPATH+'/narrations/lvl1t4.m4a',
  GHPATH+'/narrations/lvl1t5.m4a',
  GHPATH+'/narrations/lvl1t6.m4a',
  GHPATH+'/narrations/lvl2t1.m4a',
  GHPATH+'/narrations/lvl2t2.m4a',
  GHPATH+'/narrations/lvl2t3.m4a',
  GHPATH+'/narrations/lvl2t4.m4a',
  GHPATH+'/narrations/lvl2t5.m4a',
  GHPATH+'/narrations/lvl2t6.m4a',
  GHPATH+'/narrations/lvl2t7.m4a',
  GHPATH+'/sound/interface-button-154180.mp3',
  GHPATH+'/sound/running-gear-6403.mp3',
  GHPATH+'/sound/stone_sliding-54021.mp3',
  GHPATH+'/sound/switch-150130.mp3',
  GHPATH+'/sound/switchbigpowerwav-14710.mp3',
  GHPATH+'/textures/floor.png',
  GHPATH+'/textures/forest.env',
  GHPATH+'/textures/forest.hdr',
  GHPATH+'/textures/metallic-with-scratches-stains.jpg',
  GHPATH+'/textures/mr.jpg',
  GHPATH+'/textures/reflectivity.png',
  GHPATH+'/textures/room.env',
  GHPATH+'/textures/room.hdr',
  GHPATH+'/textures/satara.env',
  GHPATH+'/favicon.ico',
  WPATH+'/lvl_1.json',
  WPATH+'/lvl_2.json',
  WPATH+'/lvl_3.json',
  WPATH+'/lvl_4.json',
  WPATH+'/lvl_5.json',
  WPATH+'/lvl_6.json',
  WPATH+'/lvl_7.json',
  WPATH+'/lvl_8.json',
  WPATH+'/lvl_9.json',
  WPATH+'/lvl_10.json',
  WPATH+'/lvl_11.json',
  WPATH+'/lvl_12.json'
];

// Install event - cache the files during service worker installation
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

// Fetch event - intercept network requests and serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(existingCacheName => {
          if (existingCacheName !== cacheName) {
            return caches.delete(existingCacheName);
          }
        })
      );
    })
  );
});