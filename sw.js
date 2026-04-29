// ─── LecTracker Service Worker ───────────────────────────────────────────────
// Bump CACHE_VERSION every time you deploy a new version of the app.
// The old cache will be deleted and the new files fetched fresh.
const CACHE_VERSION = 'ltr-v1';
const ASSETS = [
  './',
  './LecTrackerV2_8.html',
  './manifest.json'
];

// ── Install: cache all assets ─────────────────────────────────────────────────
self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache){
      return cache.addAll(ASSETS);
    })
  );
  // Activate immediately — don't wait for old tabs to close
  self.skipWaiting();
});

// ── Activate: delete old caches ───────────────────────────────────────────────
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_VERSION; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      // Take control of all open pages right away
      return self.clients.claim();
    })
  );
});

// ── Fetch: network-first for the HTML, cache-first for everything else ─────────
// Network-first on the HTML means users always get the latest version
// as long as they have a connection. Falls back to cache when offline.
self.addEventListener('fetch', function(e){
  var url = new URL(e.request.url);
  var isHTML = url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.endsWith('/');

  if(isHTML){
    // Network first → update cache → fall back to cache
    e.respondWith(
      fetch(e.request).then(function(response){
        var clone = response.clone();
        caches.open(CACHE_VERSION).then(function(cache){
          cache.put(e.request, clone);
        });
        return response;
      }).catch(function(){
        return caches.match(e.request);
      })
    );
  } else {
    // Cache first → fall back to network
    e.respondWith(
      caches.match(e.request).then(function(cached){
        return cached || fetch(e.request).then(function(response){
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache){
            cache.put(e.request, clone);
          });
          return response;
        });
      })
    );
  }
});

// ── Message: force update from app UI ─────────────────────────────────────────
self.addEventListener('message', function(e){
  if(e.data === 'SKIP_WAITING') self.skipWaiting();
});
